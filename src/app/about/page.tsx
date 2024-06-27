export const About = () => {
	return (
		<section id="about" className="page-gradient">
			<div className="flex flex-col md:flex-row items-center justify-around gap-24">
				<div className="flex flex-col gap-12 max-w-[900px]">
					<div className="text-header-blue-500 text-7xl">
						Revolutionizing Cell Therapy Monitoring & Analysis
					</div>
					<div className="text-3xl">
						By leveraging PET reporter technology, our innovative approach
						enables early detection of low efficacy or high toxicity throughout
						clinical development and patient treatment. PET-CT scans help
						proactively identify challenges and provide crucial insights to
						guide the development of safer and more effective treatments.
						Through precise monitoring and analysis, we empower healthcare
						professionals and researchers with the knowledge needed to make
						informed clinical decisions, ultimately advancing the field of
						medical research and enhancing patient outcomes.
					</div>
				</div>
				<div className="max-h-full grid gap-1 md:gap-12 grid-cols-3 md:grid-cols-1 md:grid-rows-3 md:w-1/5">
					<div className="relative -translate-x-2/3">
						<img
							src="/Frame 25.png"
							alt=""
							className="w-full h-auto aspect-auto rotate-90"
						/>
						<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
							ICON
						</div>
					</div>
					<div className="relative">
						<img
							src="/Frame 25.png"
							alt=""
							className="w-full h-auto aspect-auto rotate-90"
						/>
						<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
							ICON
						</div>
					</div>
					<div className="relative -translate-x-2/3">
						<img
							src="/Frame 25.png"
							alt=""
							className="w-full h-auto aspect-auto rotate-90"
						/>
						<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
							ICON
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
