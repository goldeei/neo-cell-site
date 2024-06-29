import cn from '@/utilities/cn';

import { ActiveIndicator } from './ActiveIndicator';
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
			{isActive && <ActiveIndicator isCollapsed={isCollapsed} />}
		</li>
	);
};
