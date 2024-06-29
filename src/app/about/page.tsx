import { HexagonInfo } from '@/components/HexagonInfo';
import BeakerIcon from '@/components/svg-components/Beaker';

const About = () => {
	return (
		<section id="about" className="page-gradient">
			{/* <div className="flex flex-col md:flex-row items-center justify-around gap-24"> */}
			<div className="flex flex-col justify-between lg:grid gap-auto lg:grid-cols-6 lg:grid-rows-1 items-center">
				<div className="gap-6 lg:col-span-4 flex flex-col lg:gap-12">
					<div className="text-header-blue-500 text-3xl md:text-6xl leading-tight font-medium tracking-tight">
						Revolutionizing Cell Therapy Monitoring & Analysis
					</div>
					<div className="text-xl md:text-2xl flex flex-col gap-6 font-light leading-snug">
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
				<div className="h-full items-center lg:h-fit grid gap-4 grid-cols-3 lg:grid-cols-1 lg:grid-rows-3 lg:col-start-6">
					<div className=" lg:-translate-x-1/2 lg:translate-y-1/4">
						<HexagonInfo icon={<BeakerIcon />} />
					</div>
					<div>
						<HexagonInfo icon={<BeakerIcon />} />
					</div>
					<div className=" lg:-translate-x-1/2 lg:-translate-y-1/4">
						<HexagonInfo icon={<BeakerIcon />} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
