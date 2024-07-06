"use client";

import { H2, H3 } from "@/components/Header";
import { Section } from "@/components/section";

const Technology = () => {
	return (
		<Section
			id="technology"
			className="h-fit min-h-svh flex items-center page-gradient__flipped"
		>
			<div className="h-full grid grid-cols-1 gap-y-12 gap-x-12 md:grid-cols-6 items-center">
				<div className="flex flex-col md:col-span-3">
					<H2 className="mb-6 font-medium">Technology</H2>
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
					<H3>Blurb 1</H3>
					<div className="text-lg">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
						quae ab doloribus dolores ad quis expedita temporibus nesciunt
						nostrum, accusamus sapiente sequi laborum, cumque commodi nemo.
						Accusamus dolor harum labore.
					</div>
				</div>
				<div className="md:col-span-2 flex flex-col gap-3">
					<H3 className="text-xl">Blurb 2</H3>
					<div className="text-lg">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
						quae ab doloribus dolores ad quis expedita temporibus nesciunt
						nostrum, accusamus sapiente sequi laborum, cumque commodi nemo.
						Accusamus dolor harum labore.
					</div>
				</div>
				<div className="md:col-span-2 flex flex-col gap-3">
					<H3 className="text-xl">Blurb 3</H3>
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
