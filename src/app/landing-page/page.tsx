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
		<div className="relative flex justify-center overflow-hidden h-svh w-svw">
			<div className="absolute top-0 left-0 w-full h-full video-linear-grd -z-50" />
			<video
				className={`h-full w-full min-w-[1360px] object-cover`}
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
			<div className="absolute h-svh w-svw top-0 left-0 flex items-center justify-center">
				<div className="text-center text-3xl w-full px-12">
					Unlocking Clinical Support using PET-enabled therapies
				</div>
			</div>
		</div>
	);
};
