import BottomSection from "@/components/widgets/BottomSection";
import CoreTracks from "@/components/widgets/CoreTracks";
import Footer from "@/components/widgets/Footer";
import Hero from "@/components/widgets/Hero";
import SpecializedTracks from "@/components/widgets/SpecializedTracks";
import { Manrope } from 'next/font/google'

const manrope = Manrope({
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-manrope',
})

export default function Home() {
  return (
    <>
      <main className={`${manrope.variable} font-sans`}>
        <div className="relative">
          <Hero />
          <div className="w-60 h-60 bg-teal-400 absolute -z-50 blur-[135px] mt-20 -ml-[70px]" />
          <CoreTracks />
        </div>

        <SpecializedTracks />
        <div className="relative">
          <div className="w-60 h-60 bg-teal-300 absolute -z-50 blur-[150px] top-44 -right-2" />
          <BottomSection />
        </div>

        <Footer />
      </main>
    </>
  )
}
