export interface StudentProfile {
  bio: string | null;
  branch: string;
  experience: string | null;
  name: string;
  rollno: string;
  skills: string[]; // Array of skills
  student_id: number;
  user_id: number;
  year: number | null; // Assuming 'year' can be null since it's incomplete
}
