import React from 'react'
import Image from 'next/image'

import fourthImage1 from '@/app/assets/fourthImage-1.jpg'
import fourthImage2 from '@/app/assets/fourthImage-2.jpg'
import fourthImage3 from '@/app/assets/fourthImage-3.jpg'
import fourthImage4 from '@/app/assets/fourthImage-4.jpg'
import fourthImage5 from '@/app/assets/fourthImage-5.jpg'
import fourthImage6 from '@/app/assets/fourthImage-6.jpg'
import fourthImage7 from '@/app/assets/fourthImage-7.jpg'
import fourthImage8 from '@/app/assets/fourthImage-8.jpg'
import fourthImage9 from '@/app/assets/fourthImage-9.jpg'
import fourthImage10 from '@/app/assets/fourthImage-10.jpg'


export default function FourthSection() {
	return (
		<section className="py-16 bg-white">
			<div className="container mx-auto px-6 md:flex md:items-center md:justify-between gap-10">
        
				{/* Left Side: Stacked Images */}
				<div className="max-w-[600px] grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
					{[
						fourthImage1,
						fourthImage2,
						fourthImage3,
						fourthImage4,
						fourthImage5,
						fourthImage6,
						fourthImage7,
						fourthImage8,
						fourthImage9,
						fourthImage10
					].map((src, index) => (
						<Image
							key={index}
							src={src}
							alt={`Student ${index + 1}`}
							className={`max-w-[128px] rounded-lg shadow-md ${index % 2 === 0 ? "translate-y-2" : "-translate-y-2"}`}
						/>
					))}
				</div>

				{/* Right Side: Text Content */}
				<div className="mt-10 md:mt-0 md:w-1/2">
					<h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            Meet international students & teachers
						<span className="text-yellow-400">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 24 24"
								className="w-6 h-6"
							>
								<path d="M12 0L15.09 8H24L17.45 12.9L20.18 21L12 16.2L3.82 21L6.55 12.9L0 8H8.91L12 0Z" />
							</svg>
						</span>
					</h2>
					<p className="text-gray-600 mt-4 mb-6">
            Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc.
            Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placaret ipsum sit tellus
            urna, faucibus aenean lorem faucibus integer.
					</p>
					<a
						href="#"
						className="text-blue-500 hover:text-blue-600 font-semibold inline-flex items-center gap-2"
					>
            Explore teachers and students →
					</a>
				</div>
			</div>
		</section>
	);
}
