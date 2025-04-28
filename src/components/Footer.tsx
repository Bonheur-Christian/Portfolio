import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaInstagram } from "react-icons/fa6";

export default function Footer() {
    return(
        <div className="w-[80%] mx-auto py-12 space-y-6">
        <div className="flex justify-center gap-6 items-center">
          <Link href="">
            <FaGithub size={30} className="text-gray-600 font-medium" />
          </Link>
          <Link href="">
            <BiLogoGmail size={30} className="text-gray-600 font-medium"/>
          </Link>
          <Link href="">
            <FaInstagram size={30} className="text-gray-600 font-medium"/>
          </Link>
          <Link href="">
            <BsTwitterX size={30} className="text-gray-600 font-medium"/>
          </Link>
        </div>
        <p className="text-center text-gray-800">Copyright &copy;2025 All rights reserved</p>
      </div>
    )
}