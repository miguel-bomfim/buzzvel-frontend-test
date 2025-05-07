export default function FifthSection() {
	return (
		<section className="w-full bg-[#0A1128] py-16">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-center items-center md:justify-around gap-12 md:gap-8">
					{/* User Countries Stat */}
					<div className="flex flex-col items-center">
						<div className="w-12 h-12 rounded-full bg-[#0A1128] flex items-center justify-center mb-4">
							{/* <Heart className="w-8 h-8 text-[#FFCB05] fill-[#FFCB05]" /> */}
						</div>
						<h2 className="text-[#FFCB05] text-5xl md:text-6xl font-bold mb-2">195</h2>
						<p className="text-[#FFCB05] text-lg">user countries</p>
					</div>

					{/* Valued Teachers Stat */}
					<div className="flex flex-col items-center">
						<div className="w-12 h-12 rounded-full bg-[#0A1128] flex items-center justify-center mb-4">
							<DiamondIcon className="w-8 h-8 text-[#FFCB05]" />
						</div>
						<h2 className="text-[#FFCB05] text-5xl md:text-6xl font-bold mb-2">1M</h2>
						<p className="text-[#FFCB05] text-lg">valued teachers</p>
					</div>

					{/* Happy Students Stat */}
					<div className="flex flex-col items-center">
						<div className="w-12 h-12 rounded-full bg-[#0A1128] flex items-center justify-center mb-4">
							{/* <GraduationCap className="w-8 h-8 text-[#FFCB05]" /> */}
						</div>
						<h2 className="text-[#FFCB05] text-5xl md:text-6xl font-bold mb-2">17M</h2>
						<p className="text-[#FFCB05] text-lg">happy students</p>
					</div>
				</div>
			</div>
		</section>
	)
}

// Custom Diamond Icon component since it's not available in Lucide
function DiamondIcon({ className }: { className?: string }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className={className}
		>
			<path d="M12 2L2 12L12 22L22 12L12 2Z" fill="currentColor" />
		</svg>
	)
}
