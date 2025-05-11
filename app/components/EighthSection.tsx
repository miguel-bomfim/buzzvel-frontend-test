import React from 'react'
import Image from 'next/image'
import cardsLeft from '@/app/assets/cardLeft.png'
import cardsRight from '@/app/assets/cardsRight.png'

export default function EighthSection() {
	return (
		<section className="relative bg-yellow-400 py-20 px-6 overflow-hidden">
			<div className="absolute inset-y-0 left-0 flex flex-col items-start gap-4 pl-4">
				<Image src={cardsLeft} alt=''/>
			</div>
			<div className="absolute inset-y-0 right-0 flex flex-col items-end gap-4 pr-4">
				<Image src={cardsRight} alt=''/>
			</div>

			<div className="relative max-w-2xl mx-auto text-center z-10">
				<h1 className="text-3xl md:text-5xl font-bold text-[#0B0D21]">Join a world of learning</h1>
				<p className="mt-4 text-[#0B0D21]/80">
          Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. <br />
          Risus elit et fringilla habitant ut facilisi.
				</p>
				<button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-md">
          Sign Up Now
				</button>
			</div>
		</section>
	);
}
