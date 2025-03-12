import { MentorLayout } from "@/components/mentor/mentor-layout"
import { MentorProjectCard } from "@/components/mentor/mentor-project-card"
import { MeetingCard } from "@/components/mentor/meeting-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Sample data - in a real app, this would come from an API
const ongoingProjects = [
  {
    id: 1,
    title: "Web Development Portfolio",
    description: "Create a professional portfolio website showcasing projects and skills using React and Tailwind CSS.",
    techStack: ["React", "Tailwind CSS", "Next.js"],
    duration: "8 weeks",
    progress: 65,
    studentsEnrolled: 3,
    maxStudents: 5,
    status: "in-progress" as const,
  },
  {
    id: 2,
    title: "Machine Learning Image Classifier",
    description: "Build an image classification model using TensorFlow to identify objects in photographs.",
    techStack: ["Python", "TensorFlow", "Keras"],
    duration: "10 weeks",
    progress: 30,
    studentsEnrolled: 4,
    maxStudents: 4,
    status: "in-progress" as const,
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Develop a cross-platform mobile application using React Native for task management.",
    techStack: ["React Native", "Firebase", "Redux"],
    duration: "12 weeks",
    progress: 0,
    studentsEnrolled: 0,
    maxStudents: 3,
    status: "open" as const,
  },
]

const scheduledMeetings = [
  {
    id: 1,
    title: "Project Review Session",
    student: { name: "John Doe" },
    date: "May 15, 2023",
    time: "2:00 PM",
  },
  {
    id: 2,
    title: "Weekly Check-in",
    student: { name: "Emma Wilson" },
    date: "May 17, 2023",
    time: "10:30 AM",
  },
  {
    id: 3,
    title: "Project Kickoff",
    student: { name: "Michael Brown" },
    date: "May 18, 2023",
    time: "3:00 PM",
  },
]

const pendingApprovals = 5
const totalProjects = 8
const activeStudents = 12

export default function MentorDashboardPage() {
  return (
    <MentorLayout>
      <div className="container mx-auto p-4 md:p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Welcome back, Dr. Johnson!</h1>
          <p className="text-muted-foreground">Here's an overview of your mentoring activities</p>
        </div>

        <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalProjects}</div>
              <p className="text-xs text-muted-foreground">Across various technologies</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Active Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activeStudents}</div>
              <p className="text-xs text-muted-foreground">Currently mentoring</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{pendingApprovals}</div>
              <p className="text-xs text-muted-foreground">Waiting for your review</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Ongoing Projects</CardTitle>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>
              <CardDescription>Projects you are currently mentoring</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {ongoingProjects.map((project) => (
                  <MentorProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    techStack={project.techStack}
                    duration={project.duration}
                    progress={project.progress}
                    studentsEnrolled={project.studentsEnrolled}
                    maxStudents={project.maxStudents}
                    status={project.status}
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Scheduled Meetings</CardTitle>
              <CardDescription>Upcoming sessions with students</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scheduledMeetings.map((meeting) => (
                  <MeetingCard
                        key={meeting.id}
                        title={meeting.title}
                        student={meeting.student}
                        date={meeting.date}
                        time={meeting.time} mentor={{
                            name: "",
                            avatar: undefined
                        }}                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MentorLayout>
  )
}

