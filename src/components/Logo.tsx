import Link from "next/link"
import logo from "@logos/logo.png";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";


const Logo = () => {
  return (
    <Link href='/' prefetch={false} className="overflow-hidden">
        <div className="flex items-center w-40 h-14">
          <AspectRatio 
          ratio={16/9}
          className="flex items-center justify-center"
          >
            <Image
            priority
            src={logo}
            alt="logo"
            className="ml-12"
            // className="rounded-full dark:filter dark:invert"
            />
          </AspectRatio>
        </div>
    </Link>
  )
}

export default Logo