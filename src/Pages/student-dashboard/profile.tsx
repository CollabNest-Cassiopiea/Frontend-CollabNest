import { DashboardLayout } from "@/components/student/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Edit, Mail, MapPin, Phone, School } from "lucide-react"

// Sample data - in a real app, this would come from an API
const profileData = {
  name: "John Doe",
  email: "john.doe@university.edu",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  university: "State University",
  department: "Computer Science",
  year: "3rd Year",
  bio: "Passionate computer science student with interests in web development, machine learning, and cybersecurity. Looking to collaborate on innovative projects and expand my technical skills.",
  skills: ["JavaScript", "React", "Node.js", "Python", "TensorFlow", "SQL", "Git", "Docker", "AWS", "UI/UX Design"],
  interests: ["Web Development", "Machine Learning", "Cybersecurity", "Cloud Computing", "Mobile App Development"],
  achievements: [
    { title: "Hackathon Winner", date: "October 2022" },
    { title: "Dean's List", date: "Spring 2022" },
    { title: "Open Source Contributor", date: "2021-Present" },
  ],
  education: [
    {
      institution: "State University",
      degree: "Bachelor of Science in Computer Science",
      date: "2020-2024 (Expected)",
    },
  ],
  projects: [
    {
      title: "E-commerce Platform",
      description: "Developed a full-stack e-commerce platform using MERN stack",
      date: "January 2023",
    },
    {
      title: "Sentiment Analysis Tool",
      description: "Created a machine learning model to analyze customer reviews",
      date: "November 2022",
    },
  ],
}

export default function StudentProfile() {
  return (
    <DashboardLayout>
      <div className="container mx-auto p-4 md:p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">My Profile</h1>
          <p className="text-muted-foreground">Manage your personal information and preferences</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-1">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
              <CardTitle>{profileData.name}</CardTitle>
              <CardDescription>
                {profileData.department}, {profileData.year}
              </CardDescription>
              <Button variant="outline" size="sm" className="mt-2 gap-2">
                <Edit className="h-3.5 w-3.5" />
                Edit Profile
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{profileData.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{profileData.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{profileData.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <School className="h-4 w-4 text-muted-foreground" />
                    <span>{profileData.university}</span>
                  </div>
                </div>

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

                <div>
                  <h3 className="mb-2 text-sm font-medium">Interests</h3>
                  <div className="flex flex-wrap gap-1">
                    {profileData.interests.map((interest) => (
                      <Badge key={interest} variant="outline" className="text-xs">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{profileData.bio}</p>

              <Tabs defaultValue="achievements" className="mt-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="achievements">Achievements</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="projects">Projects</TabsTrigger>
                </TabsList>
                <TabsContent value="achievements" className="mt-4 space-y-4">
                  {profileData.achievements.map((achievement, index) => (
                    <div key={index} className="flex justify-between border-b pb-2 last:border-0">
                      <span className="font-medium">{achievement.title}</span>
                      <span className="text-sm text-muted-foreground">{achievement.date}</span>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="education" className="mt-4 space-y-4">
                  {profileData.education.map((edu, index) => (
                    <div key={index} className="space-y-1 border-b pb-2 last:border-0">
                      <div className="font-medium">{edu.institution}</div>
                      <div className="text-sm">{edu.degree}</div>
                      <div className="text-sm text-muted-foreground">{edu.date}</div>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="projects" className="mt-4 space-y-4">
                  {profileData.projects.map((project, index) => (
                    <div key={index} className="space-y-1 border-b pb-2 last:border-0">
                      <div className="font-medium">{project.title}</div>
                      <div className="text-sm text-muted-foreground">{project.description}</div>
                      <div className="text-xs text-muted-foreground">{project.date}</div>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

