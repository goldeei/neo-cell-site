import cn from '@/utilities/cn';

const TEXT_CLASSES = {
	container: "w-full flex flex-col gap-4 lg:gap-8 justify-center items-center",
	base: "text-center text-header-blue-500 leading-tight  drop-shadow-md",
	title: {
		base: "tracking-tighter",
		default: "text-[10svw] w-full font-medium",
		sm: "sm:text-[8svw] sm:w-[650px]",
		md: "md:text-[6svw] md:w-[650px]",
		lg: "lg:text-6xl lg:w-[800px]",
	},
	subtitle: {
		default: "text-[8svw] w-full drop-shadow-md",
		sm: "sm:text-[6svw] sm:w-[650px]",
		md: "md:text-[4svw] md:w-[650px]",
		lg: "lg:text-4xl lg:w-[800px]",
	},
};

const LandingPage = () => {
	const { title, subtitle } = TEXT_CLASSES;

	return (
		<section
			id="landing-page"
			className={cn(TEXT_CLASSES.container, TEXT_CLASSES.base)}
		>
			<div
				className={cn(title.base, title.default, title.sm, title.md, title.lg)}
			>
				Unlocking Clinical Support using PET-enabled therapies
			</div>
			<div
				className={cn(subtitle.default, subtitle.sm, subtitle.md, subtitle.lg)}
			>
				Access new data to monitor patients and evaluate cell and gene therapies
			</div>
		</section>
	);
};

export default LandingPage;
