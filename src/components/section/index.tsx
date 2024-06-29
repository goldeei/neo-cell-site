import { navbarHeight } from "@/global-styles";
import cn from "@/utilities/cn";

const marginTop = `my-${navbarHeight + 4}`;

const SECTION_CLASSES = "h-svh w-full overflow-hidden flex justify-center";
const CONTAINER_CLASSES = cn(
	`max-w-[1920px] pt-24 pb-6 mb-4 h-full px-4 sm:px-8 md:px-12 xl:px-24`
);

interface SectionProps {
	children: React.ReactNode;
	className: string;
	id: string;
}
export const Section = ({ children, className, id }: SectionProps) => {
	return (
		<section id={id} className={cn(className, SECTION_CLASSES)}>
			<div className={CONTAINER_CLASSES}>{children}</div>
		</section>
	);
};
