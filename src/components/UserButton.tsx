"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import UserAvatar from "./UserAvatar"
import { Session } from "next-auth"
import { Button } from "./ui/button"
import {signIn, signOut} from "next-auth/react"


const UserButton = ({session}: {session: Session | null}) => {
  

if(!session) return(
    <Button variant={"outline"} onClick={() => signIn()}> 
     Sign In
    </Button>
)

return session && (
<DropdownMenu>
  <DropdownMenuTrigger>
    <UserAvatar 
    name={session.user?.name} 
    image={session.user?.image}/>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem onClick={() => window.location.href = 'https://github.com/Stroller15/chat-translation-saas'} className="text-emerald-400">Github</DropdownMenuItem>
    <DropdownMenuItem onClick={() => signOut()}>Sign Out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
  )
}

export default UserButton