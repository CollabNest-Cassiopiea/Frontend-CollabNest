import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import axios from "axios";

interface EditProfileFormProps {
    profileData: {
        rollno: any;
        user_id: number; // Change from rollno to user_id
        skills: string[];
        experience: string;
    };
    onSave: (updatedData: { skills: string[]; experience: string }) => void;
    onCancel: () => void;
}

export function EditProfileForm({ profileData, onSave, onCancel }: EditProfileFormProps) {
    const [skills, setSkills] = useState(profileData.skills.join(", "));
    const [experience, setExperience] = useState(profileData.experience);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const updatedSkills = skills.split(",").map(skill => skill.trim());
            const updatedData = { skills: updatedSkills, experience };

            console.log("Sending data to backend:", updatedData); // Debugging

            // Use POST instead of PUT
            // edit-profile-form.tsx
            const response = await axios.post(
                `/api/student-profiles/${profileData.user_id}/profile`, // Use hyphens
                updatedData
            );
            console.log("Response from backend:", response.data); // Debugging

            onSave(response.data);
        } catch (error) {
            console.error("Failed to update profile:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <Label>Skills (comma separated)</Label>
                <Input value={skills} onChange={(e) => setSkills(e.target.value)} />
            </div>
            <div>
                <Label>Experience</Label>
                <Textarea value={experience} onChange={(e) => setExperience(e.target.value)} />
            </div>
            <div className="flex gap-2">
                <Button type="submit">Save</Button>
                <Button variant="outline" onClick={onCancel}>Cancel</Button>
            </div>
        </form>
    );
}