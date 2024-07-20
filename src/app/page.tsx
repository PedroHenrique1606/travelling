import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import Background from "@/assets/background.png";
import Illus from "@/assets/illus.png";
import PlayStore from "@/assets/google-play.png";
import AppStore from "@/assets/appstore.png";
import Card from "@/components/Card/Card";

export default function Home() {
  return (
    <main
      className="bg-slate-50 w-full h-full bg-cover"
      style={{ backgroundImage: `url(${Background.src})` }}
    >
      <div className="relative">
        <nav>
          <Navbar />
        </nav>
        <div className="m-24 grid grid-cols-2 gap-8 items-center">
          <div className="">
            <h1 className="text-slate-700 text-5xl font-bold tracking-normal leading-tight mb-4">
              Start your journey<br />
              by one click, explore<br />
              beautiful world!
            </h1>
            <p className="text-slate-600 text-sm tracking-wider leading-loose">
              Plan and book your perfect trip with expert advice, travel tips, <br />
              destination information and inspiration from us!
            </p>
            <div className="flex mt-3 gap-3">
              <Image src={PlayStore} alt="Illustration" />
              <Image src={AppStore} alt="Illustration" />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image src={Illus} alt="Illustration" />
          </div>
        </div>
      </div>
      <div className="m-24">
        <p className="text-slate-700 font-semibold text-xl mb-1">Popular Destinations</p>
        <p className="text-slate-500 text-sm">Vacations to make your experience enjoyable in Indonesia!</p>
        <div>
          <Card />
        </div>
      </div>
    </main>
  );
}
