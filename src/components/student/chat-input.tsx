// components/ChatInput.tsx
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface ChatInputProps {
    onSend: (message: string) => void
}

export function ChatInput({ onSend }: ChatInputProps) {
    const [message, setMessage] = useState("")

    const handleSend = () => {
        if (message.trim()) {
            onSend(message)
            setMessage("")
        }
    }

    return (
        <div className="flex gap-2">
            <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <Button onClick={handleSend}>Post</Button>
        </div>
    )
}