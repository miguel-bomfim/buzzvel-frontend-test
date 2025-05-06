import Image from 'next/image'
import firstSectionAssets from '@/app/assets/first-section-chat-asset.png'
import OrangeUnderline from './components/svg/OrangeUnderline';
import LeadingCompany1 from './components/svg/LeadingCompany1';
import LeadingCompany2 from './components/svg/LeadingCompany2';
import LeadingCompany3 from './components/svg/LeadingCompany3';
import LeadingCompany4 from './components/svg/LeadingCompany4';
import LeadingCompany5 from './components/svg/LeadingCompany5';


export default function Home() {
	const logos = [
		<LeadingCompany1 key={0} />,
		<LeadingCompany2 key={1} />,
		<LeadingCompany3 key={2} />,
		<LeadingCompany4 key={3} />,
		<LeadingCompany5 key={4} />,
	]


	return (
		<main>
			<section className='py-12 px-4'>
				<div>
					<div>
						<h1 className='font-sans text-[40px] md:text-7xl font-extrabold'>
							<span className="relative">
								<span className="relative z-10">Teach&nbsp;</span>
								<OrangeUnderline className="absolute top-[70%] w-full px-2 z-0" />
							</span>
							students worldwide
						</h1>
						<p>Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies.</p>
						<div>
							<button>Sign Up Now</button>
							<button>View Demo</button>
						</div>
					</div>

					<div>
						<ul className='flex gap-6'>
							{
								logos.map((logo)=> logo)
							}
						</ul>
					</div>
				</div>

				<div>
					<Image alt="" src={firstSectionAssets}/>
				</div>

			</section>
		</main>
	);
}
