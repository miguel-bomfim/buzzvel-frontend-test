import React from 'react'

export default function EighthSection() {
	return (
		<section className="relative bg-yellow-400 py-20 px-6 overflow-hidden">
			{/* Floating avatars - LEFT */}
			<div className="absolute inset-y-0 left-0 flex flex-col items-start gap-4 pl-4">
				<img src="/assets/avatar1.png" alt="avatar" className="w-10 h-10 rounded-full" />
				<img src="/assets/avatar2.png" alt="avatar" className="w-14 h-14 rounded-full mt-10" />
				<img src="/assets/avatar3.png" alt="avatar" className="w-24 h-24 rounded-full mt-20" />
				<img src="/assets/avatar4.png" alt="avatar" className="w-8 h-8 rounded-full mt-8" />
			</div>

			{/* Floating avatars - RIGHT */}
			<div className="absolute inset-y-0 right-0 flex flex-col items-end gap-4 pr-4">
				<img src="/assets/avatar5.png" alt="avatar" className="w-14 h-14 rounded-full" />
				<img src="/assets/avatar6.png" alt="avatar" className="w-10 h-10 rounded-full mt-10" />
				<img src="/assets/avatar7.png" alt="avatar" className="w-16 h-16 rounded-full mt-20" />
				<img src="/assets/avatar8.png" alt="avatar" className="w-8 h-8 rounded-full mt-8" />
			</div>

			{/* Centered Content */}
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
