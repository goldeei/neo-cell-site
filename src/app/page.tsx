"use client";

import { LandingVid } from "@/components/landing-vid";
import { NavBar } from "@/components/nav-bar";
import { ActiveLinkContext } from "@/context/ActiveLinkContext";
import { SectionIdOptions } from "@/types";
import { useEffect, useState } from "react";

import About from "./about";
import LandingPage from "./landing-page";
import Team from "./team";
import Technology from "./technology";

export default function Home() {
	const [activeLink, setActiveLink] = useState<SectionIdOptions>("");

	useEffect(() => {
		console.log(activeLink);
	}, [activeLink]);

	return (
		<div className="">
			<ActiveLinkContext.Provider value={[activeLink, setActiveLink]}>
				<NavBar />
				<LandingVid />
				<LandingPage />
				<About />
				<Technology />
				<Team />
			</ActiveLinkContext.Provider>
		</div>
	);
}
