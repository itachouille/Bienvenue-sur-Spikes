import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const SpikesButton = () => {
  return (
    <Link
      className="border border-[#4C3182] shadow-inner backdrop-blur-sm rounded-3xl flex items-center justify-center gap-3 px-6 py-1 cursor-pointer group transition-all ease-in-out duration-300 hover:scale-110"
      href="https://www.spikes.dev"
    >
      <span className="text-base font-medium text-white ">www.spikes.dev</span>
      <ArrowRight className="size-4 group-hover:translate-x-1 transition-all" />
    </Link>
  );
};

export default SpikesButton;
