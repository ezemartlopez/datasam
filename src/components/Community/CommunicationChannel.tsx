"use client"
import { LinkPage } from "@/lib/communityPage-data";
import Image from "next/image";
import Text from "../Text";
import classNames from "classnames";
import Link from "next/link";

export default function CommunicationChannel({ linkPage }: { linkPage: LinkPage }) {
  return (
    <li className="w-full rounded-xl border border-gray-300 p-6">
      <div className="w-full h-full flex flex-col gap-3">
        <div className="w-full flex justify-center items-center gap-2">
          <Image src={linkPage.logo} width={36} height={36} alt={`logo_${linkPage.title.toLowerCase()}`} />
          <h2 className={classNames("font-rubik text-3xl font-medium", {
            "text-[#5562ea]": linkPage.type === "discord",
            "text-green-500": linkPage.type === "whatsapp",
            "text-[#eb4a66]": linkPage.type === "instagram",
            "text-black": linkPage.type === "notion" || linkPage.type === "github"
            
          })}>{linkPage.title}</h2>
        </div>
        <div className="w-full flex-1">
          <Text text={linkPage.description} />
        </div>
        <Link href={linkPage.href}>
          <button type="button" className={classNames("w-min h-[40px] transition-colors duration-500 rounded-lg px-[20px] flex justify-center items-center text-nowrap text-white font-rubik", {
            "bg-green-500 hover:bg-green-600": linkPage.type === "whatsapp",
            "bg-[#5562ea] hover:bg-[#3e4bdf]": linkPage.type === "discord",
            "bg-[#eb4a66] hover:bg-[#db334f]": linkPage.type === "instagram",
            "bg-black hover:bg-gray-600": linkPage.type === "notion" || linkPage.type === "github"
          })}>{linkPage.buttonText}</button>
        </Link>
      </div>
    </li>
  );
}
