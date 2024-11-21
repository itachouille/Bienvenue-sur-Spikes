import { ArrowRight } from "lucide-react";
import { GridPattern } from "../public/grid-pattern";
import { SpikesIcon } from "../public/spikes_icon";
import Card from "./components/Card";
import Marquee from "@/components/ui/marquee";
import { bottomCards, topCards } from "./constants";

export default function Home() {
  return (
    <main className="overflow-hidden font-aeonik">
      <div className="flex flex-col items-center justify-center w-full h-screen overflow-hidden">
        <GridPattern className="absolute top-0 w-full h-auto rotate-180 -z-50" />
        <div className="absolute top-0 w-[80%] h-28 bg-[#7059F2]/30 blur-3xl" />
        <div className="absolute flex items-center gap-2 top-16">
          <SpikesIcon />
          <span className="font-medium text-2xl text-[#F7F6F9]">Spikes</span>
        </div>
        <InfiniteScolling />
        <div className="absolute bottom-16 z-50">
          <a
            className="border-2 border-[#4C3182] backdrop-blur-sm rounded-3xl flex items-center justify-center gap-2 px-5 py-1 cursor-pointer group transition ease-in-out duration-300 hover:scale-110"
            href="https://www.spikes.dev"
          >
            www.spikes.dev
            <ArrowRight className="size-4" />
          </a>
        </div>
        <div className="absolute bottom-0 w-[80%] h-28 bg-[#7059F2]/30 blur-3xl" />
        <GridPattern className="absolute bottom-0 w-full h-auto -z-50" />
      </div>
    </main>
  );
}

function InfiniteScolling() {
  return (
    <div className="relative flex w-full h-[500px] flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:30s]">
        {topCards.map((review) => (
          <Card key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:30s]">
        {bottomCards.map((review) => (
          <Card key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
