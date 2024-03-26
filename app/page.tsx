"use client";

import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { NavigationMenuDemo } from "./component/NavigationMenu";
import { NavigationMenuDemo2 } from "./component/2NavigationMenu";
import { Input } from "@/components/ui/input";
import React from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

import imageone from "@/app/assess/img/arise.png";
import imagetwo from "@/app/assess/img/taurus.png";
import imagethree from "@/app/assess/img/gemini.png";
import imagefour from "@/app/assess/img/cancer.png";
import imagefive from "@/app/assess/img/leo.png";
import imagesix from "@/app/assess/img/virgo.png";
import imageseven from "@/app/assess/img/libra.png";
import imageeight from "@/app/assess/img/scorpio.png";
import imagenine from "@/app/assess/img/Sagittarius.png";
import imageten from "@/app/assess/img/capricorn.png";
import imageeleven from "@/app/assess/img/aquarius.png";
import imagetwelve from "@/app/assess/img/pisces.png";
import { ScrollAreaDemo } from "./component/Scroll";
import { ScrollAreaDemo2 } from "./component/Scroll2";
import { ScrollAreaDemo3 } from "./component/Scroll3";
import { DropdownMenuCheckboxes } from "./component/dropdown";

export default function Home() {
  return (
    <div className="">
      <div className=" ld:mx-40 md:mx-12 md:border-b mx-3">
        <div className=" flex items-center justify-between mb-2">
          {/* Nav */}

          <div className="">
            <img
              className=" w-24"
              src="https://images.astroyogi.com/astroyogi2017/common/logo24.webp"
              alt=""
            />
          </div>
          <div className=" flex gap-4 items-center">
            <div className=" md:flex items-center hidden gap-2 md:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#b5b5b5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-phone-call"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                <path d="M14.05 2a9 9 0 0 1 8 7.94" />
                <path d="M14.05 6A5 5 0 0 1 18 10" />
              </svg>
              <div className=" text-[#999]">
                <p className=" text-sm">Customer Care</p>
                <p className=" text-lg font-semibold">09123456789</p>
              </div>
            </div>
            <div className=" md:hidden lg:flex hidden">
              <button className=" border border-[#ffcc02] py-3 px-5 rounded-full">
                Consult Now
              </button>
            </div>
            <div>
              <a href="#" className=" flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#b5b5b5"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-log-in"
                >
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                  <polyline points="10 17 15 12 10 7" />
                  <line x1="15" x2="3" y1="12" y2="12" />
                </svg>
                <p className=" text-[#999] font-semibold">SIGN IN</p>
              </a>
            </div>
            <div className=" hidden md:flex">
              <button className="border py-2 px-1 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffcc02"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-bell-ring"
                >
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                  <path d="M4 2C2.8 3.7 2 5.7 2 8" />
                  <path d="M22 8c0-2.3-.8-4.3-2-6" />
                </svg>
              </button>
            </div>
            <div className=" flex">
              <NavigationMenuDemo />
              <div className=" lg:hidden hidden md:flex">
                <DropdownMenuCheckboxes />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-y py-4 flex justify-between items-center mx-3 md:hidden">
        <a href="#" className=" border border-[#ffcc02] py-2 px-2 rounded-lg">
          Consult Now
        </a>
        <div className=" flex gap-3">
          <div className="">
            <div className="">
              <button className="border py-2 px-1 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffcc02"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-bell-ring"
                >
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                  <path d="M4 2C2.8 3.7 2 5.7 2 8" />
                  <path d="M22 8c0-2.3-.8-4.3-2-6" />
                </svg>
              </button>
            </div>
          </div>
          <div className=" lg:hidden">
            <DropdownMenuCheckboxes />
          </div>
        </div>
      </div>
      <div className=" border-y md:hidden lg:flex hidden">
        <div className=" px-40 flex text-sm items-center">
          <a href="#" className="btn px-5 py-2 rounded-sm">
            Home
          </a>
          <a href="#" className="">
            <NavigationMenuDemo2 />
          </a>
          <a href="#" className="btn px-5 py-2 rounded-sm">
            Consult Astrologers
          </a>
          <a href="#" className="btn px-5 py-2 rounded-sm">
            Horoscope
          </a>
          <a href="#" className="btn px-5 py-2 rounded-sm">
            Horoscope 2024
          </a>
          <a href="#" className="btn px-5 py-2 rounded-sm">
            Candalar
          </a>
          <a href="#" className="btn px-5 py-2 rounded-sm">
            Kundli
          </a>
          <a href="#" className="btn px-5 py-2 rounded-sm">
            Numerology
          </a>
          <a href="#" className="btn px-5 py-2 rounded-sm">
            Tarot
          </a>
          <a href="#" className="btn px-5 py-2 rounded-sm">
            Love
          </a>
          <a href="#" className="btn px-5 py-2 rounded-sm">
            Blog
          </a>
        </div>
      </div>
      <div className="lg:mx-40 md:mx-12 mx-3">
        <div className="">
          <img
            className=" w-full mt-6 lg:flex md:flex hidden"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS07yLpPahd1cbIrksklfURwYSH8UZVUs5hrA&usqp=CAU"
            alt=""
          />
          <img
            className=" w-full mt-6 lg:hidden md:hidden rounded-t-lg"
            src="	https://images.astroyogi.com/astroyogi2017/english/images/banner/mobile%20(2).jpg"
            alt=""
          />
        </div>
        <div className=" lg:flex md:flex justify-between items-center shadow-2xl rounded-lg py-4 lg:px-10">
          <div className="">
            <p className="text-[#7e7e7e] lg:text-xl md:text-xl text-2xl text-center ">
              <span className=" font-bold">Sign Up</span> for <span>Free</span>{" "}
              & <br /> consult with award winning astrologers
            </p>
          </div>
          <div className="bg-[#e2e2e2] lg:px-14 lg:py-8 md:px-8 md:py-4 px-10 py-3 mx-10 my-5 lg:rounded-tr-3xl lg:rounded-bl-3xl md:rounded-tr-3xl md:rounded-bl-3xl flex">
            <Select>
              <SelectTrigger className="w-[80px]">
                <SelectValue placeholder="+66" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">+66</SelectItem>
                <SelectItem value="dark">+95</SelectItem>
                <SelectItem value="system">+1</SelectItem>
              </SelectContent>
            </Select>

            <Input className="lg:w-40 input" />
          </div>
          <div className=" md:pr-10 lg:pr-0 text-center">
            <button className=" bg-[#ffcc02] lg:py-3 lg:px-20 md:px-10 md:py-3 px-16 py-3 border border-yellow-500 lg:text-sm md:text-sm font-semibold rounded-md">
              Sign Up
            </button>
            <p className=" text-[#ffcc02] text-sm mt-2">
              Already Registered?{" "}
              <span>
                {" "}
                <a href="#" className=" text-black underline">
                  Login
                </a>
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className=" ">
        <p className=" text-4xl text-center mt-14 font-semibold text-[#545454]">
          FREE DAILY <span className="text-[#665300]">HOROSCOPES</span>
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-12 lg:mx-40 grid grid-cols-3 text-center mt-5 md:mx-12 md:grid md:grid-cols-6 space-y-4">
        <a href="#" className=" mx-auto mt-4 ">
          <Image
            className="w-18"
            src={imageone}
            alt=""
            width={60}
            height={60}
          />{" "}
          <p className=" text-sm text-[#b31112]">Aries </p>
          <p className=" text-xs">21/3-19/4</p>
        </a>
        <a href="#" className="mx-auto">
          <Image
            className="w-[66px]"
            src={imagetwo}
            alt=""
            width={60}
            height={60}
          />
          <p className=" text-sm text-[#8a38a6]">Taurus</p>
          <p className=" text-xs">20/4-20/5</p>
        </a>
        <a href="#" className="mx-auto">
          <Image
            className="w-[65px]"
            src={imagethree}
            alt=""
            width={60}
            height={60}
          />
          <p className=" text-sm text-[#b5752d]">Gemini </p>
          <p className=" text-xs">21/5-20/6</p>
        </a>
        <a href="#" className="mx-auto">
          <Image
            className="w-[67px]"
            src={imagefour}
            alt=""
            width={60}
            height={60}
          />
          <p className=" text-sm text-[#4a3173]">Cancer </p>
          <p className=" text-xs">21/6-22/7</p>
        </a>
        <a href="#" className="mx-auto">
          <Image
            className="w-[65px]"
            src={imagefive}
            alt=""
            width={60}
            height={60}
          />
          <p className=" text-sm text-[#b75321]">Leo </p>
          <p className=" text-xs">23/7-22/8</p>
        </a>
        <a href="#" className="mx-auto">
          <Image
            className="w-[66px]"
            src={imagesix}
            alt=""
            width={60}
            height={60}
          />
          <p className=" text-sm pt-[3px] text-[#88475d]">Virgo </p>
          <p className=" text-xs">23/8-22/9 </p>
        </a>
        <a href="#" className="mx-auto">
          <Image
            className="w-[64px]"
            src={imageseven}
            alt=""
            width={60}
            height={60}
          />
          <p className=" text-sm text-[#ac378d]">Libra </p>
          <p className=" text-xs">23/9-22/10</p>
        </a>
        <a href="#" className="mx-auto">
          <Image
            className="w-[63px]"
            src={imageeight}
            alt=""
            width={60}
            height={60}
          />
          <p className=" text-sm text-[#c29246]">Scorpio</p>
          <p className=" text-xs">23/10-21/11</p>
        </a>
        <a href="#" className="mx-auto">
          <Image
            className="w-[67px]"
            src={imagenine}
            alt=""
            width={60}
            height={60}
          />
          <p className=" text-sm text-[#2f7a8d]">Sagittarius </p>
          <p className=" text-xs">22/11-21/12</p>
        </a>
        <a href="#" className="mx-auto">
          <Image
            className="w-[64px]"
            src={imageten}
            alt=""
            width={60}
            height={60}
          />
          <p className=" text-sm text-[#4b6dad]">Capricorn </p>
          <p className=" text-xs">22/12-19/1</p>
        </a>
        <a href="#" className="mx-auto">
          <Image
            className="w-18"
            src={imageeleven}
            alt=""
            width={60}
            height={60}
          />
          <p className=" text-sm text-[#9b6f4c]">Aquarius </p>
          <p className=" text-xs">20/1-18/2</p>
        </a>
        <a href="#" className="mx-auto">
          <Image
            className="w-[62px]"
            src={imagetwelve}
            alt=""
            width={60}
            height={60}
          />
          <p className=" text-sm text-[#465a7b]">Pisces </p>
          <p className=" text-xs">19/2-20/3</p>
        </a>
      </div>
      <div className="">
        <div className="">
          <p className=" text-5xl text-center mt-12 font-semibold text-[#545454]">
            ONLINE <span className="text-[#665300]">ASTROLOGERS</span>
          </p>
        </div>
        <div className=" lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 lg:mx-32 md:mx-20 mx-8 gap-2 mt-6 space-y-2 ">
          <div className=" border md:mt-2">
            <div className=" flex lg:gap-4 gap-12 justify-center items-center bg-[#ffcc02] py-2">
              <img
                className=" w-16 rounded-full"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAACUCAMAAABRNbASAAAAM1BMVEXl5uivtLjo6evFycyssbWvsrW1uLvCxsnc3uC7vsGxtbfV2NvLztDZ2tyqrrHQ0tXu7/Fq3jeNAAACgUlEQVR4nO2a626DMAxGiXHukPb9n3YBWrVbIaEbqZn0nT+dpko7suPEcdZ1AAAAAAAAAAAAAAAAAAAAAIB/BS1Ia6xA5C69tXYYu5P5UeesTpqZldbJXNyJ9Mj5rBWCyoT8wWqQVnpg9aJ1l1OKw3iK4E1hU6/wcAI7GsOam1L6BHYu6FU3pZK83WpOb5mNsnZkt92ynRN1G7dyumAl5TpfdJNNbCwldZLzcnJUqIaFJLjqUsVNqV4qdHTRoawWghdyy/tIqMoZsbz6euR0FHJzprrk8vl/ZrleSq7upljqkBj/vZxYWncVhNQuXJcL6SIlt2efG4XcqK/LyZ0Qrn7wW7GeiapuLLbkcltS6+dYsBOunREs1s5laCiELkiWw0xhqwtBcMXNFBIbtFypLuRWfUtOi7XoD7tha7MLsgvuZrdaFGykxWYople9JDuJeECdVfxtsslGuE6foWgT3+6J88S6O4/bTLTeTPjenWzW3xFdr9f5h+v1RG6zShx6vwQuh84O8f57YTM39rkcEj8VLE+PJb6PounNfzt6o3n98Gdt/CAVv2zWp0orzMmLFC5Fz7o+ZdLKfP5yGM207ZbVpi9MOzJ/NHrkbHmK/gPtP/eMSIOu3Qlfsvuxo9amEGqr7YdcSB8JHrmNh7ga3P7uv/lIWJdTrTsVcvqtUngm6MZ2Tr1XCt/tGr827ZjIFWl4rag/J1WD12w7LlwD96KbzSec+f16u0dON1p2+WA4QM40Cl06QC6kJv9wUpwovUGb9+HKk/lemozF3J9zutBiLlYfse6Va/CmQ/1Bck0WneeDUMe7dUN/EC2aYjqMBnIAAAAAAAAAAAAAAABwFr4AzxAYfhglFgEAAAAASUVORK5CYII="
                alt=""
              />
              <div className="">
                <p className=" font-bold text-lg">Mr.Jone</p>
                <p className=" flex items-center gap-3">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#545454"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-languages"
                  >
                    <path d="m5 8 6 6" />
                    <path d="m4 14 6-6 2-3" />
                    <path d="M2 5h12" />
                    <path d="M7 2h1" />
                    <path d="m22 22-5-10-5 10" />
                    <path d="M14 18h6" />
                  </svg>
                  Myanmar, English
                </p>
                <p className=" flex items-center gap-3">
                  {" "}
                  <svg
                    className=" w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(84,84,84,1)"
                  >
                    <path d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14Z"></path>
                  </svg>
                  Tarot, Meditation
                </p>
              </div>
            </div>
            <div className=" flex justify-between mx-8 my-3">
              <div className="">
                <p className=" flex items-center gap-2">
                  <svg
                    className=" w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(84,84,84,1)"
                  >
                    <path d="M12 2 0 9 12 16 22 10.1667V17.5H24V9L12 2ZM3.99902 13.4905V18.0001C5.82344 20.429 8.72812 22.0001 11.9998 22.0001 15.2714 22.0001 18.1761 20.429 20.0005 18.0001L20.0001 13.4913 12.0003 18.1579 3.99902 13.4905Z"></path>
                  </svg>
                  8 years
                </p>
                <p className=" flex items-center gap-2 my-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#545454"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-badge-dollar-sign w-6"
                  >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                    <path d="M12 18V6" />
                  </svg>
                  100$
                </p>
                <p className=" flex items-center gap-2">
                  <svg
                    className=" w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(84,84,84,1)"
                  >
                    <path d="M2 8.99997H5V21H2C1.44772 21 1 20.5523 1 20V9.99997C1 9.44769 1.44772 8.99997 2 8.99997ZM7.29289 7.70708L13.6934 1.30661C13.8693 1.13066 14.1479 1.11087 14.3469 1.26016L15.1995 1.8996C15.6842 2.26312 15.9026 2.88253 15.7531 3.46966L14.5998 7.99997H21C22.1046 7.99997 23 8.8954 23 9.99997V12.1043C23 12.3656 22.9488 12.6243 22.8494 12.8658L19.755 20.3807C19.6007 20.7554 19.2355 21 18.8303 21H8C7.44772 21 7 20.5523 7 20V8.41419C7 8.14897 7.10536 7.89462 7.29289 7.70708Z"></path>
                  </svg>
                  2334
                </p>
              </div>
              <div className=" flex items-center gap-4">
                <a href="#" className=" text-center">
                  <svg
                    className=" w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(255,204,2,1)"
                  >
                    <path d="M8 18H18.2372L20 19.3851V9H21C21.5523 9 22 9.44772 22 10V23.5L17.5455 20H9C8.44772 20 8 19.5523 8 19V18ZM5.45455 16L1 19.5V4C1 3.44772 1.44772 3 2 3H17C17.5523 3 18 3.44772 18 4V16H5.45455Z"></path>
                  </svg>
                  Chat
                </a>
                <a href="#" className="text-center">
                  <svg
                    className=" w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(52,204,73,1)"
                  >
                    <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path>
                  </svg>
                  Call
                </a>
              </div>
            </div>
          </div>
          <div className=" border">
            <div className=" flex lg;gap-4 gap-12 justify-center items-center bg-[#ffcc02] py-2">
              <img
                className=" w-16 rounded-full"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAACUCAMAAABRNbASAAAAM1BMVEXl5uivtLjo6evFycyssbWvsrW1uLvCxsnc3uC7vsGxtbfV2NvLztDZ2tyqrrHQ0tXu7/Fq3jeNAAACgUlEQVR4nO2a626DMAxGiXHukPb9n3YBWrVbIaEbqZn0nT+dpko7suPEcdZ1AAAAAAAAAAAAAAAAAAAAAIB/BS1Ia6xA5C69tXYYu5P5UeesTpqZldbJXNyJ9Mj5rBWCyoT8wWqQVnpg9aJ1l1OKw3iK4E1hU6/wcAI7GsOam1L6BHYu6FU3pZK83WpOb5mNsnZkt92ynRN1G7dyumAl5TpfdJNNbCwldZLzcnJUqIaFJLjqUsVNqV4qdHTRoawWghdyy/tIqMoZsbz6euR0FHJzprrk8vl/ZrleSq7upljqkBj/vZxYWncVhNQuXJcL6SIlt2efG4XcqK/LyZ0Qrn7wW7GeiapuLLbkcltS6+dYsBOunREs1s5laCiELkiWw0xhqwtBcMXNFBIbtFypLuRWfUtOi7XoD7tha7MLsgvuZrdaFGykxWYople9JDuJeECdVfxtsslGuE6foWgT3+6J88S6O4/bTLTeTPjenWzW3xFdr9f5h+v1RG6zShx6vwQuh84O8f57YTM39rkcEj8VLE+PJb6PounNfzt6o3n98Gdt/CAVv2zWp0orzMmLFC5Fz7o+ZdLKfP5yGM207ZbVpi9MOzJ/NHrkbHmK/gPtP/eMSIOu3Qlfsvuxo9amEGqr7YdcSB8JHrmNh7ga3P7uv/lIWJdTrTsVcvqtUngm6MZ2Tr1XCt/tGr827ZjIFWl4rag/J1WD12w7LlwD96KbzSec+f16u0dON1p2+WA4QM40Cl06QC6kJv9wUpwovUGb9+HKk/lemozF3J9zutBiLlYfse6Va/CmQ/1Bck0WneeDUMe7dUN/EC2aYjqMBnIAAAAAAAAAAAAAAABwFr4AzxAYfhglFgEAAAAASUVORK5CYII="
                alt=""
              />
              <div className="">
                <p className=" font-bold text-lg">Mr.Jone</p>
                <p className=" flex items-center gap-3">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#545454"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-languages"
                  >
                    <path d="m5 8 6 6" />
                    <path d="m4 14 6-6 2-3" />
                    <path d="M2 5h12" />
                    <path d="M7 2h1" />
                    <path d="m22 22-5-10-5 10" />
                    <path d="M14 18h6" />
                  </svg>
                  Myanmar, English
                </p>
                <p className=" flex items-center gap-3">
                  {" "}
                  <svg
                    className=" w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(84,84,84,1)"
                  >
                    <path d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14Z"></path>
                  </svg>
                  Tarot, Meditation
                </p>
              </div>
            </div>
            <div className=" flex justify-between mx-8 my-3">
              <div className="">
                <p className=" flex items-center gap-2">
                  <svg
                    className=" w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(84,84,84,1)"
                  >
                    <path d="M12 2 0 9 12 16 22 10.1667V17.5H24V9L12 2ZM3.99902 13.4905V18.0001C5.82344 20.429 8.72812 22.0001 11.9998 22.0001 15.2714 22.0001 18.1761 20.429 20.0005 18.0001L20.0001 13.4913 12.0003 18.1579 3.99902 13.4905Z"></path>
                  </svg>
                  8 years
                </p>
                <p className=" flex items-center gap-2 my-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#545454"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-badge-dollar-sign w-6"
                  >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                    <path d="M12 18V6" />
                  </svg>
                  100$
                </p>
                <p className=" flex items-center gap-2">
                  <svg
                    className=" w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(84,84,84,1)"
                  >
                    <path d="M2 8.99997H5V21H2C1.44772 21 1 20.5523 1 20V9.99997C1 9.44769 1.44772 8.99997 2 8.99997ZM7.29289 7.70708L13.6934 1.30661C13.8693 1.13066 14.1479 1.11087 14.3469 1.26016L15.1995 1.8996C15.6842 2.26312 15.9026 2.88253 15.7531 3.46966L14.5998 7.99997H21C22.1046 7.99997 23 8.8954 23 9.99997V12.1043C23 12.3656 22.9488 12.6243 22.8494 12.8658L19.755 20.3807C19.6007 20.7554 19.2355 21 18.8303 21H8C7.44772 21 7 20.5523 7 20V8.41419C7 8.14897 7.10536 7.89462 7.29289 7.70708Z"></path>
                  </svg>
                  2334
                </p>
              </div>
              <div className=" flex items-center gap-4">
                <a href="#" className=" text-center">
                  <svg
                    className=" w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(255,204,2,1)"
                  >
                    <path d="M8 18H18.2372L20 19.3851V9H21C21.5523 9 22 9.44772 22 10V23.5L17.5455 20H9C8.44772 20 8 19.5523 8 19V18ZM5.45455 16L1 19.5V4C1 3.44772 1.44772 3 2 3H17C17.5523 3 18 3.44772 18 4V16H5.45455Z"></path>
                  </svg>
                  Chat
                </a>
                <a href="#" className="text-center">
                  <svg
                    className=" w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(52,204,73,1)"
                  >
                    <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path>
                  </svg>
                  Call
                </a>
              </div>
            </div>
          </div>
          <div className=" border">
            <div className=" flex lg:gap-4 gap-12 justify-center items-center bg-[#ffcc02] py-2">
              <img
                className=" w-16 rounded-full"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAACUCAMAAABRNbASAAAAM1BMVEXl5uivtLjo6evFycyssbWvsrW1uLvCxsnc3uC7vsGxtbfV2NvLztDZ2tyqrrHQ0tXu7/Fq3jeNAAACgUlEQVR4nO2a626DMAxGiXHukPb9n3YBWrVbIaEbqZn0nT+dpko7suPEcdZ1AAAAAAAAAAAAAAAAAAAAAIB/BS1Ia6xA5C69tXYYu5P5UeesTpqZldbJXNyJ9Mj5rBWCyoT8wWqQVnpg9aJ1l1OKw3iK4E1hU6/wcAI7GsOam1L6BHYu6FU3pZK83WpOb5mNsnZkt92ynRN1G7dyumAl5TpfdJNNbCwldZLzcnJUqIaFJLjqUsVNqV4qdHTRoawWghdyy/tIqMoZsbz6euR0FHJzprrk8vl/ZrleSq7upljqkBj/vZxYWncVhNQuXJcL6SIlt2efG4XcqK/LyZ0Qrn7wW7GeiapuLLbkcltS6+dYsBOunREs1s5laCiELkiWw0xhqwtBcMXNFBIbtFypLuRWfUtOi7XoD7tha7MLsgvuZrdaFGykxWYople9JDuJeECdVfxtsslGuE6foWgT3+6J88S6O4/bTLTeTPjenWzW3xFdr9f5h+v1RG6zShx6vwQuh84O8f57YTM39rkcEj8VLE+PJb6PounNfzt6o3n98Gdt/CAVv2zWp0orzMmLFC5Fz7o+ZdLKfP5yGM207ZbVpi9MOzJ/NHrkbHmK/gPtP/eMSIOu3Qlfsvuxo9amEGqr7YdcSB8JHrmNh7ga3P7uv/lIWJdTrTsVcvqtUngm6MZ2Tr1XCt/tGr827ZjIFWl4rag/J1WD12w7LlwD96KbzSec+f16u0dON1p2+WA4QM40Cl06QC6kJv9wUpwovUGb9+HKk/lemozF3J9zutBiLlYfse6Va/CmQ/1Bck0WneeDUMe7dUN/EC2aYjqMBnIAAAAAAAAAAAAAAABwFr4AzxAYfhglFgEAAAAASUVORK5CYII="
                alt=""
              />
              <div className="">
                <p className=" font-bold text-lg">Mr.Jone</p>
                <p className=" flex items-center gap-3">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#545454"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-languages"
                  >
                    <path d="m5 8 6 6" />
                    <path d="m4 14 6-6 2-3" />
                    <path d="M2 5h12" />
                    <path d="M7 2h1" />
                    <path d="m22 22-5-10-5 10" />
                    <path d="M14 18h6" />
                  </svg>
                  Myanmar, English
                </p>
                <p className=" flex items-center gap-3">
                  {" "}
                  <svg
                    className=" w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(84,84,84,1)"
                  >
                    <path d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14Z"></path>
                  </svg>
                  Tarot, Meditation
                </p>
              </div>
            </div>
            <div className=" flex justify-between mx-8 my-3">
              <div className="">
                <p className=" flex items-center gap-2">
                  <svg
                    className=" w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(84,84,84,1)"
                  >
                    <path d="M12 2 0 9 12 16 22 10.1667V17.5H24V9L12 2ZM3.99902 13.4905V18.0001C5.82344 20.429 8.72812 22.0001 11.9998 22.0001 15.2714 22.0001 18.1761 20.429 20.0005 18.0001L20.0001 13.4913 12.0003 18.1579 3.99902 13.4905Z"></path>
                  </svg>
                  8 years
                </p>
                <p className=" flex items-center gap-2 my-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#545454"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-badge-dollar-sign w-6"
                  >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                    <path d="M12 18V6" />
                  </svg>
                  100$
                </p>
                <p className=" flex items-center gap-2">
                  <svg
                    className=" w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(84,84,84,1)"
                  >
                    <path d="M2 8.99997H5V21H2C1.44772 21 1 20.5523 1 20V9.99997C1 9.44769 1.44772 8.99997 2 8.99997ZM7.29289 7.70708L13.6934 1.30661C13.8693 1.13066 14.1479 1.11087 14.3469 1.26016L15.1995 1.8996C15.6842 2.26312 15.9026 2.88253 15.7531 3.46966L14.5998 7.99997H21C22.1046 7.99997 23 8.8954 23 9.99997V12.1043C23 12.3656 22.9488 12.6243 22.8494 12.8658L19.755 20.3807C19.6007 20.7554 19.2355 21 18.8303 21H8C7.44772 21 7 20.5523 7 20V8.41419C7 8.14897 7.10536 7.89462 7.29289 7.70708Z"></path>
                  </svg>
                  2334
                </p>
              </div>
              <div className=" flex items-center gap-4">
                <a href="#" className=" text-center">
                  <svg
                    className=" w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(255,204,2,1)"
                  >
                    <path d="M8 18H18.2372L20 19.3851V9H21C21.5523 9 22 9.44772 22 10V23.5L17.5455 20H9C8.44772 20 8 19.5523 8 19V18ZM5.45455 16L1 19.5V4C1 3.44772 1.44772 3 2 3H17C17.5523 3 18 3.44772 18 4V16H5.45455Z"></path>
                  </svg>
                  Chat
                </a>
                <a href="#" className="text-center">
                  <svg
                    className=" w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(52,204,73,1)"
                  >
                    <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path>
                  </svg>
                  Call
                </a>
              </div>
            </div>
          </div>
          <div className=" border">
            <div className=" flex lg:gap-4 gap-12 justify-center items-center bg-[#ffcc02] py-2">
              <img
                className=" w-16 rounded-full"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAACUCAMAAABRNbASAAAAM1BMVEXl5uivtLjo6evFycyssbWvsrW1uLvCxsnc3uC7vsGxtbfV2NvLztDZ2tyqrrHQ0tXu7/Fq3jeNAAACgUlEQVR4nO2a626DMAxGiXHukPb9n3YBWrVbIaEbqZn0nT+dpko7suPEcdZ1AAAAAAAAAAAAAAAAAAAAAIB/BS1Ia6xA5C69tXYYu5P5UeesTpqZldbJXNyJ9Mj5rBWCyoT8wWqQVnpg9aJ1l1OKw3iK4E1hU6/wcAI7GsOam1L6BHYu6FU3pZK83WpOb5mNsnZkt92ynRN1G7dyumAl5TpfdJNNbCwldZLzcnJUqIaFJLjqUsVNqV4qdHTRoawWghdyy/tIqMoZsbz6euR0FHJzprrk8vl/ZrleSq7upljqkBj/vZxYWncVhNQuXJcL6SIlt2efG4XcqK/LyZ0Qrn7wW7GeiapuLLbkcltS6+dYsBOunREs1s5laCiELkiWw0xhqwtBcMXNFBIbtFypLuRWfUtOi7XoD7tha7MLsgvuZrdaFGykxWYople9JDuJeECdVfxtsslGuE6foWgT3+6J88S6O4/bTLTeTPjenWzW3xFdr9f5h+v1RG6zShx6vwQuh84O8f57YTM39rkcEj8VLE+PJb6PounNfzt6o3n98Gdt/CAVv2zWp0orzMmLFC5Fz7o+ZdLKfP5yGM207ZbVpi9MOzJ/NHrkbHmK/gPtP/eMSIOu3Qlfsvuxo9amEGqr7YdcSB8JHrmNh7ga3P7uv/lIWJdTrTsVcvqtUngm6MZ2Tr1XCt/tGr827ZjIFWl4rag/J1WD12w7LlwD96KbzSec+f16u0dON1p2+WA4QM40Cl06QC6kJv9wUpwovUGb9+HKk/lemozF3J9zutBiLlYfse6Va/CmQ/1Bck0WneeDUMe7dUN/EC2aYjqMBnIAAAAAAAAAAAAAAABwFr4AzxAYfhglFgEAAAAASUVORK5CYII="
                alt=""
              />
              <div className="">
                <p className=" font-bold text-lg">Mr.Jone</p>
                <p className=" flex items-center gap-3">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#545454"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-languages"
                  >
                    <path d="m5 8 6 6" />
                    <path d="m4 14 6-6 2-3" />
                    <path d="M2 5h12" />
                    <path d="M7 2h1" />
                    <path d="m22 22-5-10-5 10" />
                    <path d="M14 18h6" />
                  </svg>
                  Myanmar, English
                </p>
                <p className=" flex items-center gap-3">
                  {" "}
                  <svg
                    className=" w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(84,84,84,1)"
                  >
                    <path d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14Z"></path>
                  </svg>
                  Tarot, Meditation
                </p>
              </div>
            </div>
            <div className=" flex justify-between mx-8 my-3">
              <div className="">
                <p className=" flex items-center gap-2">
                  <svg
                    className=" w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(84,84,84,1)"
                  >
                    <path d="M12 2 0 9 12 16 22 10.1667V17.5H24V9L12 2ZM3.99902 13.4905V18.0001C5.82344 20.429 8.72812 22.0001 11.9998 22.0001 15.2714 22.0001 18.1761 20.429 20.0005 18.0001L20.0001 13.4913 12.0003 18.1579 3.99902 13.4905Z"></path>
                  </svg>
                  8 years
                </p>
                <p className=" flex items-center gap-2 my-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#545454"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-badge-dollar-sign w-6"
                  >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                    <path d="M12 18V6" />
                  </svg>
                  100$
                </p>
                <p className=" flex items-center gap-2">
                  <svg
                    className=" w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(84,84,84,1)"
                  >
                    <path d="M2 8.99997H5V21H2C1.44772 21 1 20.5523 1 20V9.99997C1 9.44769 1.44772 8.99997 2 8.99997ZM7.29289 7.70708L13.6934 1.30661C13.8693 1.13066 14.1479 1.11087 14.3469 1.26016L15.1995 1.8996C15.6842 2.26312 15.9026 2.88253 15.7531 3.46966L14.5998 7.99997H21C22.1046 7.99997 23 8.8954 23 9.99997V12.1043C23 12.3656 22.9488 12.6243 22.8494 12.8658L19.755 20.3807C19.6007 20.7554 19.2355 21 18.8303 21H8C7.44772 21 7 20.5523 7 20V8.41419C7 8.14897 7.10536 7.89462 7.29289 7.70708Z"></path>
                  </svg>
                  2334
                </p>
              </div>
              <div className=" flex items-center gap-4">
                <a href="#" className=" text-center">
                  <svg
                    className=" w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(255,204,2,1)"
                  >
                    <path d="M8 18H18.2372L20 19.3851V9H21C21.5523 9 22 9.44772 22 10V23.5L17.5455 20H9C8.44772 20 8 19.5523 8 19V18ZM5.45455 16L1 19.5V4C1 3.44772 1.44772 3 2 3H17C17.5523 3 18 3.44772 18 4V16H5.45455Z"></path>
                  </svg>
                  Chat
                </a>
                <a href="#" className="text-center">
                  <svg
                    className=" w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(52,204,73,1)"
                  >
                    <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path>
                  </svg>
                  Call
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 lg:mx-32 md:mx-20 mx-8 gap-2 mt-2 space-y-2">
          <div className=" border md:mt-2">
            <div className=" flex lg:gap-4 gap-12 justify-center items-center bg-[#ffcc02] py-2">
              <img
                className=" w-16 rounded-full"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAACUCAMAAABRNbASAAAAM1BMVEXl5uivtLjo6evFycyssbWvsrW1uLvCxsnc3uC7vsGxtbfV2NvLztDZ2tyqrrHQ0tXu7/Fq3jeNAAACgUlEQVR4nO2a626DMAxGiXHukPb9n3YBWrVbIaEbqZn0nT+dpko7suPEcdZ1AAAAAAAAAAAAAAAAAAAAAIB/BS1Ia6xA5C69tXYYu5P5UeesTpqZldbJXNyJ9Mj5rBWCyoT8wWqQVnpg9aJ1l1OKw3iK4E1hU6/wcAI7GsOam1L6BHYu6FU3pZK83WpOb5mNsnZkt92ynRN1G7dyumAl5TpfdJNNbCwldZLzcnJUqIaFJLjqUsVNqV4qdHTRoawWghdyy/tIqMoZsbz6euR0FHJzprrk8vl/ZrleSq7upljqkBj/vZxYWncVhNQuXJcL6SIlt2efG4XcqK/LyZ0Qrn7wW7GeiapuLLbkcltS6+dYsBOunREs1s5laCiELkiWw0xhqwtBcMXNFBIbtFypLuRWfUtOi7XoD7tha7MLsgvuZrdaFGykxWYople9JDuJeECdVfxtsslGuE6foWgT3+6J88S6O4/bTLTeTPjenWzW3xFdr9f5h+v1RG6zShx6vwQuh84O8f57YTM39rkcEj8VLE+PJb6PounNfzt6o3n98Gdt/CAVv2zWp0orzMmLFC5Fz7o+ZdLKfP5yGM207ZbVpi9MOzJ/NHrkbHmK/gPtP/eMSIOu3Qlfsvuxo9amEGqr7YdcSB8JHrmNh7ga3P7uv/lIWJdTrTsVcvqtUngm6MZ2Tr1XCt/tGr827ZjIFWl4rag/J1WD12w7LlwD96KbzSec+f16u0dON1p2+WA4QM40Cl06QC6kJv9wUpwovUGb9+HKk/lemozF3J9zutBiLlYfse6Va/CmQ/1Bck0WneeDUMe7dUN/EC2aYjqMBnIAAAAAAAAAAAAAAABwFr4AzxAYfhglFgEAAAAASUVORK5CYII="
                alt=""
              />
              <div className="">
                <p className=" font-bold text-lg">Mr.Jone</p>
                <p className=" flex items-center gap-3">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#545454"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-languages"
                  >
                    <path d="m5 8 6 6" />
                    <path d="m4 14 6-6 2-3" />
                    <path d="M2 5h12" />
                    <path d="M7 2h1" />
                    <path d="m22 22-5-10-5 10" />
                    <path d="M14 18h6" />
                  </svg>
                  Myanmar, English
                </p>
                <p className=" flex items-center gap-3">
                  {" "}
                  <svg
                    className=" w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(84,84,84,1)"
                  >
                    <path d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14Z"></path>
                  </svg>
                  Tarot, Meditation
                </p>
              </div>
            </div>
            <div className=" flex justify-between mx-8 my-3">
              <div className="">
                <p className=" flex items-center gap-2">
                  <svg
                    className=" w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(84,84,84,1)"
                  >
                    <path d="M12 2 0 9 12 16 22 10.1667V17.5H24V9L12 2ZM3.99902 13.4905V18.0001C5.82344 20.429 8.72812 22.0001 11.9998 22.0001 15.2714 22.0001 18.1761 20.429 20.0005 18.0001L20.0001 13.4913 12.0003 18.1579 3.99902 13.4905Z"></path>
                  </svg>
                  8 years
                </p>
                <p className=" flex items-center gap-2 my-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#545454"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-badge-dollar-sign w-6"
                  >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                    <path d="M12 18V6" />
                  </svg>
                  100$
                </p>
                <p className=" flex items-center gap-2">
                  <svg
                    className=" w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(84,84,84,1)"
                  >
                    <path d="M2 8.99997H5V21H2C1.44772 21 1 20.5523 1 20V9.99997C1 9.44769 1.44772 8.99997 2 8.99997ZM7.29289 7.70708L13.6934 1.30661C13.8693 1.13066 14.1479 1.11087 14.3469 1.26016L15.1995 1.8996C15.6842 2.26312 15.9026 2.88253 15.7531 3.46966L14.5998 7.99997H21C22.1046 7.99997 23 8.8954 23 9.99997V12.1043C23 12.3656 22.9488 12.6243 22.8494 12.8658L19.755 20.3807C19.6007 20.7554 19.2355 21 18.8303 21H8C7.44772 21 7 20.5523 7 20V8.41419C7 8.14897 7.10536 7.89462 7.29289 7.70708Z"></path>
                  </svg>
                  2334
                </p>
              </div>
              <div className=" flex items-center gap-4">
                <a href="#" className=" text-center">
                  <svg
                    className=" w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(255,204,2,1)"
                  >
                    <path d="M8 18H18.2372L20 19.3851V9H21C21.5523 9 22 9.44772 22 10V23.5L17.5455 20H9C8.44772 20 8 19.5523 8 19V18ZM5.45455 16L1 19.5V4C1 3.44772 1.44772 3 2 3H17C17.5523 3 18 3.44772 18 4V16H5.45455Z"></path>
                  </svg>
                  Chat
                </a>
                <a href="#" className="text-center">
                  <svg
                    className=" w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(52,204,73,1)"
                  >
                    <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path>
                  </svg>
                  Call
                </a>
              </div>
            </div>
          </div>
          <div className=" border">
            <div className=" flex lg:gap-4 gap-12 justify-center items-center bg-[#ffcc02] py-2">
              <img
                className=" w-16 rounded-full"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAACUCAMAAABRNbASAAAAM1BMVEXl5uivtLjo6evFycyssbWvsrW1uLvCxsnc3uC7vsGxtbfV2NvLztDZ2tyqrrHQ0tXu7/Fq3jeNAAACgUlEQVR4nO2a626DMAxGiXHukPb9n3YBWrVbIaEbqZn0nT+dpko7suPEcdZ1AAAAAAAAAAAAAAAAAAAAAIB/BS1Ia6xA5C69tXYYu5P5UeesTpqZldbJXNyJ9Mj5rBWCyoT8wWqQVnpg9aJ1l1OKw3iK4E1hU6/wcAI7GsOam1L6BHYu6FU3pZK83WpOb5mNsnZkt92ynRN1G7dyumAl5TpfdJNNbCwldZLzcnJUqIaFJLjqUsVNqV4qdHTRoawWghdyy/tIqMoZsbz6euR0FHJzprrk8vl/ZrleSq7upljqkBj/vZxYWncVhNQuXJcL6SIlt2efG4XcqK/LyZ0Qrn7wW7GeiapuLLbkcltS6+dYsBOunREs1s5laCiELkiWw0xhqwtBcMXNFBIbtFypLuRWfUtOi7XoD7tha7MLsgvuZrdaFGykxWYople9JDuJeECdVfxtsslGuE6foWgT3+6J88S6O4/bTLTeTPjenWzW3xFdr9f5h+v1RG6zShx6vwQuh84O8f57YTM39rkcEj8VLE+PJb6PounNfzt6o3n98Gdt/CAVv2zWp0orzMmLFC5Fz7o+ZdLKfP5yGM207ZbVpi9MOzJ/NHrkbHmK/gPtP/eMSIOu3Qlfsvuxo9amEGqr7YdcSB8JHrmNh7ga3P7uv/lIWJdTrTsVcvqtUngm6MZ2Tr1XCt/tGr827ZjIFWl4rag/J1WD12w7LlwD96KbzSec+f16u0dON1p2+WA4QM40Cl06QC6kJv9wUpwovUGb9+HKk/lemozF3J9zutBiLlYfse6Va/CmQ/1Bck0WneeDUMe7dUN/EC2aYjqMBnIAAAAAAAAAAAAAAABwFr4AzxAYfhglFgEAAAAASUVORK5CYII="
                alt=""
              />
              <div className="">
                <p className=" font-bold text-lg">Mr.Jone</p>
                <p className=" flex items-center gap-3">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#545454"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-languages"
                  >
                    <path d="m5 8 6 6" />
                    <path d="m4 14 6-6 2-3" />
                    <path d="M2 5h12" />
                    <path d="M7 2h1" />
                    <path d="m22 22-5-10-5 10" />
                    <path d="M14 18h6" />
                  </svg>
                  Myanmar, English
                </p>
                <p className=" flex items-center gap-3">
                  {" "}
                  <svg
                    className=" w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(84,84,84,1)"
                  >
                    <path d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14Z"></path>
                  </svg>
                  Tarot, Meditation
                </p>
              </div>
            </div>
            <div className=" flex justify-between mx-8 my-3">
              <div className="">
                <p className=" flex items-center gap-2">
                  <svg
                    className=" w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(84,84,84,1)"
                  >
                    <path d="M12 2 0 9 12 16 22 10.1667V17.5H24V9L12 2ZM3.99902 13.4905V18.0001C5.82344 20.429 8.72812 22.0001 11.9998 22.0001 15.2714 22.0001 18.1761 20.429 20.0005 18.0001L20.0001 13.4913 12.0003 18.1579 3.99902 13.4905Z"></path>
                  </svg>
                  8 years
                </p>
                <p className=" flex items-center gap-2 my-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#545454"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-badge-dollar-sign w-6"
                  >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                    <path d="M12 18V6" />
                  </svg>
                  100$
                </p>
                <p className=" flex items-center gap-2">
                  <svg
                    className=" w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(84,84,84,1)"
                  >
                    <path d="M2 8.99997H5V21H2C1.44772 21 1 20.5523 1 20V9.99997C1 9.44769 1.44772 8.99997 2 8.99997ZM7.29289 7.70708L13.6934 1.30661C13.8693 1.13066 14.1479 1.11087 14.3469 1.26016L15.1995 1.8996C15.6842 2.26312 15.9026 2.88253 15.7531 3.46966L14.5998 7.99997H21C22.1046 7.99997 23 8.8954 23 9.99997V12.1043C23 12.3656 22.9488 12.6243 22.8494 12.8658L19.755 20.3807C19.6007 20.7554 19.2355 21 18.8303 21H8C7.44772 21 7 20.5523 7 20V8.41419C7 8.14897 7.10536 7.89462 7.29289 7.70708Z"></path>
                  </svg>
                  2334
                </p>
              </div>
              <div className=" flex items-center gap-4">
                <a href="#" className=" text-center">
                  <svg
                    className=" w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(255,204,2,1)"
                  >
                    <path d="M8 18H18.2372L20 19.3851V9H21C21.5523 9 22 9.44772 22 10V23.5L17.5455 20H9C8.44772 20 8 19.5523 8 19V18ZM5.45455 16L1 19.5V4C1 3.44772 1.44772 3 2 3H17C17.5523 3 18 3.44772 18 4V16H5.45455Z"></path>
                  </svg>
                  Chat
                </a>
                <a href="#" className="text-center">
                  <svg
                    className=" w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(52,204,73,1)"
                  >
                    <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path>
                  </svg>
                  Call
                </a>
              </div>
            </div>
          </div>
          <div className=" border">
            <div className=" flex lg:gap-4 gap-12 justify-center items-center bg-[#ffcc02] py-2">
              <img
                className=" w-16 rounded-full"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAACUCAMAAABRNbASAAAAM1BMVEXl5uivtLjo6evFycyssbWvsrW1uLvCxsnc3uC7vsGxtbfV2NvLztDZ2tyqrrHQ0tXu7/Fq3jeNAAACgUlEQVR4nO2a626DMAxGiXHukPb9n3YBWrVbIaEbqZn0nT+dpko7suPEcdZ1AAAAAAAAAAAAAAAAAAAAAIB/BS1Ia6xA5C69tXYYu5P5UeesTpqZldbJXNyJ9Mj5rBWCyoT8wWqQVnpg9aJ1l1OKw3iK4E1hU6/wcAI7GsOam1L6BHYu6FU3pZK83WpOb5mNsnZkt92ynRN1G7dyumAl5TpfdJNNbCwldZLzcnJUqIaFJLjqUsVNqV4qdHTRoawWghdyy/tIqMoZsbz6euR0FHJzprrk8vl/ZrleSq7upljqkBj/vZxYWncVhNQuXJcL6SIlt2efG4XcqK/LyZ0Qrn7wW7GeiapuLLbkcltS6+dYsBOunREs1s5laCiELkiWw0xhqwtBcMXNFBIbtFypLuRWfUtOi7XoD7tha7MLsgvuZrdaFGykxWYople9JDuJeECdVfxtsslGuE6foWgT3+6J88S6O4/bTLTeTPjenWzW3xFdr9f5h+v1RG6zShx6vwQuh84O8f57YTM39rkcEj8VLE+PJb6PounNfzt6o3n98Gdt/CAVv2zWp0orzMmLFC5Fz7o+ZdLKfP5yGM207ZbVpi9MOzJ/NHrkbHmK/gPtP/eMSIOu3Qlfsvuxo9amEGqr7YdcSB8JHrmNh7ga3P7uv/lIWJdTrTsVcvqtUngm6MZ2Tr1XCt/tGr827ZjIFWl4rag/J1WD12w7LlwD96KbzSec+f16u0dON1p2+WA4QM40Cl06QC6kJv9wUpwovUGb9+HKk/lemozF3J9zutBiLlYfse6Va/CmQ/1Bck0WneeDUMe7dUN/EC2aYjqMBnIAAAAAAAAAAAAAAABwFr4AzxAYfhglFgEAAAAASUVORK5CYII="
                alt=""
              />
              <div className="">
                <p className=" font-bold text-lg">Mr.Jone</p>
                <p className=" flex items-center gap-3">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#545454"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-languages"
                  >
                    <path d="m5 8 6 6" />
                    <path d="m4 14 6-6 2-3" />
                    <path d="M2 5h12" />
                    <path d="M7 2h1" />
                    <path d="m22 22-5-10-5 10" />
                    <path d="M14 18h6" />
                  </svg>
                  Myanmar, English
                </p>
                <p className=" flex items-center gap-3">
                  {" "}
                  <svg
                    className=" w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(84,84,84,1)"
                  >
                    <path d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14Z"></path>
                  </svg>
                  Tarot, Meditation
                </p>
              </div>
            </div>
            <div className=" flex justify-between mx-8 my-3">
              <div className="">
                <p className=" flex items-center gap-2">
                  <svg
                    className=" w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(84,84,84,1)"
                  >
                    <path d="M12 2 0 9 12 16 22 10.1667V17.5H24V9L12 2ZM3.99902 13.4905V18.0001C5.82344 20.429 8.72812 22.0001 11.9998 22.0001 15.2714 22.0001 18.1761 20.429 20.0005 18.0001L20.0001 13.4913 12.0003 18.1579 3.99902 13.4905Z"></path>
                  </svg>
                  8 years
                </p>
                <p className=" flex items-center gap-2 my-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#545454"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-badge-dollar-sign w-6"
                  >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                    <path d="M12 18V6" />
                  </svg>
                  100$
                </p>
                <p className=" flex items-center gap-2">
                  <svg
                    className=" w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(84,84,84,1)"
                  >
                    <path d="M2 8.99997H5V21H2C1.44772 21 1 20.5523 1 20V9.99997C1 9.44769 1.44772 8.99997 2 8.99997ZM7.29289 7.70708L13.6934 1.30661C13.8693 1.13066 14.1479 1.11087 14.3469 1.26016L15.1995 1.8996C15.6842 2.26312 15.9026 2.88253 15.7531 3.46966L14.5998 7.99997H21C22.1046 7.99997 23 8.8954 23 9.99997V12.1043C23 12.3656 22.9488 12.6243 22.8494 12.8658L19.755 20.3807C19.6007 20.7554 19.2355 21 18.8303 21H8C7.44772 21 7 20.5523 7 20V8.41419C7 8.14897 7.10536 7.89462 7.29289 7.70708Z"></path>
                  </svg>
                  2334
                </p>
              </div>
              <div className=" flex items-center gap-4">
                <a href="#" className=" text-center">
                  <svg
                    className=" w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(255,204,2,1)"
                  >
                    <path d="M8 18H18.2372L20 19.3851V9H21C21.5523 9 22 9.44772 22 10V23.5L17.5455 20H9C8.44772 20 8 19.5523 8 19V18ZM5.45455 16L1 19.5V4C1 3.44772 1.44772 3 2 3H17C17.5523 3 18 3.44772 18 4V16H5.45455Z"></path>
                  </svg>
                  Chat
                </a>
                <a href="#" className="text-center">
                  <svg
                    className=" w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(52,204,73,1)"
                  >
                    <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path>
                  </svg>
                  Call
                </a>
              </div>
            </div>
          </div>
          <div className=" border">
            <div className=" flex lg:gap-4 gap-12 justify-center items-center bg-[#ffcc02] py-2">
              <img
                className=" w-16 rounded-full"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAACUCAMAAABRNbASAAAAM1BMVEXl5uivtLjo6evFycyssbWvsrW1uLvCxsnc3uC7vsGxtbfV2NvLztDZ2tyqrrHQ0tXu7/Fq3jeNAAACgUlEQVR4nO2a626DMAxGiXHukPb9n3YBWrVbIaEbqZn0nT+dpko7suPEcdZ1AAAAAAAAAAAAAAAAAAAAAIB/BS1Ia6xA5C69tXYYu5P5UeesTpqZldbJXNyJ9Mj5rBWCyoT8wWqQVnpg9aJ1l1OKw3iK4E1hU6/wcAI7GsOam1L6BHYu6FU3pZK83WpOb5mNsnZkt92ynRN1G7dyumAl5TpfdJNNbCwldZLzcnJUqIaFJLjqUsVNqV4qdHTRoawWghdyy/tIqMoZsbz6euR0FHJzprrk8vl/ZrleSq7upljqkBj/vZxYWncVhNQuXJcL6SIlt2efG4XcqK/LyZ0Qrn7wW7GeiapuLLbkcltS6+dYsBOunREs1s5laCiELkiWw0xhqwtBcMXNFBIbtFypLuRWfUtOi7XoD7tha7MLsgvuZrdaFGykxWYople9JDuJeECdVfxtsslGuE6foWgT3+6J88S6O4/bTLTeTPjenWzW3xFdr9f5h+v1RG6zShx6vwQuh84O8f57YTM39rkcEj8VLE+PJb6PounNfzt6o3n98Gdt/CAVv2zWp0orzMmLFC5Fz7o+ZdLKfP5yGM207ZbVpi9MOzJ/NHrkbHmK/gPtP/eMSIOu3Qlfsvuxo9amEGqr7YdcSB8JHrmNh7ga3P7uv/lIWJdTrTsVcvqtUngm6MZ2Tr1XCt/tGr827ZjIFWl4rag/J1WD12w7LlwD96KbzSec+f16u0dON1p2+WA4QM40Cl06QC6kJv9wUpwovUGb9+HKk/lemozF3J9zutBiLlYfse6Va/CmQ/1Bck0WneeDUMe7dUN/EC2aYjqMBnIAAAAAAAAAAAAAAABwFr4AzxAYfhglFgEAAAAASUVORK5CYII="
                alt=""
              />
              <div className="">
                <p className=" font-bold text-lg">Mr.Jone</p>
                <p className=" flex items-center gap-3">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#545454"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-languages"
                  >
                    <path d="m5 8 6 6" />
                    <path d="m4 14 6-6 2-3" />
                    <path d="M2 5h12" />
                    <path d="M7 2h1" />
                    <path d="m22 22-5-10-5 10" />
                    <path d="M14 18h6" />
                  </svg>
                  Myanmar, English
                </p>
                <p className=" flex items-center gap-3">
                  {" "}
                  <svg
                    className=" w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(84,84,84,1)"
                  >
                    <path d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14Z"></path>
                  </svg>
                  Tarot, Meditation
                </p>
              </div>
            </div>
            <div className=" flex justify-between mx-8 my-3">
              <div className="">
                <p className=" flex items-center gap-2">
                  <svg
                    className=" w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(84,84,84,1)"
                  >
                    <path d="M12 2 0 9 12 16 22 10.1667V17.5H24V9L12 2ZM3.99902 13.4905V18.0001C5.82344 20.429 8.72812 22.0001 11.9998 22.0001 15.2714 22.0001 18.1761 20.429 20.0005 18.0001L20.0001 13.4913 12.0003 18.1579 3.99902 13.4905Z"></path>
                  </svg>
                  8 years
                </p>
                <p className=" flex items-center gap-2 my-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#545454"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-badge-dollar-sign w-6"
                  >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                    <path d="M12 18V6" />
                  </svg>
                  100$
                </p>
                <p className=" flex items-center gap-2">
                  <svg
                    className=" w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(84,84,84,1)"
                  >
                    <path d="M2 8.99997H5V21H2C1.44772 21 1 20.5523 1 20V9.99997C1 9.44769 1.44772 8.99997 2 8.99997ZM7.29289 7.70708L13.6934 1.30661C13.8693 1.13066 14.1479 1.11087 14.3469 1.26016L15.1995 1.8996C15.6842 2.26312 15.9026 2.88253 15.7531 3.46966L14.5998 7.99997H21C22.1046 7.99997 23 8.8954 23 9.99997V12.1043C23 12.3656 22.9488 12.6243 22.8494 12.8658L19.755 20.3807C19.6007 20.7554 19.2355 21 18.8303 21H8C7.44772 21 7 20.5523 7 20V8.41419C7 8.14897 7.10536 7.89462 7.29289 7.70708Z"></path>
                  </svg>
                  2334
                </p>
              </div>
              <div className=" flex items-center gap-4">
                <a href="#" className=" text-center">
                  <svg
                    className=" w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(255,204,2,1)"
                  >
                    <path d="M8 18H18.2372L20 19.3851V9H21C21.5523 9 22 9.44772 22 10V23.5L17.5455 20H9C8.44772 20 8 19.5523 8 19V18ZM5.45455 16L1 19.5V4C1 3.44772 1.44772 3 2 3H17C17.5523 3 18 3.44772 18 4V16H5.45455Z"></path>
                  </svg>
                  Chat
                </a>
                <a href="#" className="text-center">
                  <svg
                    className=" w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(52,204,73,1)"
                  >
                    <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path>
                  </svg>
                  Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-5xl text-center mt-12 font-semibold text-[#ffcc02]">
        ASTROLOGY READINGS
      </p>
      <div className="lg:grid lg:grid-cols-3 md:grid-cols-1 md:mx-52 mx-12 lg:mx-32 lg:gap-8 my-8 space-y-5 lg:space-y-0 ">
        <ScrollAreaDemo />
        <ScrollAreaDemo2 />
        <ScrollAreaDemo3 />
      </div>
      <div className="">
        <p className=" text-5xl text-center mt-16 font-semibold text-[#545454]">
          CUSTOMER <span className="text-[#665300]">REVIEWS</span>
        </p>
        <div className=" lg:flex lg:mx-32 md:mx-20 mx-7 gap-2 mt-5 space-y-5 lg:space-y-0">
          <div className="border border-[#ffcc02] p-3 rounded-xl shadow-xl">
            <p className=" ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              tenetur commodi optio vero architecto? Consequatur et, at iste
              quas hic quisquam, nobis ipsam iusto reiciendis pariatur non!
              Repellat, mollitia facere?
            </p>
            <p className=" text-end mt-3">Mr.Zed</p>
          </div>
          <div className="border border-[#ffcc02] p-3 rounded-xl shadow-xl">
            <p className=" ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              tenetur commodi optio vero architecto? Consequatur et, at iste
              quas hic quisquam, nobis ipsam iusto reiciendis pariatur non!
              Repellat, mollitia facere?
            </p>
            <p className=" text-end mt-3">Mr.Zed</p>
          </div>
          <div className="border border-[#ffcc02] p-3 rounded-xl shadow-xl">
            <p className=" ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              tenetur commodi optio vero architecto? Consequatur et, at iste
              quas hic quisquam, nobis ipsam iusto reiciendis pariatur non!
              Repellat, mollitia facere?
            </p>
            <p className=" text-end mt-3">Mr.Zed</p>
          </div>
        </div>
      </div>
      <footer className=" border border-y mt-20 py-5">
        <div className=" lg:grid lg:grid-cols-4 lg:mx-40 md:mx-10 md:grid md:grid-cols-2 md:gap-20 mx-8 space-y-4 md:space-y-0 lg:space-y-0">
          <div className="">
            <p className=" font-bold text-xl mb-3">ONLINE ADVICE</p>
            <div className=" text-sm">
              <a href="#" className=" ">
                <p className="btn2 pb-2 border-b">Chat with Astrologer</p>
              </a>
              <a href="#" className="">
                <p className="btn2 py-2 border-b">Astrologers</p>
              </a>
              <a href="#" className="">
                <p className="btn2 py-2 border-b">Tarot readers</p>
              </a>
              <a href="#" className=" ">
                <p className="btn2 py-2 border-b">Numerologists</p>
              </a>
              <a href="#" className="">
                <p className="btn2 py-2 border-b">Vastu experts</p>
              </a>
              <a href="#" className="">
                <p className="btn2 py-2 border-b">Fengshui experts</p>
              </a>
              <a href="#" className="">
                <p className="btn2 py-2 border-b">Career Astrologers</p>
              </a>
              <a href="#" className="">
                <p className="btn2 py-2 border-b">Love Astrologers</p>
              </a>
              <a href="#" className="">
                <p className="btn2 py-2 border-b">Financial Astrologers</p>
              </a>
              <a href="#" className="">
                <p className="btn2 py-2 border-b">Marriage Astrologers</p>
              </a>
              <a href="#" className="">
                <p className="btn2 py-2 border-b">Money Astrologers</p>
              </a>
              <a href="#" className="">
                <p className="btn2 py-2 border-b">
                  Free Astrology Consultation
                </p>
              </a>
              <a href="#" className="">
                <p className="btn2 py-2 border-b">Horoscope 2024</p>
              </a>
            </div>
          </div>
          <div className="">
            <p className=" font-bold text-xl mb-3">USEFUL LINKS</p>
            <div className=" text-sm">
              <a href="#" className=" ">
                <p className="btn2 pb-2 border-b">About Us</p>
              </a>
              <a href="#" className="">
                <p className="btn2 py-2 border-b">Contact Us</p>
              </a>
              <a href="#" className="">
                <p className="btn2 py-2 border-b">Privacy Policy</p>
              </a>
              <a href="#" className=" ">
                <p className="btn2 py-2 border-b">Astrologer Registration</p>
              </a>
              <a href="#" className="">
                <p className="btn2 py-2 border-b">Partner Us</p>
              </a>
              <a href="#" className="">
                <p className="btn2 py-2 border-b">FAQs</p>
              </a>
              <a href="#" className="">
                <p className="btn2 py-2 border-b">Terms and Conditions</p>
              </a>
              <a href="#" className="">
                <p className="btn2 py-2 border-b">Careers</p>
              </a>
              <a href="#" className="">
                <p className="btn2 py-2 border-b">Site Map</p>
              </a>
              <a href="#" className="">
                <p className="btn2 py-2 border-b">Karma & Destiny</p>
              </a>
              <a href="#" className="">
                <p className="btn2 py-2 border-b">Refund Policy</p>
              </a>
              <a href="#" className="">
                <p className="btn2 py-2 border-b">Yogi Academy</p>
              </a>
            </div>
          </div>
          <div className="">
            <p className=" font-bold text-xl mb-3 border-b">
              ASTROYOGI MOBILE APPS
            </p>
            <div className=" text-sm">
              <p className=" font-semibold">Astroyogi Astrologer</p>
              <a href="#" className=" ">
                <img
                  className="w-36 my-3"
                  src="https://images.astroyogi.com/astroyogi2017/common/download_app_store.png"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  className="w-36 mb-3"
                  src="https://images.astroyogi.com/astroyogi2017/common/get_it_playstore.png"
                  alt=""
                />
              </a>
            </div>
            <p className=" font-bold text-xl mb-3">CONTACT US</p>
            <div className=" text-[#737373] text-sm">
              <p>09123456789</p>
              <p className=" my-2">
                Email :{" "}
                <a href="#" className=" underline">
                  customercare@astroyogi.coms
                </a>
              </p>
              <p>We are now available 24x7</p>
            </div>
          </div>
          <div className="">
            <p className=" font-bold text-xl mb-3">SECURE</p>
            <div className=" flex items-center gap-2">
              <svg
                className=" w-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M5.67591 4.25667C9.60392 1.03828 15.4094 1.26236 19.076 4.92893C22.9812 8.83418 22.9812 15.1658 19.076 19.0711C15.1707 22.9763 8.83906 22.9763 4.93382 19.0711C2.40932 16.5466 1.51676 13.0081 2.25611 9.76666L2.33275 9.45394L4.26718 9.96315C3.56967 12.623 4.26329 15.5721 6.34803 17.6569C9.47222 20.781 14.5375 20.781 17.6617 17.6569C20.7859 14.5327 20.7859 9.46734 17.6617 6.34315C14.8441 3.5255 10.4475 3.24903 7.32006 5.51375L7.09886 5.67983L8.1158 6.6967L3.5196 7.75736L4.58026 3.16117L5.67591 4.25667ZM13.0049 6V8H15.5049V10H10.0049C9.72874 10 9.50488 10.2239 9.50488 10.5C9.50488 10.7455 9.68176 10.9496 9.91501 10.9919L10.0049 11H14.0049C15.3856 11 16.5049 12.1193 16.5049 13.5C16.5049 14.8807 15.3856 16 14.0049 16H13.0049V18H11.0049V16H8.50488V14H14.0049C14.281 14 14.5049 13.7761 14.5049 13.5C14.5049 13.2545 14.328 13.0504 14.0948 13.0081L14.0049 13H10.0049C8.62417 13 7.50488 11.8807 7.50488 10.5C7.50488 9.11929 8.62417 8 10.0049 8H11.0049V6H13.0049Z"></path>
              </svg>
              <div className="">
                <p className=" font-semibold">Refund</p>
                <p>policy</p>
              </div>
            </div>
            <div className=" flex items-center gap-2 my-4">
              <svg
                className=" w-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M10.0073 2.10365C8.60568 1.64993 7.08206 2.28104 6.41181 3.59294L5.60603 5.17011C5.51029 5.35751 5.35787 5.50992 5.17048 5.60566L3.5933 6.41144C2.2814 7.08169 1.6503 8.60532 2.10401 10.0069L2.64947 11.6919C2.71428 11.8921 2.71428 12.1077 2.64947 12.3079L2.10401 13.9929C1.6503 15.3945 2.28141 16.9181 3.5933 17.5883L5.17048 18.3941C5.35787 18.4899 5.51029 18.6423 5.60603 18.8297L6.41181 20.4068C7.08206 21.7187 8.60569 22.3498 10.0073 21.8961L11.6923 21.3507C11.8925 21.2859 12.108 21.2859 12.3082 21.3507L13.9932 21.8961C15.3948 22.3498 16.9185 21.7187 17.5887 20.4068L18.3945 18.8297C18.4902 18.6423 18.6426 18.4899 18.83 18.3941L20.4072 17.5883C21.7191 16.9181 22.3502 15.3945 21.8965 13.9929L21.351 12.3079C21.2862 12.1077 21.2862 11.8921 21.351 11.6919L21.8965 10.0069C22.3502 8.60531 21.7191 7.08169 20.4072 6.41144L18.83 5.60566C18.6426 5.50992 18.4902 5.3575 18.3945 5.17011L17.5887 3.59294C16.9185 2.28104 15.3948 1.64993 13.9932 2.10365L12.3082 2.6491C12.108 2.71391 11.8925 2.71391 11.6923 2.6491L10.0073 2.10365ZM8.19283 4.50286C8.41624 4.06556 8.92412 3.8552 9.39132 4.00643L11.0763 4.55189C11.6769 4.74632 12.3236 4.74632 12.9242 4.55189L14.6092 4.00643C15.0764 3.8552 15.5843 4.06556 15.8077 4.50286L16.6135 6.08004C16.9007 6.64222 17.3579 7.09946 17.9201 7.38668L19.4973 8.19246C19.9346 8.41588 20.145 8.92375 19.9937 9.39095L19.4483 11.076C19.2538 11.6766 19.2538 12.3232 19.4483 12.9238L19.9937 14.6088C20.145 15.076 19.9346 15.5839 19.4973 15.8073L17.9201 16.6131C17.3579 16.9003 16.9007 17.3576 16.6135 17.9197L15.8077 19.4969C15.5843 19.9342 15.0764 20.1446 14.6092 19.9933L12.9242 19.4479C12.3236 19.2535 11.6769 19.2535 11.0763 19.4479L9.39132 19.9933C8.92412 20.1446 8.41624 19.9342 8.19283 19.4969L7.38705 17.9197C7.09983 17.3576 6.64258 16.9003 6.08041 16.6131L4.50323 15.8073C4.06593 15.5839 3.85556 15.076 4.0068 14.6088L4.55226 12.9238C4.74668 12.3232 4.74668 11.6766 4.55226 11.076L4.0068 9.39095C3.85556 8.92375 4.06593 8.41588 4.50323 8.19246L6.0804 7.38668C6.64258 7.09946 7.09983 6.64222 7.38705 6.08004L8.19283 4.50286ZM6.75984 11.7573L11.0025 15.9999L18.0736 8.92885L16.6594 7.51464L11.0025 13.1715L8.17406 10.343L6.75984 11.7573Z"></path>
              </svg>
              <div className="">
                <p className=" font-semibold">Verified Expert</p>
                <p>Astrologers</p>
              </div>
            </div>
            <div className=" flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-shield-check"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <div className="">
                <p className=" font-semibold">Refund</p>
                <p>policy</p>
              </div>
            </div>
            <div className="font-bold text-xl my-8 ">
              <p>KEEP IN TOUCH</p>
              <div className=" flex gap-3 mt-1">
                <div className="">
                  <a href="#">
                    <img
                      className=" border rounded-full w-10"
                      src="data:image/png;base64,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"
                      alt=""
                    />
                  </a>
                </div>
                <div className="">
                  <a href="#">
                    <img
                      className=" border rounded-full w-10"
                      src="data:image/jpeg;base64,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"
                      alt=""
                    />
                  </a>
                </div>
                <div className="">
                  <a href="#">
                    <img
                      className=" border rounded-full w-10"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReCFKbblH5OSgAY1GqiqeqRc9ZnUoR3gDtrQ&usqp=CAU"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className=" bg-[#f5f5f5] py-5 text-center">
        <p className=" text-xs font-semibold">
          © Netway India Pvt. Ltd. 2001-2024.{" "}
          <span className=" italic">All rights reserved.</span>
        </p>
      </div>
    </div>
  );
}
