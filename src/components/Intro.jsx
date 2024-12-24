import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

function Intro() {
  return (
    <div className="flex justify-between items-center border-b-2 py-16 border-gray-500">
      <div className="space-y-10">
        <img
          src="./images/Bonheur.jpg"
          alt="This is my Profile"
          className="rounded-xl"
          width={200}
          height={200}
        />
        <p className="font-lato font-semibold text-xl text-gray-700">
          MUHUMURE Bonheur Christian
        </p>
        <div className="flex items-center space-x-6">
          <FaInstagram size={30} title="m_bonheur_christian" className="cursor-pointer"/>
          <FaXTwitter size={30} title="Bonheur-Christian" className="cursor-pointer"/>
          <FaLinkedin size={30} title="Bonheur-Christian" className="cursor-pointer"/> 
          <FaGithub size={30} title="Bonheur Christian" className="cursor-pointer"/>
        </div>
      </div>

      <div className="w-[50%] space-y-12">
        <h1 className="text-2xl font-semibold font-lato text-center text-gray-700">
          Software and Embedded Engineer
        </h1>
        <p className="text-xl text-center">
          Software developer grew up in Rwanda. I enjoy bringing ideas and
          designs into life.Apart from that I possess unique advantage of
          interacting with embedded systems and electronics to build stunning
          functioning systems.{" "}
        </p>
        <div className="flex items-center gap-4" title="Bonheur Christian">
          <FaWhatsapp size={30}/>
          <p className="text-xl text-gray-700 font-lato font-semibold">0726711232</p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
