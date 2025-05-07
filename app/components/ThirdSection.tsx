import React from 'react'

export default function ThirdSection() {
	return (
		<section className="bg-yellow-400 py-16 relative overflow-hidden">
			<div className="container mx-auto px-6 md:flex md:items-center md:justify-between">
				{/* Left: Text Content */}
				<div className="md:w-1/2 z-10">
					<p className="text-black text-lg leading-relaxed mb-4">
            Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis
            phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.
					</p>
					<p className="text-black font-semibold">Marie Poirot,<br /><span className="font-normal">Bigapp</span></p>

					{/* Slider indicators */}
					<div className="mt-6 flex items-center gap-2">
						<span className="w-4 h-1 rounded-full bg-black"></span>
						<span className="w-2 h-1 rounded-full bg-white/60"></span>
						<span className="w-2 h-1 rounded-full bg-white/60"></span>
						<span className="w-2 h-1 rounded-full bg-white/60"></span>
					</div>
				</div>

				{/* Right: Image and blob shape */}
				<div className="mt-10 md:mt-0 md:w-1/2 relative flex items-center justify-center">
					{/* Background blob */}
					<div className="absolute w-64 h-64 bg-[#0B0D21] rounded-[40%] rotate-[30deg] -z-10" />

					{/* Image */}
					<div className="relative w-60 h-60 rounded-xl overflow-hidden border-4 border-white shadow-lg">
						<img
							src="/assets/testimonial-person.png"
							alt="Marie Poirot smiling"
							className="w-full h-full object-cover"
						/>

						{/* Chat icon */}
						<div className="absolute top-2 right-2 bg-yellow-400 p-1.5 rounded-full shadow">
							<svg
								className="w-5 h-5 text-black"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path d="M18 13a1 1 0 01-1 1h-1v3l-3-3H4a1 1 0 01-1-1V5a1 1 0 011-1h13a1 1 0 011 1v8z" />
							</svg>
						</div>

						{/* Dotted pattern (for decoration only) */}
						<div className="absolute bottom-2 left-2 grid grid-cols-6 gap-1">
							{Array.from({ length: 24 }).map((_, i) => (
								<div key={i} className="w-1 h-1 bg-white/50 rounded-full" />
							))}
						</div>
					</div>

					{/* Arrows (not functional yet) */}
					<button className="absolute left-0 -translate-x-full text-black text-2xl font-bold">{'<'}</button>
					<button className="absolute right-0 translate-x-full text-black text-2xl font-bold">{'>'}</button>
				</div>
			</div>
		</section>
	);
}
