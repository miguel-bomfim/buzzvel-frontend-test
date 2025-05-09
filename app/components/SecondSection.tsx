import React from "react";
import OrangeUnderline from "./svg/OrangeUnderline";
import Blob1 from "./svg/Blob1";
import Image from "next/image";
import videoPreviewPhoto from "@/app/assets/videoPreviewPhoto.jpg";
import { FaCheck } from "react-icons/fa6";
import SecondSectionStarsDots from './svg/SecondSectionStarsDots'

export default function SecondSection() {
  const cardsInfo = [
    {
      flag: "Featured",
      title: "The map of mathematics",
      body: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
      color: 'oklch(55.8% 0.288 302.321)',
      bgColor: 'oklch(94.6% 0.033 307.174)'
    },
    {
      flag: "Popular",
      title: "Design for how people think",
      body: "Aliquam ut euismod condimentum elementum ultricies volutpat sit non. ",
      color: 'oklch(54.6% 0.245 262.881)',
      bgColor: 'oklch(93.2% 0.032 255.585)'

    },
    {
      flag: "New",
      title: "International & commercial law",
      body: "Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui. ",
      color: 'oklch(62.7% 0.194 149.214)',
      bgColor: 'oklch(96.2% 0.044 156.743)'
    },

  ]
  return (
    <section className="flex gap-12 flex-col md:grid md:grid-cols-2 py-12 px-4 md:px-20 items-center font-sans">
      <SecondSectionStarsDots className="absolute justify-self-center"/>
      <div className="flex flex-col gap-8 md:gap-20">
        <div className="flex flex-col md:gap-8 gap-6">
          <h2 className="text-2xl md:text-6xl font-bold leading-none">
            An&nbsp;
            <span className="md:inline-block relative">
              <span className="relative z-10">all-in-one&nbsp;</span>
              <OrangeUnderline className="md:relative absolute left-0 -bottom-2.5 md:-top-3 w-full scale-90 md:scale-x-125" />
            </span>
            app that makes it easier
          </h2>
          <p className="md:hidden">
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
            suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
            amet, dui sit suspendisse.
          </p>
          <ul className="md:space-y-2 space-y-4">
            <li className="flex items-center gap-2">
              <FaCheck />
              Est et in pharetra magna adipiscing ornare aliquam.
            </li>
            <li className="flex items-center gap-2">
              <FaCheck />
              Tellus arcu sed consequat ac velit ut eu blandit.
            </li>
            <li className="flex items-center gap-2">
              <FaCheck />
              Ullamcorper ornare in et egestas dolor orci.
            </li>
          </ul>

          <button className="cursor-pointer flex gap-4 text-blue-600 hover:opacity-75 items-center">
            Find more about the app &#129106;
          </button>
        </div>
      </div>

      <div className="relative max-w-2xl w-full md:justify-self-center">
        {/* Decorative orange half-circle */}
        <Blob1 className="absolute -left-20 top-0 w-64 h-64 -z-10 md:block md:h-full md:-w-[60%]" />

        {/* Main image & cards */}
        <div className="relative z-10">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <div className="relative">
              <span className="absolute -top-5 text-5xl pl-2">
                <ul className="flex">
                  <li className="text-red-500">.</li>
                  <li className="text-yellow-500">.</li>
                  <li className="text-green-500">.</li>
                </ul>
              </span>
              <Image
                src={videoPreviewPhoto}
                alt="App preview"
                className="w-full object-cover px-2 pb-2 pt-8 rounded-xl shadow-[0px_0px_15px_0px_rgba(0,_0,_0,_0.1)]"
              />
              <span className="bg-white absolute top-0 w-full h-full -z-10 shadow-[0px_25px_50px_-12px_rgba(0,_0,_0,_0.1)]"/>
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-black/50 p-6 rounded-full shadow-xl hover:scale-105 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.5 5.5a1 1 0 011.538-.844l6 4a1 1 0 010 1.688l-6 4A1 1 0 016.5 13.5v-8z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            </div>
          </div>

          {/* Cards 158 */}
          <div className="mt-4 flex gap-4 md:relative md:-top-24 md:-left-12">
            {
              cardsInfo.map((card, idx) => {
                return (
                  <div key={idx} className="bg-white p-4 rounded-lg shadow w-full md:max-w-[200px]">
                    <span style={{backgroundColor: `${card.bgColor}`, color: `${card.color}`}} className={`text-xs font-medium py-1 px-2 rounded-sm`}>
                      {card.flag}
                    </span>
                    <h4 className="font-semibold mt-1">{card.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {card.body}
                    </p>
                    <button className="mt-4 text-blue-600 text-sm font-medium hover:underline w-full py-2 px-3 border-2 rounded-lg">
                      Take Lesson
                    </button>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
}
