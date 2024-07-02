"use client";

import { Section } from "@/components/section";
import SvgHexCells from "@/components/svg-components/HexCells";
import cn from "@/utilities/cn";
import { motion } from "framer-motion";

const Technology = () => {
	return (
		<Section
			id="technology"
			className="h-fit min-h-svh flex items-center page-gradient__flipped"
		>
			<div className="grid grid-cols-1 gap-12 md:grid-cols-6 items-center">
				<div className="flex flex-col md:col-span-3">
					<div className="mb-6 text-3xl text-header-blue-500">
						SCIENCE HEADER
					</div>
					<div className="flex flex-col gap-3 text-xl">
						<div>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Dignissimos vel reiciendis aliquid molestias quas, quos, sit quo
							error eaque nesciunt hic veritatis porro beatae accusantium
							accusamus, incidunt quaerat maiores iure.
						</div>
						<div>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Dignissimos vel reiciendis aliquid molestias quas, quos, sit quo
							error eaque nesciunt hic veritatis porro beatae accusantium
							accusamus, incidunt quaerat maiores iure.
						</div>
					</div>
				</div>
				<img
					src="/LabTests.jpg"
					alt=""
					className="rounded h-auto w-full max-w-[600px] md:col-span-3 mx-auto"
				/>
				<div className="md:col-span-2 flex flex-col gap-3">
					<div className="text-xl">BLURB 1</div>
					<div className="text-lg">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
						quae ab doloribus dolores ad quis expedita temporibus nesciunt
						nostrum, accusamus sapiente sequi laborum, cumque commodi nemo.
						Accusamus dolor harum labore.
					</div>
				</div>
				<div className="md:col-span-2 flex flex-col gap-3">
					<div className="text-xl">BLURB 1</div>
					<div className="text-lg">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
						quae ab doloribus dolores ad quis expedita temporibus nesciunt
						nostrum, accusamus sapiente sequi laborum, cumque commodi nemo.
						Accusamus dolor harum labore.
					</div>
				</div>
				<div className="md:col-span-2 flex flex-col gap-3">
					<div className="text-xl">BLURB 1</div>
					<div className="text-lg">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
						quae ab doloribus dolores ad quis expedita temporibus nesciunt
						nostrum, accusamus sapiente sequi laborum, cumque commodi nemo.
						Accusamus dolor harum labore.
					</div>
				</div>
			</div>
		</Section>
	);
};

export default Technology;
