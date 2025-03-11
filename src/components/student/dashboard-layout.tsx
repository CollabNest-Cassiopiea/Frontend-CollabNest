import type React from "react"
import { StudentSidebar } from "./student-sidebar"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <div className="hidden w-64 md:block">
        <StudentSidebar />
      </div>
      <div className="flex w-full flex-col md:pl-0">
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  )
}

