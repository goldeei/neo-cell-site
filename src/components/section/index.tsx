import { navbarHeight } from "@/global-styles";
import cn from "@/utilities/cn";

const marginTop = `my-${navbarHeight + 4}`;

const SECTION_CLASSES = "min-h-screen min-w-screen flex justify-center";
const CONTAINER_CLASSES = cn(
	`max-w-[1920px] pt-24 pb-6 px-4 sm:px-8 md:px-12 xl:px-24`
);

interface SectionProps {
	children: React.ReactNode;
	className?: string;
	id: string;
	bgColor?: string;
	bgElement?: React.ReactNode;
}
export const Section = ({
	children,
	className,
	id,
	bgColor,
	bgElement,
}: SectionProps) => {
	return (
		<section id={id} className={cn(SECTION_CLASSES, bgColor)}>
			{bgElement && bgElement}
			<div className={cn(CONTAINER_CLASSES, className)}>{children}</div>
		</section>
	);
};
