'use client'

import { MessageSquarePlus } from "lucide-react"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

const CreateChatButton = () => {
    const router = useRouter();

    const createNewChat = async () => {
      //all create new chat logic goes here
      router.push(`/chat/xyz`)
    }
  return (
    <Button onClick={createNewChat} variant={"ghost"}>
        <MessageSquarePlus/>
    </Button>
  )
}

export default CreateChatButton