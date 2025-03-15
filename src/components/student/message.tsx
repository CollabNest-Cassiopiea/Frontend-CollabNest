// components/Message.tsx
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface MessageProps {
    user: { name: string }
    text: string
    date: string
}

export function Message({ user, text, date }: MessageProps) {
    return (
        <div className="flex gap-3">
            <Avatar className="h-8 w-8">
                <AvatarFallback>{user.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
                <div className="flex items-center gap-2">
                    <p className="font-medium">{user.name}</p>
                    <span className="text-sm text-muted-foreground">{date}</span>
                </div>
                <p className="text-muted-foreground mt-1">{text}</p>
            </div>
        </div>
    )
}