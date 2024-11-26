import GridBackground from "./components/GridBackground";
import InfiniteScolling from "./components/InfiniteScrolling";
import Logo from "./components/Logo";
import SpikesButton from "./components/SpikesButton";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <GridBackground />
        <div className="absolute flex items-center gap-2 top-12">
          <Logo />
        </div>
        <InfiniteScolling />
        <div className="absolute bottom-12 z-50">
          <SpikesButton />
        </div>
      </div>
    </main>
  );
}
