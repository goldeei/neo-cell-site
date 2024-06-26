"use client";

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';

export const LandingVid = () => {
	const { scrollYProgress } = useScroll();
	const [coverOpacity, setCoverOpacity] = useState(0);

	const { width = 0 } = useWindowSize();
	const [translateX, setTranslateX] = useState(0);

	const videoRef = useRef<HTMLVideoElement>(null);

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		setCoverOpacity(latest * 2 + 0.1);
	});

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
			<div
				className="absolute top-0 left-0 h-full w-full bg-white backdrop-blur-sm"
				style={{ opacity: coverOpacity }}
			/>
			{coverOpacity < 1 && (
				<motion.video
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className={`h-full w-full min-w-[1360px] object-cover -z-10 brightness-110 saturate-[1.3] `}
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
				</motion.video>
			)}
		</div>
	);
};
