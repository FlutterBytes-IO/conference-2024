import React from "react";

export interface NavbarProps {
	handleClick?: () => void;
}

export interface DarkmodeContextType {
	isDarkmode: boolean;
	setIsDarkmode: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ButtonProps {
	otherstyles?: string;
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
	variant?: string;
	icon?: React.ReactNode;
	leftIcon?: React.ReactNode;
	children: React.ReactNode;
	component?: "button" | "link";
	href?: string;
}

export interface IconContainerProps {
	icon: React.ReactNode;
	dark?: boolean;
	otherstyles?: string;
	href?: string;
}

export interface KeyValueProps {
	key: string;
	value: string | React.ReactElement;
}

export interface TableRow {
	key: string;
	[key: string]: string | React.ReactElement;
}

export interface TableComponentProps {
	tableHead?: KeyValueProps[];
	tableBody?: TableRow[];
	more?: React.ReactElement;
	isHomePage?: boolean;
}

export interface TabStepComponentProps {
	[key: number]: JSX.Element;
}
