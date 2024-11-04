"use client";
import Airplane from "@/assets/airplane.png";
import AppStore from "@/assets/appstore.png";
import Background from "@/assets/background.png";
import Baggage from "@/assets/baggage.png";
import Desawisata from "@/assets/desawisata.png";
import Duoviage from "@/assets/duoviage.png";
import FloresRoad from "@/assets/floresroad.png";
import FooterBG from "@/assets/footer.png";
import FlorestGlamp from "@/assets/forrestrglamping.png";
import PlayStore from "@/assets/google-play.png";
import Hotel from "@/assets/hotel.png";
import Illus from "@/assets/illus.png";
import Paket from "@/assets/pakettiket.png";
import PlannVacation from "@/assets/plannvacation.png";
import Benefits from "@/components/Benefits/Benefits";
import Card from "@/components/Card/Card";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import { useRef } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

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
  },
];

const benefits = [
  {
    icon: Airplane.src,
    title: "Flight Ticket",
    description: "Vitae donec pellentesque a aliquam et ultricies auctor. ",
    imageWidth: 55,
    imageHeight: 55,
  },
  {
    icon: Hotel.src,
    title: "Accomodation",
    description: "Vitae donec pellentesque a aliquam et ultricies auctor. ",
    imageWidth: 55,
    imageHeight: 55,
  },
  {
    icon: Baggage.src,
    title: "Packaged Tour",
    description: "Vitae donec pellentesque a aliquam et ultricies auctor. ",
    imageWidth: 55,
    imageHeight: 55,
  },
];

