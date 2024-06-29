import cn from '@/utilities/cn';

import { SectionId } from './types';

interface NavItemProps {
	link: SectionId;
	label: string;
	onSetLink: (link: SectionId) => void;
	isActive: boolean;
	isCollapsed: boolean;
}
export const NavItem = ({
	link,
	label,
	onSetLink,
	isActive,
	isCollapsed,
}: NavItemProps) => {
	const handleClick = () => {
		onSetLink(link);
	};
	return (
		<li className="relative">
			<a
				href={link}
				onClick={handleClick}
				className={cn(
					"text-header-blue-500 font-medium",
					isActive && "text-blue-500"
				)}
			>
				{label}
			</a>
			{isActive && (
				<>
					{isCollapsed ? (
						<div className="absolute w-2 h-2 bg-blue-500 rounded-full left-0 top-1/2 -translate-y-1/2" />
					) : (
						<div className="absolute w-[calc(100%+0.5rem)] h-1 bg-blue-500 rounded-md left-1/2 -translate-x-1/2" />
					)}
				</>
			)}
		</li>
	);
};
