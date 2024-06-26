"use client";

import { useEffect, useRef, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';

export const LandingPage = () => {
	const { width = 0 } = useWindowSize();
	const [translateX, setTranslateX] = useState(0);

	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		if (width < 1360 && videoRef.current) {
			const videoWidth = videoRef.current?.getBoundingClientRect().width;
			setTranslateX(((width - videoWidth) * -1) / 2);
		} else {
			setTranslateX(0);
		}
	}, [width]);

	return (
		<section className="landing-page relative flex justify-center">
			<div className="absolute top-0 left-0 w-full h-full z-10" />
			<video
				className={`h-full w-full min-w-[1360px] object-cover z-0 brightness-110 saturate-[1.3] `}
				autoPlay
				loop
				muted
				preload="auto"
				style={{
					transform: `translateX(${translateX}px)`,
				}}
				ref={videoRef}
			>
				<source src="/NeoCellLandingPage.mp4" type="video/mp4" />
			</video>
			<div className="absolute h-svh w-svw top-0 left-0 flex flex-col items-center justify-center z-20 gap-4 text-header-blue-500">
				<div className="flex flex-col justify-center items-center gap-4 max-w-[1920px]">
					<div className="text-center lg:text-[3svw] w-full px-6 font-medium tracking-tighter leading-tight">
						Unlocking Clinical Support <br></br>using PET-enabled therapies
					</div>
					<div className="text-xl text-center lg:text-[2svw] leading-tight">
						Access new data to monitor patients and <br></br>evaluate cell and
						gene therapies
					</div>
				</div>
			</div>
		</section>
	);
};
