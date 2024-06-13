export interface NavbarProps {
	handleClick?: () => void;
}

export interface DarkmodeContextType {
	isDarkmode: boolean;
	setIsDarkmode: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ButtonProps {
	children: React.ReactNode;
	otherstyles?: string;
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
}

export interface IconContainerProps {
	icon: React.ReactNode;
	dark?: boolean;
	otherstyles?: string;
	href?: string;
}
