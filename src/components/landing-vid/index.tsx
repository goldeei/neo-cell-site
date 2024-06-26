"use client";

import { useEffect, useRef, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';

export const LandingVid = () => {
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
		<div className="fixed top-0 left-0 landing-page flex justify-center h-svh w-svw -z-50">
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
		</div>
	);
};
