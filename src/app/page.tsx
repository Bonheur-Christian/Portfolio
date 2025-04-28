import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[90%] mx-auto">
      <NavBar />
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-medium w-[55%]">
            I'm MUHUMURE Bonheur Christian, Software developer and Automation
            Engineer{" "}
          </h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>

          <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg px-4 py-2 cursor-pointer">
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}
