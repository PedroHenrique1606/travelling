import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import Background from "@/assets/background.png";
import Illus from "@/assets/illus.png";
import PlayStore from "@/assets/google-play.png";
import AppStore from "@/assets/appstore.png";
import Card from "@/components/Card/Card";
import Benefits from "@/components/Benefits/Benefits";
import FloresRoad from "@/assets/floresroad.png";
import Desawisata from "@/assets/desawisata.png";
import FlorestGlamp from "@/assets/forrestrglamping.png";
import PlannVacation from "@/assets/plannvacation.png"
import Paket from "@/assets/pakettiket.png";
import Duoviage from "@/assets/duoviage.png"
import Airplane from "@/assets/airplane.png";
import Hotel from "@/assets/hotel.png";
import Baggage from "@/assets/baggage.png";
import FooterBG from "@/assets/footer.png"
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const dataTravel = [
  {
    title: "Flores Road Trip 3D2N",
    duration: "3 Days",
    price: 6705000,
    location: "Manggarai Barat",
    imageUrl: FloresRoad.src,
    imageWidth: 500,
    imageHeight: 300,
  },
  {
    title: "Bali Adventure",
    duration: "5 Days",
    price: 8900000,
    location: "Denpasar",
    imageUrl: Paket.src,
    imageWidth: 500,
    imageHeight: 300,
  },
  {
    title: "Jakarta City Tour",
    duration: "2 Days",
    price: 3500000,
    location: "Jakarta",
    imageUrl: Desawisata.src,
    imageWidth: 500,
    imageHeight: 300,
  },
  {
    title: "Forrester Glamping Co Bogor",
    duration: "2 Days",
    price: 3500000,
    location: "Jakarta",
    imageUrl: FlorestGlamp.src,
    imageWidth: 500,
    imageHeight: 300,
  }
];

const benefits = [
  {
    icon: Airplane.src,
    title: "Flight Ticket",
    description: "Vitae donec pellentesque a aliquam et ultricies auctor. ",
    imageWidth: 50,
    imageHeight: 50,
  },
  {
    icon: Hotel.src,
    title: "Accomodation",
    description: "Vitae donec pellentesque a aliquam et ultricies auctor. ",
    imageWidth: 50,
    imageHeight: 50,
  },
  {
    icon: Baggage.src,
    title: "Packaged Tour",
    description: "Vitae donec pellentesque a aliquam et ultricies auctor. ",
    imageWidth: 50,
    imageHeight: 50,
  }
]

export default function Home() {
  return (
    <main
      className="bg-slate-50 w-full h-full bg-cover"
      style={{ backgroundImage: `url(${Background.src})` }}
    >
      <div className="relative mb-44">
        <nav>
          <Navbar />
        </nav>
        <div className="m-24 grid grid-cols-2 gap-8 items-center fade-in-up">
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
              <Image src={PlayStore} alt="Google Play Store" width={120} height={40} />
              <Image src={AppStore} alt="App Store" width={120} height={40} />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image src={Illus} alt="Illustration" />
          </div>
        </div>
      </div>

      <div className="m-24 fade-in-up">
        <p className="text-slate-700 font-semibold text-3xl mb-2">Popular Destinations</p>
        <p className="text-slate-500 text-sm">Vacations to make your experience enjoyable in Indonesia!</p>
        <div className="flex items-center justify-between mt-12">
          {dataTravel.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              duration={item.duration}
              price={item.price}
              location={item.location}
              imageUrl={item.imageUrl}
              imageWidth={item.imageWidth}
              imageHeight={item.imageHeight}
            />
          ))}
        </div>
      </div>

      <div className="mt-44 mb-44 flex gap-8 items-center justify-center fade-in-up">
        <div className="flex gap-40">
          <div className="flex items-center justify-center">
            <Image src={Duoviage} alt="Illustration" />
          </div>
          <div className="w-2/3">
            <h2 className="text-slate-900 text-5xl font-bold leading-tight mb-4">
              Why Choose Us
            </h2>
            <p className="text-slate-900 text-sm tracking-wider leading-relaxed">
              Enjoy different experiences in every place you visit and<br />
              discover new and affordable adventures of course.
            </p>
            <div className="flex flex-col mt-3 gap-3 mb-5">
              {benefits.map((item, index) => (
                <Benefits
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  imageHeight={item.imageHeight}
                  imageWidth={item.imageWidth}
                />
              ))}
            </div>
            <a href="#" className="text-gray-900 gap-2 font-medium text-base leading-relaxed ml-5 flex items-center text-center">
              Another Product <IoIosArrowForward />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <p className="text-gray-900 text-3xl font-semibold tracking-wide mb-4">Plan Your Vacation!</p>
        <p className="text-gray-700 text-center text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit optio minus natus, <br />voluptatibus dolores accusantium corrupti voluptas odit inventore.</p>
        <div className="mt-14">
          <Image src={PlannVacation} alt="plan vacation" />
        </div>
      </div>

      <footer
        className="bg-slate-50 w-full h-full bg-cover"
        style={{ backgroundImage: `url(${FooterBG.src})` }}
      >
        <div className="flex justify-center items-center py-24 px-24">
          <div className="bg-white/20 backdrop-blur-sm py-24 px-36 rounded-2xl flex items-center gap-48 border-white border-[1px]">
            <div className="text-white">
              <p className="text-base">Prepare yourself to be a part of exploration of</p>
              <p className="text-4xl font-bold">The Beauty of Indonesia</p>
            </div>
            <div className="flex items-center gap-4 flex-col">
              <button className="px-40 py-3 transition-colors duration-300 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-600/55">
                Sign In
              </button>
              <button className="px-[9.8rem] py-3 transition-colors duration-300 bg-white text-cyan-600 rounded-lg font-medium hover:bg-white/90">
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div className="mt-24 ml-32 mr-32 mb-0 flex justify-evenly">
          <p className="text-white text-3xl font-semibold mb-5">Travelling!</p>
          <ol className="list-none flex gap-8">
            <li>
              Product
            </li>
            <li>
              Contact Us
            </li>
            <li>
              Privacy Policy
            </li>
            <li>
              About Us
            </li>
          </ol>
          <div className="flex flex-col">
            <p className="text-white text-xl font-semibold">Get the App</p>
            <div className="flex">
              <Image src={PlayStore} alt="Google Play Store" width={120} height={40} />
              <Image src={AppStore} alt="App Store" width={120} height={40} />
            </div>
          </div>
        </div>
        <hr className="border-t border-gray-300 my-8" />
        <div className="px-32 py-10 flex items-center justify-between">
          <div className="flex gap-2">
            &copy;
            <p>2024 Travelling.com</p>
          </div>
          <div className="flex gap-4 mt-4">
            <div className="flex items-center justify-center w-10 h-10 border-[1px] cursor-pointer border-white rounded-full">
              <FaInstagram />
            </div>
            <div className="flex items-center justify-center w-10 h-10 border-[1px] cursor-pointer border-white rounded-full">
              <FaTwitter />
            </div>
            <div className="flex items-center justify-center w-10 h-10 border-[1px] cursor-pointer border-white rounded-full">
              <FaFacebook />
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
