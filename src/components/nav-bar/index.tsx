"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { NavItem } from './NavItem';

export const NavBar = () => {
	const [activeLink, setActiveLink] = useState("");

	useEffect(() => {
		console.log(activeLink);
	}, [activeLink]);

	return (
		<nav className="sticky top-0 z-50 shadow-lg border border-white w-full p-2 bg-gradient-to-b from-white/80 to-white/60 backdrop-blur-[6px]">
			<div className="max-w-[1920px] h-14 mx-auto flex justify-between items-center">
				<a
					href="#landing-page"
					className="h-full w-fit"
					onClick={() => setActiveLink("")}
				>
					<img src={"/NeoCellLogo.png"} className="h-full w-full" />
				</a>
				<ul className="flex justify-between items-center gap-8">
					<NavItem
						onSetLink={setActiveLink}
						isActive={activeLink === "#technology"}
						label="Technology"
						link="#technology"
					/>
					<NavItem
						onSetLink={setActiveLink}
						isActive={activeLink === "#about"}
						label="About"
						link="#about"
					/>
					<NavItem
						onSetLink={setActiveLink}
						isActive={activeLink === "#meet-the-team"}
						label="Meet The Team"
						link="#meet-the-team"
					/>
					<motion.a
						aria-label="Send mail"
						href="mailto: mail@mail.com"
						className="border bg-header-blue-500 px-8 py-2 rounded-full transition-colors ease-in-out hover:bg-blue-500 text-white shadow-none hover:shadow-md"
						whileHover={{ y: -2 }}
						transition={{
							duration: 0.15,
						}}
					>
						Contact Us
					</motion.a>
				</ul>
			</div>
		</nav>
	);
};
