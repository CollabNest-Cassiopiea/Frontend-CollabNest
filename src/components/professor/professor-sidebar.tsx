"use client"

import { Link, useLocation } from "react-router-dom"
import { BookOpen, BadgeIcon as Home, LogOut, User, Bell, Folder, X, CheckSquare } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { ModeToggle } from "../student/mode-toggle"

interface ProfessorSidebarProps {
  onClose?: () => void
}

export function ProfessorSidebar({ onClose }: ProfessorSidebarProps) {
  const location = useLocation()
  const pathname = location.pathname

  const routes = [
    {
      label: "Home",
      icon: Home,
      href: "/professor",
      active: pathname === "/professor",
    },
    {
      label: "My Projects",
      icon: Folder,
      href: "/professor/projects",
      active: pathname === "/professor/projects",
    },
    {
      label: "Approvals",
      icon: CheckSquare,
      href: "/professor/approvals",
      active: pathname === "/professor/approvals",
    },
    {
      label: "Notifications",
      icon: Bell,
      href: "/professor/notifications",
      active: pathname === "/professor/notifications",
    },
    {
      label: "Profile",
      icon: User,
      href: "/professor/profile",
      active: pathname === "/professor/profile",
    },
  ]

  return (
    <div className="flex h-full flex-col border-r bg-background">
      <div className="flex h-14 items-center border-b px-4">
        <Link to="/mentor" className="flex items-center gap-2 font-semibold">
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
          <Avatar className="h-8 w-8 md:h-9 md:w-9">
            <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="grid gap-0.5 text-sm">
            <div className="font-medium text-xs md:text-sm">Dr. Robert Taylor</div>
            <div className="text-xs text-muted-foreground hidden md:block" >Computer Science Professor</div>
          </div>
          <ModeToggle className="ml-auto" />
        </div>
        <Button variant="outline" className="w-full justify-start gap-2 text-xs md:text-sm">
          <LogOut className="h-4 w-4" />
          Log Out
        </Button>
      </div>
    </div>
  )
}