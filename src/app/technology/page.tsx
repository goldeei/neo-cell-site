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
		<motion.section id="technology" className="page-gradient flex items-center">
			<div className="max-w-svw flex items-center overflow-hidden">
				<div className="flex-1 flex flex-col gap-12">
					<div className="text-6xl text-header-blue-500">TECHNOLOGY</div>
					<div className="text-3xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
						ratione quos numquam impedit non quis. Assumenda molestias
						doloremque officiis dolores quasi nam itaque quae perspiciatis
						consectetur deleniti tempore, quam neque. Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Quod ratione quos numquam impedit non
						quis. Assumenda molestias doloremque officiis dolores quasi nam
						itaque quae perspiciatis consectetur deleniti tempore, quam neque.
					</div>
				</div>

				<div className="flex-1 flex justify-center">
					<SvgHexCells />
				</div>
			</div>
		</motion.section>
	);
};
