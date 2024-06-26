import { NavItem } from './NavItem';

export const NavBar = () => {
	return (
		<nav className="sticky top-0 z-50 shadow-lg border border-white w-full p-2 bg-gradient-to-b from-white/80 to-white/60 backdrop-blur-[6px]">
			<div className="max-w-[1920px] h-14 mx-auto flex justify-between items-center">
				<img src={"/NeoCellLogo.png"} className="h-full w-fit" />
				<ul className="flex justify-between gap-8">
					<NavItem label="Technology" link="#technology" />
					<NavItem label="About" link="#about" />
					<NavItem label="Meet The Team" link="#meet-the-team" />
				</ul>
			</div>
		</nav>
	);
};
