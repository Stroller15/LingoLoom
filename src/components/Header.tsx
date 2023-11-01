import { getServerSession } from "next-auth";
import DarkModeToggle from "./DarkModeToggle";
import Logo from "./Logo"
import UserButton from "./UserButton";
import { authOptions } from "../../auth";
import Link from "next/link";
import { MessagesSquareIcon } from "lucide-react";
import CreateChatButton from "./CreateChatButton";


async function Header() {
  const session = await getServerSession(authOptions)
  console.log(session)
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 ">
        <nav className="flex flex-col sm:flex-row items-center p-5 pl-2 bg-white  dark:bg-gray-900 max-w-7xl mx-auto">
        {/* logo */}
          <Logo/>

          <div className="flex-1 flex items-center justify-end space-x-4">
            {/* language select */}
            

            {/* when user in session then do something */}
            {session ? (
              <>
                <Link href={'/chat'} prefetch={false}>
                 <MessagesSquareIcon
                 className="text-black dark:text-white"
                 />
                </Link>
                <CreateChatButton/>
            
              </>
            ): (
              <Link href='/pricing'>Pricing</Link>
              
            )}

            {/* Dark mode toggle */}
            <DarkModeToggle/>

            {/* User button */}
            <UserButton session={session}/>

          

          </div>
        </nav>

        {/* upgrade banner */}

    </header>
  )
}


export default Header;




