"use client";

import SvgHexCells from '@/components/svg-components/HexCells';
import cn from '@/utilities/cn';
import { motion } from 'framer-motion';

const Hexagon = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className: string;
}) => {
	return (
		<div
			className={cn(
				"bg-blue-500 h-[325px] w-[400px] inner-hex-clip flex justify-center items-center",
				className
			)}
		>
			{children}
		</div>
	);
};

export const Technology = () => {
	return (
		<motion.section id="technology" className=" flex justify-around">
			<div className="max-w-svw flex flex-col  justify-around"></div>
		</motion.section>
	);
};
