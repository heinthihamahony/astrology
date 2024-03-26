import Image from "next/image";
import * as React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import imageNUMEROLOGY from "@/app/assess/img/NUMEROLOGY.png";

export function ScrollAreaDemo3() {
  return (
    <ScrollArea className="h-72 lg:w-96 rounded-md border flex">
      <div className="p-4 mx-3">
        <Image
          className="w-18"
          src={imageNUMEROLOGY}
          alt=""
          width={60}
          height={60}
        />{" "}
        <h4 className="mb-4 lg:text-5xl md:text-4xl text-[#ffcc02] font-semibold text-center ">
          NUMEROLOGY
        </h4>
        <Separator className="my-2" />
        <div className="">
          <a href="#" className=" ">
            <p className="btn2 pb-2 border-b">2024 Numerology Predictions</p>
          </a>
          <a href="#" className="">
            <p className="btn2 py-2 border-b">Your Birthday Prediction</p>
          </a>
          <a href="#" className="">
            <p className="btn2 py-2 border-b">Daily Numerology Horoscope</p>
          </a>
          <a href="#" className=" ">
            <p className="btn2 py-2 border-b">Weekly Numerology Horoscope</p>
          </a>
          <a href="#" className="">
            <p className="btn2 py-2 border-b">Life Path Number</p>
          </a>
          <a href="#" className="">
            <p className="btn2 py-2 border-b">Master Number</p>
          </a>
          <a href="#" className="">
            <p className="btn2 py-2 border-b">Numerology Number</p>
          </a>
          <a href="#" className="">
            <p className="btn2 py-2 border-b">Your Ruling Number</p>
          </a>
          <a href="#" className="">
            <p className="btn2 py-2 border-b">
              Numerology Personality Analysis
            </p>
          </a>
          <a href="#" className="">
            <p className="btn2 py-2 border-b">Your Specific Traits</p>
          </a>
        </div>
      </div>
    </ScrollArea>
  );
}
