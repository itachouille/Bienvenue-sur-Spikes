import Marquee from "@/components/ui/marquee";
import { bottomCards, topCards } from "../constants";
import Card from "./Card";

export default function InfiniteScolling() {
  return (
    <div className="relative flex w-full h-[500px] flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:50s]">
        {topCards.map((review) => (
          <Card key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:50s]">
        {bottomCards.map((review) => (
          <Card key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
