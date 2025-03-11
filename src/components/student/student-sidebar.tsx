"use client"

import { Link, useLocation } from "react-router-dom"
import { BookOpen, BadgeIcon as Certificate, Home, LogOut, PanelLeft, User, Bell, Folder } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { ModeToggle } from "./mode-toggle"

export function StudentSidebar() {
  const location = useLocation()
  const pathname = location.pathname

  const routes = [
    {
      label: "Home",
      icon: Home,
      href: "/student/home",
      active: pathname === "/student/home",
    },
    {
      label: "My Projects",
      icon: Folder,
      href: "/student/projects",
      active: pathname === "/student/projects",
    },
    {
      label: "Certificates",
      icon: Certificate,
      href: "/student/certificates",
      active: pathname === "/student/certificates",
    },
    {
      label: "Profile",
      icon: User,
      href: "/student/profile",
      active: pathname === "/student/profile",
    },
    {
      label: "Notifications",
      icon: Bell,
      href: "/student/notifications",
      active: pathname === "/student/notifications",
    },
  ]

  return (
    <div className="flex h-full flex-col border-r bg-background">
      <div className="flex h-14 items-center border-b px-4">
        <Link to="/student/home" className="flex items-center gap-2 font-semibold">
          <BookOpen className="h-6 w-6" />
          <span>CollabNest</span>
        </Link>
        <Button variant="outline" size="icon" className="ml-auto h-8 w-8 lg:hidden">
          <PanelLeft className="h-4 w-4" />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-2 text-sm font-medium">
          {routes.map((route) => (
            <Link
              key={route.href}
              to={route.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                route.active && "bg-muted text-primary",
              )}
            >
              <route.icon className="h-4 w-4" />
              {route.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-auto border-t p-4">
        <div className="flex items-center gap-2 pb-4">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="grid gap-0.5 text-sm">
            <div className="font-medium">John Doe</div>
            <div className="text-xs text-muted-foreground">Computer Science, Year 3</div>
          </div>
          <ModeToggle className="ml-auto" />
        </div>
        <Button variant="outline" className="w-full justify-start gap-2">
          <LogOut className="h-4 w-4" />
          Log Out
        </Button>
      </div>
    </div>
  )
}