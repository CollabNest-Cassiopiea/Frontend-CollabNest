import { DashboardLayout } from "../../components/student/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Badge } from "../../components/ui/badge"
import { Bell, Calendar, CheckCircle, Clock, MessageSquare } from "lucide-react"

// Sample data - in a real app, this would come from an API
const notifications = [
  {
    id: 1,
    title: "Project Feedback Received",
    message: "Dr. Sarah Johnson has provided feedback on your Web Development Portfolio project.",
    time: "2 hours ago",
    type: "feedback",
    read: false,
  },
  {
    id: 2,
    title: "Meeting Scheduled",
    message: "Weekly check-in with Prof. Michael Chen has been scheduled for May 17, 10:30 AM.",
    time: "Yesterday",
    type: "meeting",
    read: false,
  },
  {
    id: 3,
    title: "Deadline Reminder",
    message: "The submission deadline for Machine Learning Image Classifier project is in 3 days.",
    time: "Yesterday",
    type: "deadline",
    read: true,
  },
  {
    id: 4,
    title: "Certificate Issued",
    message: "You have been issued a certificate for completing the Database Design Project.",
    time: "3 days ago",
    type: "certificate",
    read: true,
  },
  {
    id: 5,
    title: "New Project Available",
    message: "A new project 'Cloud-based Microservices' matching your interests is now available.",
    time: "5 days ago",
    type: "project",
    read: true,
  },
]

export default function StudentNotifications() {
  const unreadCount = notifications.filter((n) => !n.read).length
  const allNotifications = [...notifications]
  const unreadNotifications = notifications.filter((n) => !n.read)

  const getIcon = (type: string) => {
    switch (type) {
      case "feedback":
        return <MessageSquare className="h-5 w-5 text-blue-500" />
      case "meeting":
        return <Calendar className="h-5 w-5 text-purple-500" />
      case "deadline":
        return <Clock className="h-5 w-5 text-yellow-500" />
      case "certificate":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      default:
        return <Bell className="h-5 w-5 text-gray-500" />
    }
  }

  return (
    <DashboardLayout>
      <div className="container mx-auto p-4 md:p-6">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold">Notifications</h1>
            <p className="text-muted-foreground">Stay updated with your project activities</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Mark All as Read</Button>
            <Button variant="outline">Settings</Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="unread">
              Unread
              {unreadCount > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {unreadCount}
                </Badge>
              )}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>All Notifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {allNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`flex gap-4 rounded-lg border p-4 ${!notification.read ? "bg-muted/50" : ""}`}
                  >
                    <div className="mt-0.5">{getIcon(notification.type)}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <h3 className="font-medium">{notification.title}</h3>
                        <span className="text-xs text-muted-foreground">{notification.time}</span>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">{notification.message}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="unread" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Unread Notifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {unreadNotifications.length > 0 ? (
                  unreadNotifications.map((notification) => (
                    <div key={notification.id} className="flex gap-4 rounded-lg border bg-muted/50 p-4">
                      <div className="mt-0.5">{getIcon(notification.type)}</div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <h3 className="font-medium">{notification.title}</h3>
                          <span className="text-xs text-muted-foreground">{notification.time}</span>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">{notification.message}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <Bell className="mb-2 h-12 w-12 text-muted-foreground/50" />
                    <h3 className="text-lg font-medium">No unread notifications</h3>
                    <p className="text-sm text-muted-foreground">
                      You're all caught up! Check back later for new updates.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

