import { MentorLayout } from "@/components/mentor/mentor-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Edit, Mail, MapPin, Phone, Briefcase, GraduationCap, Award } from "lucide-react"

// Sample data - in a real app, this would come from an API
const profileData = {
  name: "Dr. Sarah Johnson",
  email: "sarah.johnson@university.edu",
  phone: "+1 (555) 987-6543",
  location: "San Francisco, CA",
  department: "Computer Science",
  position: "Associate Professor",
  bio: "Computer Science professor with over 10 years of experience in teaching and research. Specializing in web development, machine learning, and software engineering. Passionate about mentoring students and helping them develop practical skills through project-based learning.",
  expertise: [
    "Web Development",
    "Machine Learning",
    "Software Engineering",
    "Database Systems",
    "Cloud Computing",
    "Mobile App Development",
  ],
  technologies: ["JavaScript", "Python", "React", "Node.js", "TensorFlow", "SQL", "MongoDB", "AWS", "Docker", "Git"],
  education: [
    {
      degree: "Ph.D. in Computer Science",
      institution: "Stanford University",
      year: "2010",
    },
    {
      degree: "M.S. in Computer Science",
      institution: "MIT",
      year: "2006",
    },
    {
      degree: "B.S. in Computer Engineering",
      institution: "UC Berkeley",
      year: "2004",
    },
  ],
  experience: [
    {
      position: "Associate Professor",
      organization: "State University",
      duration: "2015 - Present",
    },
    {
      position: "Assistant Professor",
      organization: "Tech University",
      duration: "2010 - 2015",
    },
    {
      position: "Research Scientist",
      organization: "Tech Company Inc.",
      duration: "2008 - 2010",
    },
  ],
  publications: [
    {
      title: "Machine Learning Approaches for Educational Data Mining",
      journal: "Journal of Educational Technology",
      year: "2020",
    },
    {
      title: "Improving Web Application Performance through Modern JavaScript Frameworks",
      conference: "International Conference on Web Engineering",
      year: "2018",
    },
    {
      title: "Cloud-based Architectures for Scalable Educational Platforms",
      journal: "Journal of Cloud Computing",
      year: "2016",
    },
  ],
}

export default function MentorProfilePage() {
  return (
    <MentorLayout>
      <div className="container mx-auto p-4 md:p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">My Profile</h1>
          <p className="text-muted-foreground">Manage your professional information and expertise</p>
        </div>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
          <Card className="lg:col-span-1">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
              </div>
              <CardTitle>{profileData.name}</CardTitle>
              <CardDescription>
                {profileData.position}, {profileData.department}
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
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                    <span>{profileData.department}</span>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 text-sm font-medium">Areas of Expertise</h3>
                  <div className="flex flex-wrap gap-1">
                    {profileData.expertise.map((area) => (
                      <Badge key={area} variant="secondary" className="text-xs">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 text-sm font-medium">Technologies</h3>
                  <div className="flex flex-wrap gap-1">
                    {profileData.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{profileData.bio}</p>

              <Tabs defaultValue="education" className="mt-6">
                <div className="overflow-x-auto">
                  <TabsList className="inline-flex w-full sm:w-auto">
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="publications">Publications</TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="education" className="mt-4 space-y-4">
                  {profileData.education.map((edu, index) => (
                    <div key={index} className="flex items-start gap-3 border-b pb-3 last:border-0">
                      <GraduationCap className="mt-1 h-5 w-5 text-muted-foreground" />
                      <div className="space-y-1">
                        <div className="font-medium">{edu.degree}</div>
                        <div className="text-sm">{edu.institution}</div>
                        <div className="text-sm text-muted-foreground">{edu.year}</div>
                      </div>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="experience" className="mt-4 space-y-4">
                  {profileData.experience.map((exp, index) => (
                    <div key={index} className="flex items-start gap-3 border-b pb-3 last:border-0">
                      <Briefcase className="mt-1 h-5 w-5 text-muted-foreground" />
                      <div className="space-y-1">
                        <div className="font-medium">{exp.position}</div>
                        <div className="text-sm">{exp.organization}</div>
                        <div className="text-sm text-muted-foreground">{exp.duration}</div>
                      </div>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="publications" className="mt-4 space-y-4">
                  {profileData.publications.map((pub, index) => (
                    <div key={index} className="flex items-start gap-3 border-b pb-3 last:border-0">
                      <Award className="mt-1 h-5 w-5 text-muted-foreground" />
                      <div className="space-y-1">
                        <div className="font-medium">{pub.title}</div>
                        <div className="text-sm">{pub.journal ? pub.journal : pub.conference}</div>
                        <div className="text-sm text-muted-foreground">{pub.year}</div>
                      </div>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </MentorLayout>
  )
}

