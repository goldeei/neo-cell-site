"use client";

import { H1 } from "@/components/Header";
import { Section } from "@/components/section";
import { TeamMember } from "@/components/team-member";

const Team = () => {
	return (
		<Section
			id="meet-the-team"
			bgColor="bg-sky-50"
			className="flex flex-col justify-center gap-12"
		>
			<H1 className="text-center lg:text-start">Meet The Team</H1>
			<div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12">
				<TeamMember
					image="/YanivHeadshot.png"
					name="Dr. Yaniv Tivon"
					role="Founder and Principle Investigator"
					linkedInUrl="https://www.linkedin.com/in/yanivtivon/"
				/>
				<TeamMember
					image="/GilbertHeadshot.png"
					role="CFO"
					name="Gilbert Brook"
					linkedInUrl="https://www.linkedin.com/in/gilbert-brook-a11353169/"
				/>
				<TeamMember
					image="/JasonLohmueller.png"
					role="Advisor"
					name="Jason Lohmueller"
					linkedInUrl="https://www.linkedin.com/in/jason-lohmueller-1663b551/"
				/>
			</div>
		</Section>
	);
};

export default Team;
