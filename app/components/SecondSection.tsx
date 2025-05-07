import React from "react";
import OrangeUnderline from "./svg/OrangeUnderline";
import Blob1 from "./svg/Blob1";
import Image from "next/image";
import videoPreviewPhoto from "@/app/assets/videoPreviewPhoto.jpg";
import { FaCheck } from "react-icons/fa6";

export default function SecondSection() {
  return (
    <section className="flex gap-12 flex-col md:grid md:grid-cols-2 py-12 px-4 md:px-20 items-center font-sans">
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

      <div className="relative max-w-2xl w-full">
        {/* Decorative orange half-circle */}
        <Blob1 className="absolute -left-20 top-0 w-64 h-64 z-0    md:block" />

        {/* Main image & cards */}
        <div className="relative z-10">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src={videoPreviewPhoto}
              alt="App preview"
              className="w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white/80 p-3 rounded-full shadow-xl hover:scale-105 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-black"
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

          {/* Cards */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow border-t-4 border-purple-400">
              <span className="text-xs font-medium text-purple-600">
                Featured
              </span>
              <h4 className="font-semibold mt-1">The map of mathematics</h4>
              <p className="text-sm text-gray-600 mt-1">
                Egestas elit ut scelerisque ut eu sit vitae...
              </p>
              <button className="mt-2 text-blue-600 text-sm font-medium hover:underline">
                Take Lesson
              </button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow border-t-4 border-blue-400">
              <span className="text-xs font-medium text-blue-600">Popular</span>
              <h4 className="font-semibold mt-1">
                Design for how people think
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Aliquam et euismod condimentum...
              </p>
              <button className="mt-2 text-blue-600 text-sm font-medium hover:underline">
                Take Lesson
              </button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow border-t-4 border-green-400">
              <span className="text-xs font-medium text-green-600">New</span>
              <h4 className="font-semibold mt-1">
                International & commercial law
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Molestie integer eu arcu mauris bibendum...
              </p>
              <button className="mt-2 text-blue-600 text-sm font-medium hover:underline">
                Take Lesson
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
