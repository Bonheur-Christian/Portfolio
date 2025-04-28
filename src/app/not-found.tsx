import NavBar from "@/components/NavBar";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <NavBar />
      <div className="max-h-screen flex flex-col justify-center pt-[20rem] text-center space-y-6">
        <h1 className="text-5xl font-bold">⚠️ 404 - Page Not Found</h1>
        <p className="text-2xl">
          We Can't Find Page You Are Looking For Go Back{" "}
          <Link href="/" className="text-indigo-500 hover:underline duration-300">
            Home
          </Link>
        </p>
      </div>
    </>
  );
}
