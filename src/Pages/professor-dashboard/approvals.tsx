import { ProfessorLayout } from "@/components/professor/professor-layout"
import { StudentApprovalCard } from "@/components/mentor/student-approval-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

// Sample data - in a real app, this would come from an API
const pendingApprovals = [
  {
    id: 1,
    student: {
      name: "John Doe",
      department: "Computer Science",
      year: "3rd Year",
    },
    project: "Web Development Portfolio",
    skills: ["JavaScript", "React", "Tailwind CSS"],
    appliedDate: "May 10, 2023",
  },
  {
    id: 2,
    student: {
      name: "Emma Wilson",
      department: "Computer Engineering",
      year: "2nd Year",
    },
    project: "Machine Learning Image Classifier",
    skills: ["Python", "TensorFlow", "Data Analysis"],
    appliedDate: "May 11, 2023",
  },
  {
    id: 3,
    student: {
      name: "Michael Brown",
      department: "Information Technology",
      year: "4th Year",
    },
    project: "Mobile App Development",
    skills: ["React Native", "JavaScript", "Firebase"],
    appliedDate: "May 12, 2023",
  },
  {
    id: 4,
    student: {
      name: "Sophia Garcia",
      department: "Computer Science",
      year: "3rd Year",
    },
    project: "Blockchain Smart Contract",
    skills: ["Solidity", "JavaScript", "Web3.js"],
    appliedDate: "May 13, 2023",
  },
  {
    id: 5,
    student: {
      name: "David Kim",
      department: "Data Science",
      year: "2nd Year",
    },
    project: "Machine Learning Image Classifier",
    skills: ["Python", "Pandas", "Scikit-learn"],
    appliedDate: "May 14, 2023",
  },
]

const approvedStudents = [
  {
    id: 6,
    student: {
      name: "Alex Johnson",
      department: "Computer Science",
      year: "4th Year",
    },
    project: "Web Development Portfolio",
    skills: ["JavaScript", "React", "Node.js"],
    appliedDate: "May 5, 2023",
  },
  {
    id: 7,
    student: {
      name: "Jessica Martinez",
      department: "Software Engineering",
      year: "3rd Year",
    },
    project: "RESTful API Development",
    skills: ["Node.js", "Express", "MongoDB"],
    appliedDate: "May 6, 2023",
  },
]

const rejectedStudents = [
  {
    id: 8,
    student: {
      name: "Ryan Taylor",
      department: "Information Systems",
      year: "2nd Year",
    },
    project: "Database Design Project",
    skills: ["SQL", "Database Design"],
    appliedDate: "May 7, 2023",
  },
]

export default function ProfessorApprovalsPage() {
  return (
    <ProfessorLayout>
      <div className="container mx-auto p-4 md:p-6">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold">Student Approvals</h1>
            <p className="text-muted-foreground">Review and manage student project applications</p>
          </div>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search students..." className="w-full pl-8" />
          </div>
        </div>

        <Tabs defaultValue="pending" className="space-y-4">
          <div className="overflow-x-auto">
            <TabsList className="inline-flex w-full sm:w-auto">
              <TabsTrigger value="pending">Pending ({pendingApprovals.length})</TabsTrigger>
              <TabsTrigger value="approved">Approved ({approvedStudents.length})</TabsTrigger>
              <TabsTrigger value="rejected">Rejected ({rejectedStudents.length})</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="pending" className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {pendingApprovals.map((approval) => (
                <StudentApprovalCard
                  key={approval.id}
                  student={approval.student}
                  project={approval.project}
                  skills={approval.skills}
                  appliedDate={approval.appliedDate}
                  onApprove={() => {}}
                  onReject={() => {}}
                  onScheduleInterview={() => {}}
                  onViewProfile={() => {}}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="approved" className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {approvedStudents.map((approval) => (
                <StudentApprovalCard
                  key={approval.id}
                  student={approval.student}
                  project={approval.project}
                  skills={approval.skills}
                  appliedDate={approval.appliedDate}
                  onApprove={() => {}}
                  onReject={() => {}}
                  onScheduleInterview={() => {}}
                  onViewProfile={() => {}}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="rejected" className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {rejectedStudents.map((approval) => (
                <StudentApprovalCard
                  key={approval.id}
                  student={approval.student}
                  project={approval.project}
                  skills={approval.skills}
                  appliedDate={approval.appliedDate}
                  onApprove={() => {}}
                  onReject={() => {}}
                  onScheduleInterview={() => {}}
                  onViewProfile={() => {}}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </ProfessorLayout>
  )
}

