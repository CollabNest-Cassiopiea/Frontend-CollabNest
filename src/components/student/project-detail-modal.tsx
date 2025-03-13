"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { Project } from "../../types/project"

interface ProjectDetailModalProps {
  isOpen: boolean
  onClose: () => void
  project: Project
  onJoin: (project: Project) => void // Add this prop
}

export function ProjectDetailModal({
  isOpen,
  onClose,
  project,
  onJoin, // Add this to destructured props
}: ProjectDetailModalProps) {
  const navigate = useNavigate()
  const [isJoining, setIsJoining] = useState(false)

  const handleJoinProject = async () => {
    setIsJoining(true);
    try {
      // Remove the API call completely
      // Instead, simulate successful join
      console.log("Simulating project join for ID:", project.id);

      // Update UI state
      onJoin(project);

      // Close modal and navigate
      onClose();
      navigate(`/student/projects/${project.id}`); // Match your route path

    } catch (error) {
      console.error("Join simulation failed:", error);
    } finally {
      setIsJoining(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-xl">{project.title}</DialogTitle>
          <DialogDescription>Project details and requirements</DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={project.mentor.avatar || "/placeholder.svg?height=32&width=32"}
                alt={project.mentor.name}
              />
              <AvatarFallback>{project.mentor.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Mentor: {project.mentor.name}</p>
            </div>
          </div>

          <div>
            <h4 className="mb-2 text-sm font-medium">Description</h4>
            <p className="text-sm text-muted-foreground">{project.description}</p>
          </div>

          <div>
            <h4 className="mb-2 text-sm font-medium">Tech Stack</h4>
            <div className="flex flex-wrap gap-1">
              {project.techStack && project.techStack.length > 0 ? (
                project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">No technologies specified</p>
              )}
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleJoinProject} disabled={isJoining}>
            {isJoining ? "Joining..." : "Join Project"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

