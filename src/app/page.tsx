"use client";

import { LandingVid } from "@/components/landing-vid";
import { NavBar } from "@/components/nav-bar";
import { ActiveLinkProvider } from "@/context/ActiveLinkProvider";

import About from "./about";
import LandingPage from "./landing-page";
import Team from "./team";
import Technology from "./technology";

export default function Home() {
	return (
		<div className="">
			<ActiveLinkProvider>
				<NavBar />
				<LandingVid />
				<LandingPage />
				<About />
				<Technology />
				<Team />
			</ActiveLinkProvider>
		</div>
	);
}
