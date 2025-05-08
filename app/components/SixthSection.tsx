"use client"

import { useState, useRef } from "react"
import Image from "next/image"

type Testimonial = {
  id: number
  name: string
  role: string
  content: string
  image: string
}

export default function SixthSection() {
	const testimonials: Testimonial[] = [
		{
			id: 1,
			name: "Hellen Jumny",
			role: "Financial Counselor",
			content:
        "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
			image: "/placeholder.svg?height=60&width=60",
		},
		{
			id: 2,
			name: "Ralph Edwards",
			role: "Math Teacher",
			content:
        "Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.",
			image: "/placeholder.svg?height=60&width=60",
		},
		{
			id: 3,
			name: "Hellena John",
			role: "Psychology Student",
			content:
        "Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisi donec a.",
			image: "/placeholder.svg?height=60&width=60",
		},
		{
			id: 4,
			name: "Michael Smith",
			role: "Software Engineer",
			content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.",
			image: "/placeholder.svg?height=60&width=60",
		},
		{
			id: 5,
			name: "Sarah Johnson",
			role: "Marketing Director",
			content:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
			image: "/placeholder.svg?height=60&width=60",
		},
	]

	const [currentIndex, setCurrentIndex] = useState(0)
	const [isAnimating, setIsAnimating] = useState(false)
	const carouselRef = useRef<HTMLDivElement>(null)

	const goToPrevious = () => {
		if (isAnimating) return
		setIsAnimating(true)
		setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
		setTimeout(() => setIsAnimating(false), 500)
	}

	const goToNext = () => {
		if (isAnimating) return
		setIsAnimating(true)
		setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
		setTimeout(() => setIsAnimating(false), 500)
	}

	// Get all testimonials in the right order for the carousel
	return (
		<section className="w-full py-16 px-4 md:px-8 bg-white overflow-x-hidden">
			<div className="max-w-7xl mx-auto">
				<div className="flex justify-between items-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-[#0A1128]">What everyone says</h2>
					<div className="flex gap-2">
						<button
							onClick={goToPrevious}
							className="w-10 h-10 rounded-full border border-[#F97316] flex items-center justify-center text-[#F97316] hover:bg-[#F97316] hover:text-white transition-colors"
							aria-label="Previous testimonials"
							disabled={isAnimating}
						>
							<span>{'<'}</span>
						</button>
						<button
							onClick={goToNext}
							className="w-10 h-10 rounded-full border border-[#F97316] flex items-center justify-center text-[#F97316] hover:bg-[#F97316] hover:text-white transition-colors"
							aria-label="Next testimonials"
							disabled={isAnimating}
						>
							<span>{'>'}</span>
						</button>
					</div>
				</div>

				{/* Desktop Carousel with Peek Effect */}
				<div className="hidden md:block relative overflow-visible">
					<div
						ref={carouselRef}
						className="flex transition-transform duration-500 ease-in-out"
						style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
					>
						{testimonials.map((testimonial, index) => (
							<div
								key={testimonial.id}
								className="w-[31%] flex-shrink-0 px-3"
								style={{ marginRight: index === testimonials.length - 1 ? "0" : "2%" }}
							>
								<div className="bg-gray-50 p-6 rounded-lg border border-gray-100 h-full">
									<p className="text-gray-700 mb-6 h-[150px] overflow-hidden">{testimonial.content}</p>
									<div className="flex items-center">
										<div className="w-12 h-12 rounded-full overflow-hidden mr-4">
											<Image
												src={testimonial.image || "/placeholder.svg"}
												alt={testimonial.name}
												width={48}
												height={48}
												className="w-full h-full object-cover"
											/>
										</div>
										<div>
											<h4 className="font-medium text-[#0A1128]">{testimonial.name}</h4>
											<p className="text-gray-500 text-sm">{testimonial.role}</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Mobile Carousel */}
				<div className="md:hidden relative overflow-hidden">
					<div
						className="flex transition-transform duration-500 ease-in-out"
						style={{ transform: `translateX(-${currentIndex * 100}%)` }}
					>
						{testimonials.map((testimonial) => (
							<div key={testimonial.id} className="w-full flex-shrink-0 px-1">
								<div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
									<p className="text-gray-700 mb-6">{testimonial.content}</p>
									<div className="flex items-center">
										<div className="w-12 h-12 rounded-full overflow-hidden mr-4">
											<Image
												src={testimonial.image || "/placeholder.svg"}
												alt={testimonial.name}
												width={48}
												height={48}
												className="w-full h-full object-cover"
											/>
										</div>
										<div>
											<h4 className="font-medium text-[#0A1128]">{testimonial.name}</h4>
											<p className="text-gray-500 text-sm">{testimonial.role}</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