export default function Home() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <main
      className="bg-slate-50 w-full h-full bg-cover"
      style={{ backgroundImage: `url(${Background.src})` }}
    >
      <div className="relative mb-44">
        <nav>
          <Navbar />
        </nav>
        <div className="md:m-24 m-12 md:grid md:grid-cols-2 gap-8 items-center fade-in-up">
          <div className="">
            <h1 className="text-slate-700 text-3xl md:text-5xl font-bold tracking-normal leading-tight mb-4">
              Start your journey
              <br />
              by one click, explore
              <br />
              beautiful world!
            </h1>
            <p className="text-slate-600 text-xs md:text-sm tracking-wider leading-loose">
              Plan and book your perfect trip with expert advice, travel tips,{" "}
              <br />
              destination information and inspiration from us!
            </p>
            <div className="flex mt-3 gap-3">
              <Image
                src={PlayStore}
                alt="Google Play Store"
                className="w-32 h-[2.8rem] md:w-auto md:h-auto"
              />
              <Image
                src={AppStore}
                alt="App Store"
                className="w-32 h-[2.8rem] md:w-auto md:h-auto"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image src={Illus} alt="Illustration" className="w-80 md:w-auto" />
          </div>
        </div>
      </div>

      <div className="relative my-12 mx-2 xl:hidden">
        {" "}
        {/* Exibe apenas em dispositivos móveis */}
        <button
          onClick={scrollLeft}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 p-2 text-white bg-gray-800 rounded-full opacity-75 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <div
          ref={sliderRef}
          className="flex overflow-x-scroll scrollbar-hide scroll-smooth snap-x snap-mandatory"
        >
          {dataTravel.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-64 mx-2 snap-center">
              <Card
                title={item.title}
                duration={item.duration}
                price={item.price}
                location={item.location}
                imageUrl={item.imageUrl}
                imageWidth={item.imageWidth}
                imageHeight={item.imageHeight}
              />
            </div>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 p-2 text-white bg-gray-800 rounded-full opacity-75 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Versão para telas maiores */}
      <div className="hidden xl:flex md:overflow-x-auto md:scrollbar-hidden md:scroll-smooth md:snap-x md:snap-mandatory md:mx-2 items-center justify-center">
        <div className="flex items-center justify-between mt-12 gap-7">
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

      <div className="mt-32 md:mt-44 mb-32 md:mb-44 flex gap-8 items-center justify-center fade-in-up">
        <div className="flex flex-col md:flex-row gap-40 mx-3">
          <div className="flex items-center justify-center">
            <Image
              src={Duoviage}
              alt="Illustration"
              className="w-80 md:w-auto"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-slate-900 text-3xl md:text-5xl font-bold leading-tight mb-4">
              Why Choose Us
            </h2>
            <p className="text-slate-900 text-xs md:text-sm tracking-wider leading-relaxed">
              Enjoy different experiences in every place you visit and
              <br />
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
            <a
              href="#"
              className="text-gray-900 gap-2 font-medium text-base leading-relaxed ml-5 flex items-center text-center"
            >
              Another Product <IoIosArrowForward />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <p className="text-gray-900 text-3xl font-semibold tracking-wide mb-4">
          Plan Your Vacation!
        </p>
        <p className="text-gray-700 text-center text-sm tracking-wider leading-relaxed">
          Various facilities that we provide for your trip <br />
          make your holiday experience more enjoyable.
        </p>
        <div className="flex gap-8 mt-16">
          <Image src={PlannVacation} alt="Plan Vacation" />
        </div>
      </div>

      <footer
        className="bg-cover w-full h-full mt-44"
        style={{ backgroundImage: `url(${FooterBG.src})` }}
      >
        <div className="flex flex-col md:justify-center md:items-center py-24 px-12 md:px-24">
          <div className="bg-white/20 backdrop-blur-sm py-12 md:py-24 px-10 md:px-36 rounded-2xl flex flex-col md:flex-row items-center gap-8 md:gap-48 border-white border-[1px]">
            <div className="text-white text-center md:text-left">
              <p className="text-sm md:text-base">
                Prepare yourself to be a part of exploration of
              </p>
              <p className="text-2xl md:text-4xl font-bold">
                The Beauty of Indonesia
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start gap-4 mt-8 md:mt-0">
              <button className="px-10 md:px-40 py-3 text-xs transition-colors duration-300 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-600/55">
                Sign In
              </button>
              <button className="px-10 md:px-[9.8rem] py-3 text-xs transition-colors duration-300 bg-white text-cyan-600 rounded-lg font-medium hover:bg-white/90">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        <div className="md:mt-24 ml-32 mr-32 mb-0 flex flex-col md:flex-row justify-evenly items-center md:items-start">
          <p className="text-white text-3xl font-semibold mb-5">Travelling!</p>
          <ol className="list-none flex flex-col md:flex-row gap-8 text-center text-white">
            <li>
              <a href="">Product</a>
            </li>
            <li>
              <a href="">Contact Us</a>{" "}
            </li>
            <li>
              <a href="">Privacy Policy</a>{" "}
            </li>
            <li>
              <a href="">About Us</a>{" "}
            </li>
          </ol>
          <div className="flex flex-col items-center md:items-start mt-3 md:mt-0">
            <p className="text-white text-xl font-semibold my-4 md:my-0">Get the App</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-3">
              <Image
                src={PlayStore}
                alt="Google Play Store"
                width={120}
                height={40}
              />
              <Image src={AppStore} alt="App Store" width={120} height={40} />
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-300 my-8" />

        <div className="px-32 py-10 flex flex-col md:flex-row items-center justify-between">
          <div className="flex gap-2 mb-4 md:mb-0 text-white">
            &copy;
            <p>2024 Travelling.com</p>
          </div>
          <div className="flex gap-4 mt-4">
            <div className="flex items-center justify-center w-10 h-10 border-[1px] cursor-pointer border-white rounded-full">
              <FaInstagram className="text-white" />
            </div>
            <div className="flex items-center justify-center w-10 h-10 border-[1px] cursor-pointer border-white rounded-full">
              <FaTwitter className="text-white" />
            </div>
            <div className="flex items-center justify-center w-10 h-10 border-[1px] cursor-pointer border-white rounded-full">
              <FaFacebook className="text-white" />
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
