import { useState } from "react"
import type React from "react"
import { MentorSidebar } from "./mentor-sidebar"
import { PanelLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MentorLayoutProps {
  children: React.ReactNode
}

export function MentorLayout({ children }: MentorLayoutProps) {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false)
  
  return (
    <div className="flex min-h-screen relative bg-background">
      {/* Mobile sidebar overlay */}
      {showMobileSidebar && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setShowMobileSidebar(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed z-50 inset-y-0 left-0 transform md:relative md:translate-x-0 md:w-64 transition duration-200 ease-in-out ${
        showMobileSidebar ? "translate-x-0" : "-translate-x-full"
      } md:block`}>
        <MentorSidebar onClose={() => setShowMobileSidebar(false)} />
      </div>
      
      {/* Main content */}
      <div className="flex w-full flex-col">
        {/* Mobile header with menu button */}
        <div className="md:hidden flex items-center h-14 border-b px-4">
          <Button 
            variant="outline" 
            size="icon" 
            className="h-8 w-8"
            onClick={() => setShowMobileSidebar(!showMobileSidebar)}
          >
            <PanelLeft className="h-4 w-4" />
            <span className="sr-only">Toggle Sidebar</span>
          </Button>
          <div className="ml-4 font-semibold">CollabNest</div>
        </div>
        
        <main className="flex-1 overflow-y-auto px-4 py-4 md:px-6">
          {children}
        </main>
      </div>
    </div>
  )
}