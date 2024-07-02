import { HexagonInfo } from "@/components/HexagonInfo";
import { Section } from "@/components/section";
import {
	faDna,
	faFlask,
	faMicroscope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
	return (
		<Section id="about" className="page-gradient">
			<div className="h-full gap-20 flex flex-col justify-center lg:justify-between lg:items-around lg:grid lg:gap-auto lg:grid-cols-6 lg:grid-rows-1">
				<div className="gap-6 lg:col-span-4 flex flex-col justify-center lg:gap-12">
					<div className="text-header-blue-500 text-3xl md:text-5xl xl:text-6xl leading-tight font-medium tracking-tight">
						Revolutionizing Cell Therapy Monitoring & Analysis
					</div>
					<div className="text-lg sm:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl flex flex-col gap-6 font-light leading-snug">
						<div>
							By leveraging PET reporter technology, our innovative approach
							enables early detection of low efficacy or high toxicity
							throughout clinical development and patient treatment. PET-CT
							scans help proactively identify challenges and provide crucial
							insights to guide the development of safer and more effective
							treatments.
						</div>
						<div>
							Through precise monitoring and analysis, we empower healthcare
							professionals and researchers with the knowledge needed to make
							informed clinical decisions, ultimately advancing the field of
							medical research and enhancing patient outcomes.
						</div>
					</div>
				</div>
				<div className="col-span-2 flex justify-center items-center lg:justify-end">
					<div className="max-w-[600px] lg:w-3/4 lg:max-w-[276px] items-center grid gap-4 grid-cols-3 lg:grid-cols-1 lg:grid-rows-3 lg:col-start-6">
						<div className=" lg:-translate-x-1/2 lg:translate-y-1/4">
							<HexagonInfo
								icon={
									<FontAwesomeIcon
										icon={faMicroscope}
										className="w-full h-full"
									/>
								}
							/>
						</div>
						<div>
							<HexagonInfo
								icon={
									<FontAwesomeIcon icon={faDna} className="w-full h-full" />
								}
							/>
						</div>
						<div className=" lg:-translate-x-1/2 lg:-translate-y-1/4">
							<HexagonInfo
								icon={
									<FontAwesomeIcon icon={faFlask} className="w-full h-full" />
								}
							/>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default About;
