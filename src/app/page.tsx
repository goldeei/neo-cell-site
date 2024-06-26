import { About } from './about';
import { LandingPage } from './landing-page';
import { Technology } from './technology';

export default function Home() {
	return (
		<div className="">
			<LandingPage />
			<Technology />
			<About />
		</div>
	);
}
