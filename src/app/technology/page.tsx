"use client";

import { H2, H3 } from "@/components/Header";
import { Section } from "@/components/section";
import Image from "next/image";

const Technology = () => {
	return (
		<Section
			id="technology"
			className="flex items-center"
			bgColor="page-gradient__flipped"
		>
			<div className="h-full grid grid-cols-1 gap-y-12 gap-x-12 md:grid-cols-2 items-center">
				<div className="flex flex-col">
					<H2 className="mb-6 font-medium">Technology</H2>
					<div className="flex flex-col gap-3 text-2xl">
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
				<Image
					src="/LabTests.jpg"
					alt=""
					className="rounded h-auto w-full max-w-[600px] md:col-span-1 mx-auto"
				/>
				<div className="col-span-full">
					<H2 className="mb-6 font-medium">Benefits</H2>
					<div className=" grid grid-cols-1 md:grid-cols-3 gap-12">
						<div className="flex flex-col gap-3">
							<H3>Intelligence & Data</H3>
							<div className="text-2xl">
								Researchers will gain access to a{" "}
								<strong>new data source </strong>
								that will help inform the next generation of therapies. This low
								noise approach generates easy-to-interpret results with high
								level of accuracy. This non-invasive method enables physicians
								to effectively treat and monitor patient populations where other
								methods (e.g., serial biopsies) are not ethical or possible
							</div>
						</div>
						<div className="flex flex-col gap-3">
							<H3>Finance & Operations</H3>
							<div className="text-2xl">
								Researchers and pharmaceutical companies will be able to reduce
								the cost and time allocated to unsuccessful trials, freeing
								company resources to be allocated to successful therapies abd
								accelerating the timeline to generate revenue.
							</div>
						</div>
						<div className="flex flex-col gap-3">
							<H3>Clinical Efficacy & Patient Safety</H3>
							<div className="text-2xl">
								High level of immune tolerance enables therapies to avoid
								stimulating a response that would destroy the therapeutic cells
								before they reach the tumor Physicians will be able to temper
								treatment, monitor patients, and employ any toxicity mitigation
								strategies in a timely manner Fewer patients will suffer from
								severe toxicity
							</div>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default Technology;
