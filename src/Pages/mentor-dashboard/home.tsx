"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { MentorLayout } from "@/components/mentor/mentor-layout";
import { MentorProjectCard } from "@/components/mentor/mentor-project-card";
import { MeetingCard } from "@/components/mentor/meeting-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Sample data - in a real app, this would come from an API
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
];

export default function MentorDashboardPage() {
  interface Project {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    duration: string;
    progress: number;
    studentsEnrolled: number;
    maxStudents: number;
    status: "in-progress" | "open" | "completed";
  }
  
  const [ongoingProjects, setOngoingProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mentorId, setMentorId] = useState<string | null>(null);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setMentorId(user.uid);
      } else {
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, [auth, navigate]);

  useEffect(() => {
    if (!mentorId) return;

    const fetchProjects = async () => {
      try {
        const user = auth.currentUser;
        if (!user) throw new Error("User not authenticated");

        const token = await user.getIdToken();
        const response = await fetch(`/api/mentors/projects`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) throw new Error("Failed to fetch projects");

        const data = await response.json();

        if (!data.success || !Array.isArray(data.projects)) {
          throw new Error("Invalid data format");
        }

        const ongoing = data.projects
          .filter((project: { status: string }) => project.status === "IN_PROGRESS")
          .map((project: {
            status: "in-progress" | "open" | "completed";
            project_id: any;
            title: any;
            description: any;
            tech_stack: any;
            duration: any;
            progress: any;
            students_enrolled: any;
            max_students: any;
          }) => ({
            id: project.project_id,
            title: project.title,
            description: project.description,
            techStack: project.tech_stack || [],
            duration: project.duration || "N/A",
            progress: project.progress || 0,
            studentsEnrolled: project.students_enrolled || 0,
            maxStudents: project.max_students || 0,
            status: project.status === "in-progress" ? "in-progress" : project.status === "open" ? "open" : "completed",
          }));
  
        setOngoingProjects(ongoing);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setError(error instanceof Error ? error.message : "Unknown error");
        setLoading(false);
      }
    };

    fetchProjects();
  }, [mentorId, auth]);

  return (
    <MentorLayout>
      <div className="container mx-auto p-4 md:p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Welcome back, Dr. Johnson!</h1>
          <p className="text-muted-foreground">Here's an overview of your mentoring activities</p>
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
              {loading ? (
                <div>Loading projects...</div>
              ) : error ? (
                <div className="text-red-500">{error}</div>
              ) : ongoingProjects.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-lg font-semibold mb-2">No ongoing projects!</p>
                  <Button onClick={() => navigate("/projects")}>Create a Project</Button>
                </div>
              ) : (
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
              )}
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
                    time={meeting.time}
                    mentor={{ name: "Dr. Johnson", avatar: undefined }}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MentorLayout>
  );
}