import { Section } from "@/components/section";
import { TeamMember } from "@/components/team-member";

const Team = () => {
	return (
		<Section
			id="meet-the-team"
			className="h-full w-full grid grid-cols-1 lg:grid-cols-3 items-center bg-[#A0C8EE] gap-24"
		>
			<TeamMember
				image="/YanivHeadshot.png"
				name="Dr. Yaniv Tivon"
				role="Founder and Principle Investigator"
			/>
			<TeamMember
				image="/GilbertHeadshot.png"
				role="CFO"
				name="Gilbert Brook"
			/>
			<TeamMember
				image="/JasonLohmueller.png"
				role="Advisor"
				name="Jason Lohmueller"
			/>
		</Section>
	);
};

export default Team;
