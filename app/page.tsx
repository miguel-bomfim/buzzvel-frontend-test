import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";
import FifthSection from "./components/FifthSection";
import SixthSection from './components/SixthSection'
import SeventhSection from "./components/SeventhSection";
import EighthSection from "./components/EighthSection";
import NinthSection from "./components/NinthSection";

export default function Home() {
	return (
		<main className="overflow-y-hidden">
			<FirstSection />
			<SecondSection />
			<ThirdSection />
			<FourthSection />
			<FifthSection />
			<SixthSection />
			<SeventhSection />
			<EighthSection />
			<NinthSection />
		</main>
	);
}
