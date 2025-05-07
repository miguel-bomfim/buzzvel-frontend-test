import React from 'react'
import Image from "next/image";
import firstSectionAssets from "@/app/assets/first-section-chat-asset.png";
import OrangeUnderline from "./svg/OrangeUnderline";
import LeadingCompany1 from "./svg/LeadingCompany1";
import LeadingCompany2 from "./svg/LeadingCompany2";
import LeadingCompany3 from "./svg/LeadingCompany3";
import LeadingCompany4 from "./svg/LeadingCompany4";
import LeadingCompany5 from "./svg/LeadingCompany5";
import ViewDemoIcon from "./svg/ViewDemoIcon";


export default function FirstSection() {
	const leadingCompanies = [
		<LeadingCompany1 key={0} />,
		<LeadingCompany2 key={1} />,
		<LeadingCompany3 key={2} />,
		<LeadingCompany4 key={3} />,
		<LeadingCompany5 key={4} />,
	];

	return (
		<section className="flex gap-12 flex-col md:grid md:grid-cols-2 py-12 px-4 md:px-20 items-center font-sans"> 
			<div className="flex flex-col gap-8 md:gap-20">
				<div className="flex flex-col md:gap-8 gap-6">
					<h1 className="text-[40px] md:text-7xl font-bold leading-none">
						<span className="relative">
							<span className="relative z-10">Teach&nbsp;</span>
							<OrangeUnderline className="absolute top-[70%] w-full px-2 z-0" />
						</span>
              students <br className="hidden md:block"/> worldwide
					</h1>
					<p className="max-w-[55ch]">
              Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin
              massa tincidunt viverra lectus pulvinar. Nunc ipsum est
              pellentesque turpis ultricies.
					</p>
					<div className="flex gap-6 items-center">
						<button className="md:text-lg cursor-pointer py-3 md:px-8 px-6 bg-orange-500 text-white rounded-lg hover:bg-orange-600">Sign Up Now</button>
						<button className="cursor-pointer flex gap-4 text-blue-600 hover:opacity-75 items-center">
							<ViewDemoIcon />
                View Demo
						</button>
					</div>
				</div>

				<div className="flex flex-col md:flex-row gap-4 md:gap-12 md:items-center text-gray-600">
					<span>Trusted by <br className="hidden md:block"/> leading companies</span>
					<ul className="flex gap-6">
						{leadingCompanies.map((logo) => logo)}
					</ul>
				</div>
			</div>

			<Image className="md:justify-self-center" alt="" src={firstSectionAssets} />
		</section>
	)
}
