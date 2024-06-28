interface HexagonInfoProps {
	icon: React.ReactNode;
}

export const HexagonInfo = ({ icon }: HexagonInfoProps) => {
	return (
		<div className="relative">
			<img src="/Hexagon.png" alt="" className="w-full h-auto aspect-auto" />
			<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sky-50">
				{icon}
			</div>
		</div>
	);
};
