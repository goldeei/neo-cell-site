export const About = () => {
	return (
		<section id="about" className="page-gradient">
			{/* <div className="flex flex-col md:flex-row items-center justify-around gap-24"> */}
			<div className="flex flex-col justify-between lg:grid gap-auto lg:grid-cols-6 lg:grid-rows-1 items-center">
				<div className="lg:col-span-4 flex flex-col gap-12">
					<div className="text-header-blue-500 text-7xl">
						Revolutionizing Cell Therapy Monitoring & Analysis
					</div>
					<div className="text-2xl">
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
				<div className="h-full items-center lg:h-fit grid gap-1 grid-cols-3 lg:grid-cols-1 lg:grid-rows-3 lg:col-start-6">
					<div className="relative lg:-translate-x-1/2">
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
					<div className="relative lg:-translate-x-1/2">
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
