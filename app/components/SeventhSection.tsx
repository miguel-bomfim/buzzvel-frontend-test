import React from 'react'
import OrangeUnderline from './svg/OrangeUnderline'
import Blob1 from './svg/Blob1'
import Image from 'next/image'
// import videoPreviewPhoto from '@/app/assets/videoPreviewPhoto.jpg';

export default function SeventhSection() {
	return (
		<section className="flex gap-12 flex-col md:grid md:grid-cols-2 py-12 px-4 md:px-20 items-center font-sans"> 
			<div className="flex flex-col gap-8 md:gap-20">
				<div className="flex flex-col md:gap-8 gap-6">
					<h2 className="text-2xl md:text-6xl font-bold leading-none">
            All the cool features&nbsp;
						<span className="md:inline-block relative">
							<span className="relative z-10">features&nbsp;</span>
							<OrangeUnderline className="md:relative absolute left-0 -bottom-2.5 md:-top-3 w-full scale-90 md:scale-x-125" />
						</span>
					</h2>
					<p className='md:hidden'>Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non viverra a, neque orci.</p>
					
					<button className="cursor-pointer flex gap-4 text-blue-600 hover:opacity-75 items-center">
            View all the features &#129106;
					</button>
				</div>
			</div>  

			<div className="relative">
				{/* Orange blob background */}
				<Blob1 className="absolute -left-20 top-0 w-64 h-64 z-0    md:block" />
        
				{/* Cards */}
				<div className="relative grid grid-cols-1 gap-4 md:grid-cols-2">
					{/* Main card */}
					<div className="col-span-2 bg-white rounded-lg shadow-md p-4 mb-4">
						<div className="flex flex-col md:flex-row gap-4">
							<div className="flex-1 space-y-3">
								<span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                      Popular
								</span>
								<h3 className="text-lg font-semibold">Design for how people think</h3>
								<p className="text-sm text-gray-600">
                      Aliquam ut euismod condimentum elementum ultricies volutpat sit non.
								</p>
								<button className="w-full md:w-auto px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                      Take Lesson
								</button>
							</div>
							<div className="flex-1">
								<div className="relative h-40 w-full rounded-lg overflow-hidden">
									<Image
										src="/placeholder.svg?height=160&width=240"
										alt="Person using a computer"
										fill
										className="object-cover"
									/>
								</div>
							</div>
						</div>
					</div>

					{/* Bottom left card */}
					<div className="bg-white rounded-lg shadow-md overflow-hidden">
						<div className="relative h-40 w-full">
							<Image
								src="/placeholder.svg?height=160&width=240"
								alt="Person working on a computer"
								fill
								className="object-cover"
							/>
						</div>
					</div>

					{/* Bottom right card */}
					<div className="bg-white rounded-lg shadow-md overflow-hidden">
						<div className="relative h-40 w-full">
							<Image
								src="/placeholder.svg?height=160&width=240"
								alt="Person working on a laptop"
								fill
								className="object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
