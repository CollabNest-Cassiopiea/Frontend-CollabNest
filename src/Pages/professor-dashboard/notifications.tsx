import { ProfessorLayout } from "@/components/professor/professor-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Bell, Calendar, CheckCircle, MessageSquare, UserPlus } from "lucide-react"

// Sample data - in a real app, this would come from an API
const notifications = [
  {
    id: 1,
    title: "New Application Received",
    message: "John Doe has applied to join your Web Development Portfolio project.",
    time: "2 hours ago",
    type: "application",
    read: false,
  },
  {
    id: 2,
    title: "Project Milestone Completed",
    message: "Emma Wilson has completed the first milestone of Machine Learning Image Classifier project.",
    time: "Yesterday",
    type: "milestone",
    read: false,
  },
  {
    id: 3,
    title: "Meeting Reminder",
    message: "You have a scheduled meeting with Michael Brown in 1 hour.",
    time: "Yesterday",
    type: "meeting",
    read: true,
  },
  {
    id: 4,
    title: "Project Completed",
    message: "The Database Design Project has been successfully completed by all students.",
    time: "3 days ago",
    type: "completion",
    read: true,
  },
  {
    id: 5,
    title: "New Message",
    message: "You have received a new message from Sophia Garcia regarding the Blockchain Smart Contract project.",
    time: "5 days ago",
    type: "message",
    read: true,
  },
]

export default function ProfessorNotificationsPage() {
  const unreadCount = notifications.filter((n) => !n.read).length
  const allNotifications = [...notifications]
  const unreadNotifications = notifications.filter((n) => !n.read)

  const getIcon = (type: string) => {
    switch (type) {
      case "application":
        return <UserPlus className="h-5 w-5 text-blue-500" />
      case "milestone":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "meeting":
        return <Calendar className="h-5 w-5 text-purple-500" />
      case "completion":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "message":
        return <MessageSquare className="h-5 w-5 text-blue-500" />
      default:
        return <Bell className="h-5 w-5 text-gray-500" />
    }
  }

  return (
    <ProfessorLayout>
      <div className="container mx-auto p-4 md:p-6">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold">Notifications</h1>
            <p className="text-muted-foreground">Stay updated with your mentoring activities</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="w-full sm:w-auto">
              Mark All as Read
            </Button>
            <Button variant="outline" size="sm" className="w-full sm:w-auto">
              Settings
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="space-y-4">
          <div className="overflow-x-auto">
            <TabsList className="inline-flex w-full sm:w-auto">
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
          </div>

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
    </ProfessorLayout>
  )
}

