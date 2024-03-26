"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export function DropdownMenuCheckboxes() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <svg
            className="w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
          </svg>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem>Home</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Consult Astrologers</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Horoscope</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Horoscope 2024</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Panchang</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Kundli</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Numerology</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Tarot</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Love</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Yogi Live</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Blog</DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
