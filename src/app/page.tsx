import { LandingVid } from '@/components/landing-vid';
import { NavBar } from '@/components/nav-bar';

import { About } from './about';
import { LandingPage } from './landing-page';
import { Technology } from './technology';

export default function Home() {
	return (
		<div className="">
			<NavBar />
			<LandingVid />
			<LandingPage />
			<Technology />
			<About />
		</div>
	);
}
