import HeartIcon from "./svg/HeartIcon"
import DiamondIcon from "./svg/DiamondIcon"
import GraduationCap from "./svg/GraduationCap"

export default function FifthSection() {
	return (
		<section className="w-full bg-[#0A1128] py-16">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-center items-center md:justify-around gap-12 md:gap-8">
					{/* User Countries Stat */}
					<div className="flex flex-col items-center md:gap-4 gap-1">
							<HeartIcon className="w-14 h-14" />
						<h2 className="text-[#FFCB05] text-5xl md:text-6xl font-bold mb-2">195</h2>
						<p className="text-[#FFCB05] text-lg">user countries</p>
					</div>

					{/* Valued Teachers Stat */}
					<div className="flex flex-col items-center md:gap-4 gap-1">
						<DiamondIcon className="w-14 h14" />
						<h2 className="text-[#FFCB05] text-5xl md:text-6xl font-bold mb-2">1M</h2>
						<p className="text-[#FFCB05] text-lg">valued teachers</p>
					</div>

					{/* Happy Students Stat */}
					<div className="flex flex-col items-center md:gap-4 gap-1">
							<GraduationCap className="w-14 h14" />
						<h2 className="text-[#FFCB05] text-5xl md:text-6xl font-bold mb-2">17M</h2>
						<p className="text-[#FFCB05] text-lg">happy students</p>
					</div>
				</div>
			</div>
		</section>
	)
}

