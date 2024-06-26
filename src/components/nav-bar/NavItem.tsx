interface NavItemProps {
	link: string;
	label: string;
}
export const NavItem = ({ link, label }: NavItemProps) => {
	return (
		<li>
			<a href={link}>{label}</a>
		</li>
	);
};
