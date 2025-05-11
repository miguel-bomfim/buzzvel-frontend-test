import React from 'react'
import Image from 'next/image'

import forthSectionGrid from '@/app/assets/forthSectionGrid.png'
import FourthSectionAirPlane from './svg/FourthSectionAirPlane';

export default function FourthSection() {
	return (
		<section className="py-16 bg-white">
			<div className="container mx-auto px-6 md:flex md:items-center md:justify-between max-md gap-10 md:flex-row-reverse">

				<div className="mt-10 md:mt-0 md:w-1/2">
					<h2 className="text-2xl md:text-6xl font-bold leading-none">
						 Meet internatio
						<span className="inline-block relative">
							<FourthSectionAirPlane className="md:relative absolute bottom-0 md:-bottom-5 w-full" />
							<span className="relative z-10">na</span>
						</span>
						l students & teachers
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
        
				<div className="">
					<Image width={600} src={forthSectionGrid} alt="" />
				</div>
			</div>
		</section>
	);
}
