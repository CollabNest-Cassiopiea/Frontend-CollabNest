import { DashboardLayout } from "../../components/student/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { Download } from "lucide-react"

// Sample data - in a real app, this would come from an API
const certificates = [
  {
    id: 1,
    title: "RESTful API Development",
    issueDate: "April 15, 2023",
    mentor: "Emily Parker",
    skills: ["Node.js", "Express", "API Design"],
    image: "/placeholder.svg?height=200&width=320",
  },
  {
    id: 2,
    title: "Database Design Project",
    issueDate: "March 10, 2023",
    mentor: "Dr. David Kim",
    skills: ["PostgreSQL", "Database Normalization", "SQL"],
    image: "/placeholder.svg?height=200&width=320",
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    issueDate: "January 25, 2023",
    mentor: "Jessica Martinez",
    skills: ["Figma", "User Research", "Prototyping"],
    image: "/placeholder.svg?height=200&width=320",
  },
  {
    id: 4,
    title: "Introduction to Python Programming",
    issueDate: "November 12, 2022",
    mentor: "Prof. Robert Taylor",
    skills: ["Python", "Data Structures", "Algorithms"],
    image: "/placeholder.svg?height=200&width=320",
  },
]

export default function CertificatesPage() {
  return (
    <DashboardLayout>
      <div className="container mx-auto p-4 md:p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">My Certificates</h1>
          <p className="text-muted-foreground">Showcase of your completed project achievements</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <Card key={certificate.id} className="overflow-hidden">
              <div className="aspect-[16/9] w-full overflow-hidden bg-muted">
                <img
                  src={certificate.image || "/placeholder.svg"}
                  alt={certificate.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{certificate.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Issued on:</span>
                    <span>{certificate.issueDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Mentor:</span>
                    <span>{certificate.mentor}</span>
                  </div>
                  <div className="pt-2">
                    <span className="text-muted-foreground">Skills:</span>
                    <div className="mt-1 flex flex-wrap gap-1">
                      {certificate.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full gap-2">
                  <Download className="h-4 w-4" />
                  Download Certificate
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}

