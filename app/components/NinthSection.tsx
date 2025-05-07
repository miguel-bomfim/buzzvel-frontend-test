import React from 'react'

export default function NinthSection() {
	return (
		<section className="bg-orange-500 text-white py-16 px-6 text-center">
			<div className="max-w-xl mx-auto space-y-6">
				<h2 className="text-2xl md:text-4xl font-bold">Ready for your next project?</h2>
				<p className="text-white/80 text-base md:text-lg">
          Sit elit feugiat turpis sed integer integer accumsan turpis.
				</p>

				<form className="space-y-4">
					<div className="text-left">
						<label htmlFor="email" className="block mb-1 font-medium text-white">Email</label>
						<input
							type="email"
							id="email"
							placeholder="Enter your email"
							className="w-full px-4 py-2 rounded-md text-black focus:outline-none bg-white"
						/>
					</div>

					<div className="text-left">
						<label htmlFor="message" className="block mb-1 font-medium text-white">Message</label>
						<textarea
							id="message"
							rows={3}
							placeholder="What are you say ?"
							className="w-full px-4 py-2 rounded-md text-black focus:outline-none bg-white"
						/>
					</div>

					<button
						type="submit"
						className="bg-[#0B0D21] text-white font-semibold px-6 py-2 rounded-md hover:bg-gray-900"
					>
            Request Demo
					</button>
				</form>
			</div>
		</section>
	);
}
