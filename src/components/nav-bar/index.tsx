"use client";

import cn from '@/utilities/cn';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';

import { NavItem } from './NavItem';
import { SectionId } from './types';

const BACKGROUND_CLASSES =
	"border-white bg-gradient-to-b from-white/80 to-white/60 backdrop-blur-sm";
const NAV_MENU_CLASSES = {
	default: "justify-between items-center",
	collapsed: cn(
		"w-full sm:w-72 flex-1 bg-white fixed right-0 top-full flex-col gap-12 rounded justify-between px-8 py-8 mt-1 me-0 sm:me-1 shadow-lg"
	),
};
interface NavMenuProps {
	setActiveLink: (linkName: SectionId) => void;
	activeLink: SectionId;
}
const NavMenu = ({ setActiveLink, activeLink }: NavMenuProps) => {
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const handleSetVisible = () => {
		setIsVisible(!isVisible);
	};

	const { width } = useWindowSize();
	useEffect(() => {
		if (width <= 768) {
			setIsCollapsed(true);
			setIsVisible(false);
		} else {
			setIsCollapsed(false);
			setIsVisible(true);
		}
	}, [width]);
	return (
		<>
			{isCollapsed && (
				<button
					onMouseDown={handleSetVisible}
					className="flex justify-center w-6 h-6"
				>
					<FontAwesomeIcon
						className={cn(
							"w-full h-full",
							isVisible ? "text-blue-500" : "text-header-blue-500"
						)}
						icon={faBars}
					/>
				</button>
			)}
			<AnimatePresence>
				{isVisible ? (
					<motion.ul
						className={cn(
							"flex gap-8",
							isCollapsed
								? NAV_MENU_CLASSES.collapsed
								: NAV_MENU_CLASSES.default
						)}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<NavItem
							onSetLink={setActiveLink}
							isActive={activeLink === "#about"}
							label="About"
							link="#about"
							isCollapsed={isCollapsed}
						/>
						<NavItem
							onSetLink={setActiveLink}
							isActive={activeLink === "#technology"}
							label="Technology"
							link="#technology"
							isCollapsed={isCollapsed}
						/>
						<NavItem
							onSetLink={setActiveLink}
							isActive={activeLink === "#meet-the-team"}
							label="Meet The Team"
							link="#meet-the-team"
							isCollapsed={isCollapsed}
						/>
						<li>
							<motion.a
								aria-label="Send mail"
								href="mailto: mail@mail.com"
								className="border bg-header-blue-500 px-8 py-2 rounded-full transition-colors ease-in-out hover:bg-blue-500 text-white shadows hover:shadow-md whitespace-nowrap"
								whileHover={{ y: -2 }}
								transition={{
									duration: 0.15,
								}}
							>
								Contact Us
							</motion.a>
						</li>
					</motion.ul>
				) : null}
			</AnimatePresence>
		</>
	);
};

export const NavBar = () => {
	const [activeLink, setActiveLink] = useState<SectionId>("");

	const handleActiveLinkChange = (linkName: SectionId) => {
		setActiveLink(linkName);
	};

	return (
		<nav
			className={cn(
				"sticky top-0 z-50 shadow-lg border w-full px-4 py-2",
				BACKGROUND_CLASSES
			)}
		>
			<div className="relative page-width h-14 mx-auto flex justify-between items-center">
				<a
					href="#landing-page"
					className="h-full w-fit"
					onClick={() => setActiveLink("")}
				>
					<img src={"/NeoCellLogo.png"} className="h-full w-full" />
				</a>
				<NavMenu
					setActiveLink={handleActiveLinkChange}
					activeLink={activeLink}
				/>
			</div>
		</nav>
	);
};
