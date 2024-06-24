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
	children: React.ReactNode;
}

export interface IconContainerProps {
	icon: React.ReactNode;
	dark?: boolean;
	otherstyles?: string;
	href?: string;
}

interface KeyValueProps {
	key: string;
	value: string;
}

interface TableRow {
	key: string;
	[key: string]: string;
}

export interface TableComponentProps {
	tableHead?: KeyValueProps[];
	tableBody?: TableRow[];
	more?: React.ReactElement;
}
