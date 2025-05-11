"use client"

import Image, { StaticImageData } from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useIsMobile } from '@/app/hooks/useIsMobile'

import user1 from '@/app/assets/user-1.jpg'
import user2 from '@/app/assets/user-2.jpg'
import user3 from '@/app/assets/user-3.jpg'
import user4 from '@/app/assets/user-4.jpg'
import user5 from '@/app/assets/user-5.jpg'

type Testimonial = {
  name: string
  role: string
  content: string
  image: StaticImageData
}

export default function SixthSection() {
	const isMobile = useIsMobile()

	const testimonials: Testimonial[] = [
		{
			name: "Hellen Jumny",
			role: "Financial Counselor",
			content:
        "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
			image: user1,
		},
		{
			name: "Ralph Edwards",
			role: "Math Teacher",
			content:
        "Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.",
			image: user2,
		},
		{
			name: "Hellena John",
			role: "Psychology Student",
			content:
        "Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisi donec a.",
			image: user3,
		},
		{
			name: "Michael Smith",
			role: "Software Engineer",
			content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.",
			image: user4,
		},
		{
			name: "Sarah Johnson",
			role: "Marketing Director",
			content:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
			image: user5,
		},
	]


	return (
		<section className="w-full py-16 px-4 md:px-8 bg-white overflow-x-hidden">
			<div className="max-w-7xl mx-auto">
				<div className="flex justify-between items-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-[#0A1128]">What everyone says</h2>
					<div className="hidden md:flex gap-2">
						<button
							className="after:hidden px-4 static! swiper-button-prev w-10 h-10 rounded-full border border-[#F97316] flex items-center justify-center text-[#F97316] hover:bg-[#F97316] hover:text-white transition-colors"
							aria-label="Previous testimonials"
						>
							{'<'}
						</button>
						<button
							className="after:hidden static! px-4 swiper-button-next w-10 h-10 rounded-full border border-[#F97316] flex items-center justify-center text-[#F97316] hover:bg-[#F97316] hover:text-white transition-colors"
							aria-label="Next testimonials"
						>
							{'>'}
						</button>
					</div>
				</div>
				<Swiper spaceBetween={16} slidesPerView={isMobile ? 1 : 3} navigation={{prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }} modules={[Navigation]} className="mySwiper overflow-visible!">
						{testimonials.map((testimonial, index) => (
							<SwiperSlide
								key={index}
							>
								<div className="bg-gray-50 p-6 rounded-lg border border-gray-100 max-w-[412px]">
									<p className="text-gray-700 mb-6 h-[150px] overflow-hidden">{testimonial.content}</p>
									<div className="flex items-center">
										<div className="w-12 h-12 rounded-full overflow-hidden mr-4">
											<Image
												src={testimonial.image}
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
							</SwiperSlide>
						))}
				</Swiper>
			</div>
		</section>
	)
}
