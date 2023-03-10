import CoreTracks from "@/components/widgets/CoreTracks";
import Hero from "@/components/widgets/Hero";
import SpecializedTracks from "@/components/widgets/SpecializedTracks";

export default function Home() {
  return (
    <>
      <main>
        <div className="relative">
          <Hero />
          <div className="w-60 h-60 bg-teal-400 absolute -z-50 blur-[135px] mt-20 -ml-[70px]" />
          <CoreTracks />
        </div>
        <SpecializedTracks />
      </main>
    </>
  )
}
