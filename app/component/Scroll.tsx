import Image from "next/image";
import * as React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import imageLove from "@/app/assess/img/Love.png";

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 lg:w-96 rounded-md border ">
      <div className="p-4">
        <Image className="w-18" src={imageLove} alt="" width={60} height={60} />{" "}
        <h4 className="mb-4 text-5xl text-[#ffcc02] font-semibold text-center ">
          LOVE
        </h4>
        <Separator className="my-2" />
        <div className="">
          <a href="#" className=" ">
            <p className="btn2 pb-2 border-b">Love Compatibility</p>
          </a>
          <a href="#" className="">
            <p className="btn2 py-2 border-b">Love Sutra</p>
          </a>
          <a href="#" className="">
            <p className="btn2 py-2 border-b">Soulmate</p>
          </a>
          <a href="#" className=" ">
            <p className="btn2 py-2 border-b">Love Tarot</p>
          </a>
          <a href="#" className="">
            <p className="btn2 py-2 border-b">Love Horoscope</p>
          </a>
          <a href="#" className="">
            <p className="btn2 py-2 border-b">Love Profile</p>
          </a>
        </div>
      </div>
    </ScrollArea>
  );
}
