'use client'

import React from 'react'
import Image from 'next/image'
import imageSection from '@/app/assets/thirdSectionPic.jpg'
import gptMe from '@/app/assets/chatGptMe.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useIsMobile } from '@/app/hooks/useIsMobile'


export default function ThirdSection() {
		const isMobile = useIsMobile()
	
	const slidesContet = [
		{
			testimony: "Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.",
			name: 'Marie Poirot',
			company: 'Bigapp',
			picture : imageSection
		} ,
		{
			testimony: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem odit, suscipit enim, in perferendis tempore ab consequatur inventore sapiente natus nesciunt ad modi. Asperiores nesciunt nulla quam deleniti sed voluptatem.",
			name: 'Miguel BomfiM',
			company: 'Buzzvel ( i hope :D )',
			picture : gptMe
		}
	]

	return (	
		<Swiper
			slidesPerView={1}
			navigation={!isMobile && true}
			modules={[Navigation, Pagination]}
			pagination={{enabled: true, clickable: true}}
			className="bg-yellow-400 py-16 relative mySwiper overflow-visible!"
		>
			{
				slidesContet.map((slide, idx) => {
					return (
						<SwiperSlide key={idx} className="flex! max-md:flex-col p-4 items-center max-md:w-full gap-20 md:px-22!">
							{/* Left: Text Content */}
							<div className="md:w-1/2 z-10">
								<p className="text-black text-lg leading-relaxed mb-4">
									{slide.testimony}
								</p>
								<p className="text-black font-semibold">{slide.name},<br /><span className="font-normal">{slide.company}</span></p>
							</div>

							{/* Right: Image and blob shape */}
							<div className="mt-10 relative flex items-center justify-center">
								{/* Background blob */}
								<span className="absolute md:w-[495.63px] md:h-[573.11px]  bg-[#0B0D21] rounded-[50px] -rotate-[30deg] w-[300px] h-[350px]" />

								{/* Image */}
								<div className="relative overflow-hidden">
									<Image
										src={slide.picture}
										alt="Marie Poirot smiling"
										className="aspect-square object-cover md:w-[528px] md:h-[415px] w-[361px] h-[294px] rotate-y-180 rounded-3xl border-[3px] border-black"
									/>

									{/* Dotted pattern (for decoration only) */}
									<div className="absolute bottom-2 left-2 grid grid-cols-6 gap-1">
										{Array.from({ length: 24 }).map((_, i) => (
											<div key={i} className="w-1 h-1 bg-white/50 rounded-full" />
										))}
									</div>
								</div>
							</div>
						</SwiperSlide>
					)
				})
			}
		</Swiper>
	);
}
