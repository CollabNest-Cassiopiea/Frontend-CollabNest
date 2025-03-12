import { create } from "zustand";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";

// import { getAuth } from 'firebase/auth';
import { OAuthProvider } from 'firebase/auth';
import { firebaseAuth, microsoftProvider } from "../utils/firebase";

const AUTH_API_URL = `http://localhost:3000/api/auth`
axios.defaults.withCredentials = true;

let api = axios.create({
  baseURL: AUTH_API_URL
});

// Add response interceptor
api.interceptors.response.use(
  (response) => response, // Return response if successful
  (error) => {
    if (error.response && (error.response.status === 401 || error.response.status === 500)) {
      localStorage.setItem("auth", "false"); // Set auth to false
      localStorage.removeItem("user");
      localStorage.removeItem("authorization");
    }
    return Promise.reject(error); // Propagate the error
  }
);

interface User{
  role: "STUDENT" | "MENTOR" | "PROFESSOR" | "ADMIN"
}

interface AuthState {
	user: null | User;
	isAuthenticated: boolean;
	authError: string | null;
	isAuthLoading: boolean;
	isCheckingAuth: boolean;
  
	signin: () => Promise<void>;
	logout: () => Promise<void>;
	checkAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => {
  const user_raw = localStorage.getItem("user");
  console.log(user_raw);
  let user;
  try{
    user = user_raw?JSON.parse(user_raw):null
  }catch{
    user = null;
  }
  console.log(user);
  return {
	user: user,
	isAuthenticated: localStorage.getItem('auth') === "true",
	authError: null,
	isAuthLoading: false,
	isCheckingAuth: true,
	signin: async () => {
 		set({ isAuthLoading: true, authError: null });
 		try{
 			const result = await signInWithPopup(firebaseAuth, microsoftProvider);
      // const user = result.user;
      // Get the Access Token
      const credential = OAuthProvider.credentialFromResult(result);
      const accessToken = credential?.accessToken;
      
      console.log(result.operationType);
      const token = await result.user.getIdToken();
      const response = await api.post(`/oauthMicrosoft`, {
          firebase_token: token,
          access_token: accessToken
      });
      console.log(response.data.user);
      
      localStorage.setItem("auth", "true");
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("authorization", response.data.token);  // TODO: USE COOKIES INSTED WHICH IS MORE SECURE
      
      set({ user: response.data.user, isAuthenticated: true, isAuthLoading: false});
 		} catch (error: any){
 			set({ authError: error.message || "Error signing up", isAuthenticated: false, isAuthLoading: false });
 		}
 	},
	checkAuth: async () => {
		set({ isCheckingAuth: true, authError: null });
    const authorization_token = localStorage.getItem("authorization")
    if (!authorization_token) {
			localStorage.setItem("auth", "false");
      localStorage.removeItem("user");
      localStorage.removeItem("authorization");
      throw "ERROR NO TOKEN FOUND"
    }
		try {
			const response = await api.get(`/check-auth`, {
        headers: {
          Authorization: `Bearer ${authorization_token}`, // TODO: use cookies
        },
      });
      console.log(response.data);
			localStorage.setItem("auth", "true");
      localStorage.setItem("user", JSON.stringify(response.data.user));
			set({ user: response.data.user, isAuthenticated: true, isCheckingAuth: false });
		} catch (error: any) {
			set({ authError:  error.message || "Error Check Auth", isCheckingAuth: false, isAuthenticated: false });
		}
	},
  logout: async () => {
		set({ isAuthLoading: true, authError: null });
		try {
      await firebaseAuth.signOut();
			localStorage.setItem("auth", "false");
      localStorage.removeItem("user");
      localStorage.removeItem("authorization");
			set({ user: null, isAuthenticated: false, authError: null, isAuthLoading: false});
		} catch (error: any) {
			set({ authError: "Error logging out", isAuthLoading: false });
			throw error;
		}
	},
}});