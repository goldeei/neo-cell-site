import cn from "@/utilities/cn";

type HeaderProps = { children: React.ReactNode; className?: string };

const BASE_CLASSES = "text-header-blue-500 leading-tight";

const H1_CLASSES = {
	base: "tracking-tighter",
	xs: "text-[10svw] w-full font-medium",
	sm: "sm:text-[8svw] sm:w-[650px]",
	md: "md:text-[6svw] md:w-[650px]",
	lg: "lg:text-6xl lg:w-[800px]",
};

export const H1 = ({ children, className }: HeaderProps) => {
	const { base, xs, sm, md, lg } = H1_CLASSES;

	return (
		<h1 className={cn(BASE_CLASSES, base, xs, sm, md, lg, className)}>
			{children}
		</h1>
	);
};

const H2_CLASSES = {
	xs: "text-[8svw]",
	sm: "sm:text-[6svw] sm:w-[650px]",
	md: "md:text-[4svw] md:w-[650px]",
	lg: "lg:text-4xl lg:w-[800px]",
};

export const H2 = ({ children, className }: HeaderProps) => {
	const { xs, sm, md, lg } = H2_CLASSES;

	return (
		<h2 className={cn(BASE_CLASSES, xs, sm, md, lg, className)}>{children}</h2>
	);
};

export const H3_CLASSES = {
	xs: "text-[5svw]",
	sm: "sm:text-[4svw]",
	md: "md:text-[3svw]",
	lg: "lg:text-2xl",
};

export const H3 = ({ children, className }: HeaderProps) => {
	const { xs, sm, md, lg } = H3_CLASSES;

	return (
		<h3 className={cn(BASE_CLASSES, xs, sm, md, lg, className)}>{children}</h3>
	);
};
