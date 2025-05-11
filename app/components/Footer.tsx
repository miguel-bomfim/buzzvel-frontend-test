import Logo from '@/app/components/svg/Logo'

export default function Footer() {
	return (
		<footer className="bg-[#0B0D21] text-white text-sm">
			<div className="max-w-7xl mx-auto flex flex-col px-6 py-10 md:grid md:grid-cols-5 gap-8 border-b border-gray-700">
				<div>
					<h2 className="text-xl font-bold mb-4"><Logo/></h2>
				</div>

				<div>
					<h3 className="font-semibold mb-3">Product</h3>
					<ul className="space-y-2">
						<li>Pricing</li>
						<li>Overview</li>
						<li>Browse</li>
						<li className="flex items-center gap-2">
              Accessibility <span className="text-xs bg-purple-600 px-2 py-0.5 rounded">BETA</span>
						</li>
					</ul>
				</div>

				<div>
					<h3 className="font-semibold mb-3">Solutions</h3>
					<ul className="space-y-2">
						<li>Brainstorming</li>
						<li>Ideation</li>
						<li>Wireframing</li>
						<li>Research</li>
					</ul>
				</div>

				<div>
					<h3 className="font-semibold mb-3">Resources</h3>
					<ul className="space-y-2">
						<li>Help Center</li>
						<li>Blog</li>
						<li>Tutorials</li>
						<li>FAQs</li>
					</ul>
				</div>

				<div>
					<h3 className="font-semibold mb-3">Support</h3>
					<ul className="space-y-2">
						<li>Contact Us</li>
						<li>Developers</li>
						<li>Documentation</li>
						<li>Integrations</li>
					</ul>
				</div>

				<div className="md:col-span-2">
					<h3 className="font-semibold mb-3">Company</h3>
					<ul className="space-y-2">
						<li>About</li>
						<li>Press</li>
						<li>Events</li>
						<li className="flex items-center justify-between">
              Request Demo <span>→</span>
						</li>
					</ul>
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs">
				<p>uteach © 2023. All rights reserved.</p>
				<div className="flex items-center gap-6 mt-4 md:mt-0">
					<a href="#">Terms</a>
					<a href="#">Privacy</a>
					<a href="#">Contact</a>
					<span>EN</span>
					<span>EUR</span>
				</div>
			</div>
		</footer>
	);
}
