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
		<section
			id="landing-page"
			className="landing-page relative flex flex-col justify-center"
		>
			<div className="text-center lg:text-[3svw] w-full px-6 font-medium tracking-tighter leading-tight">
				Unlocking Clinical Support <br></br>using PET-enabled therapies
			</div>
			<div className="text-xl text-center lg:text-[2svw] leading-tight">
				Access new data to monitor patients and <br></br>evaluate cell and gene
				therapies
			</div>
		</section>
	);
};
