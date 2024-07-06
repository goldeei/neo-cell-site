interface TeamMemberProps {
	image: string;
	role: string;
	name: string;
}

export const TeamMember = ({ image, role, name }: TeamMemberProps) => {
	return (
		<div className="h-full w-full max-h-[600px] flex flex-col place-self-center border border-white/40 bg-gradient-to-b from-white/40 to-white/20 backdrop-blur-sm p-12 shadow-xl rounded-lg">
			<div className="w-full h-full flex justify-center">
				<img
					src={image}
					alt=""
					className="object-cover w-full h-full max-w-[300px] max-h-[500px] rounded shadow border border-black/10"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<div className="w-full text-center font-semibold text-2xl">{name}</div>
				<div className="w-full text-center">{role}</div>
			</div>
		</div>
	);
};
