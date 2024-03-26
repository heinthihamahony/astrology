import Image from "next/image";
import * as React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import imageTarot from "@/app/assess/img/Tarot.png";

export function ScrollAreaDemo2() {
  return (
    <ScrollArea className="h-72 lg:w-96 rounded-md border">
      <div className="p-4 mx-3">
        <Image
          className="w-18"
          src={imageTarot}
          alt=""
          width={60}
          height={60}
        />{" "}
        <h4 className="mb-4 text-5xl text-[#ffcc02] font-semibold text-center ">
          TAROT
        </h4>
        <Separator className="my-2" />
        <div className="">
          <a href="#" className=" ">
            <p className="btn2 pb-2 border-b">2024 Tarot Readings</p>
          </a>
          <a href="#" className="">
            <p className="btn2 py-2 border-b">One Card Tarot Reading</p>
          </a>
          <a href="#" className="">
            <p className="btn2 py-2 border-b">Three Card Tarot Reading</p>
          </a>
          <a href="#" className=" ">
            <p className="btn2 py-2 border-b">State Of Mind Reading</p>
          </a>
          <a href="#" className="">
            <p className="btn2 py-2 border-b">Wellness Tarot Reading</p>
          </a>
          <a href="#" className="">
            <p className="btn2 py-2 border-b">My Style</p>
          </a>
          <a href="#" className="">
            <p className="btn2 py-2 border-b">Major Arcana</p>
          </a>
          <a href="#" className="">
            <p className="btn2 py-2 border-b">Minor Arcana</p>
          </a>
        </div>
      </div>
    </ScrollArea>
  );
}
