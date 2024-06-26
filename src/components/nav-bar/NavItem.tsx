import cn from '@/utilities/cn';

interface NavItemProps {
	link: string;
	label: string;
	onSetLink: (link: string) => void;
	isActive: boolean;
}
export const NavItem = ({ link, label, onSetLink, isActive }: NavItemProps) => {
	const handleClick = () => {
		onSetLink(link);
	};
	return (
		<li>
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
		</li>
	);
};
