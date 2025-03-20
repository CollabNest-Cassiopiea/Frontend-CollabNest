import { DashboardLayout } from "@/components/student/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Edit, School } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthStore } from "@/store/authStore";

// Define the profile data type based on the schema
interface ProfileData {
  name: string;
  bio: string;
  skills: string[];
  experience: string;
  branch: string;
  year: number;
  rollno: string;
}

export default function StudentProfile() {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const { user, isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (isAuthenticated && user) {
      fetchProfileData(Number(user.user_id)); // Ensure user_id is a number
    }
  }, [isAuthenticated, user]);

  const fetchProfileData = async (userId: number) => {
    try {
      const response = await axios.get(`/api/student-profiles/${userId}/profile`);
      setProfileData(response.data);
    } catch (error) {
      console.error("Failed to fetch profile data:", error);
    }
  };

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <DashboardLayout>
      <div className="container mx-auto p-4 md:p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">My Profile</h1>
          <p className="text-muted-foreground">Manage your personal information and preferences</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Left Column: Profile Overview */}
          <Card className="md:col-span-1">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
                  <AvatarFallback>{profileData.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>
              <CardTitle>{profileData.name}</CardTitle>
              <CardDescription>
                {profileData.branch}, Year {profileData.year}
              </CardDescription>
              <Button variant="outline" size="sm" className="mt-2 gap-2">
                <Edit className="h-3.5 w-3.5" />
                Edit Profile
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Roll Number */}
                <div className="flex items-center gap-2 text-sm">
                  <School className="h-4 w-4 text-muted-foreground" />
                  <span>Roll No: {profileData.rollno}</span>
                </div>

                {/* Skills */}
                <div>
                  <h3 className="mb-2 text-sm font-medium">Skills</h3>
                  <div className="flex flex-wrap gap-1">
                    {profileData.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <h3 className="mb-2 text-sm font-medium">Experience</h3>
                  <p className="text-sm text-muted-foreground">{profileData.experience}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right Column: Bio and Additional Details */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Bio */}
              <p className="text-sm text-muted-foreground">{profileData.bio}</p>

              {/* Tabs for Additional Details */}
              <Tabs defaultValue="skills" className="mt-6">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                  <TabsTrigger value="experience">Experience</TabsTrigger>
                </TabsList>
                <TabsContent value="skills" className="mt-4">
                  <div className="flex flex-wrap gap-1">
                    {profileData.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="experience" className="mt-4">
                  <p className="text-sm text-muted-foreground">{profileData.experience}</p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}