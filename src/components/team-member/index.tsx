import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TeamMemberProps {
	image: string;
	role: string;
	name: string;
}

export const TeamMember = ({ image, role, name }: TeamMemberProps) => {
	return (
		<div className="h-fit w-full max-w-[400px] flex flex-col place-self-center border border-white/40 bg-gradient-to-b from-white/40 to-white/20 backdrop-blur-sm px-6 py-12 shadow-xl rounded-lg">
			<div className="w-full h-full flex justify-center">
				<img
					src={image}
					alt=""
					className="object-cover w-full h-full rounded shadow border border-black/10"
				/>
			</div>
			<div className=" flex flex-col gap-2">
				<div>
					<div className="w-full text-center font-semibold text-2xl">
						{name}
					</div>
				</div>
				<div className="w-full text-center">{role}</div>
				<div className="py-1 px-2 rounded bg-[#0072b1] w-fit h-fit">
					<FontAwesomeIcon icon={faLinkedinIn} color="white" />
				</div>
			</div>
		</div>
	);
};
