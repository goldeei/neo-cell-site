import { H1, H2 } from "@/components/Header";
import cn from "@/utilities/cn";

const TEXT_CLASSES = {
	container: "w-full flex flex-col gap-4 lg:gap-8 justify-center items-center",
	base: "text-center drop-shadow-md",
};

const CONTAINER_CLASSES = "h-svh w-full overflow-x-hidden";

const LandingPage = () => {
	return (
		<section
			id="landing-page"
			className={cn(
				TEXT_CLASSES.container,
				TEXT_CLASSES.base,
				CONTAINER_CLASSES
			)}
		>
			<H1>Unlocking Clinical Support using PET-enabled therapies</H1>
			<H2>
				Access new data to monitor patients and evaluate cell and gene therapies
			</H2>
		</section>
	);
};

export default LandingPage;
