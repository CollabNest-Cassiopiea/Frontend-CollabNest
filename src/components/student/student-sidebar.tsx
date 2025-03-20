"use client"

import { Link, useLocation } from "react-router-dom"
import { BookOpen, BadgeIcon as Certificate, Home, LogOut, User, Bell, Folder, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { ModeToggle } from "./mode-toggle"

interface StudentSidebarProps {
  onClose?: () => void
}

export function StudentSidebar({ onClose }: StudentSidebarProps) {
  const location = useLocation()
  const pathname = location.pathname

  const routes = [
    {
      label: "Home",
      icon: Home,
      href: "/student",
      active: pathname === "/student",
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
        <Link to="/student" className="flex items-center gap-2 font-semibold">
          <BookOpen className="h-6 w-6" />
          <span>CollabNest</span>
        </Link>
        
        {/* Close button for mobile */}
        {onClose && (
          <Button variant="ghost" size="icon" className="ml-auto md:hidden" onClick={onClose}>
            <X className="h-4 w-4" />
            <span className="sr-only">Close Sidebar</span>
          </Button>
        )}
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
              onClick={() => {
                // Close sidebar on mobile when clicking a link
                if (onClose && window.innerWidth < 768) {
                  onClose()
                }
              }}
            >
              <route.icon className="h-4 w-4" />
              {route.label}
            </Link>
          ))}
        </nav>
      </div>
      
      <div className="mt-auto border-t p-4">
        <div className="flex items-center gap-2 pb-4">
          <div className="grid gap-0.5 text-sm">
            <div className="font-medium text-xs md:text-sm">Diptanshu</div>
            <div className="text-xs text-muted-foreground hidden md:block">MM, Year 2023</div>
          </div>
        </div>
        <Button variant="outline" className="w-full justify-start gap-2 text-xs md:text-sm">
          <LogOut className="h-4 w-4" />
          Log Out
        </Button>
      </div>
    </div>
  )
}