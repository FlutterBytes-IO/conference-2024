import { ButtonProps } from "@/types";

export default function Button({
	children,
	icon,
	otherstyles,
	onClick,
	type,
	variant = "contained",
	disabled,
}: ButtonProps) {
	return (
		<button
			disabled={disabled}
			type={type || "button"}
			onClick={onClick}
			className={`rounded-[30px] ${
				icon && "!pr-3"
			} w-fit py-2 px-2 md:px-4 flex items-center gap-2 font-medium text-xs md:text-sm ${
				variant === "contained"
					? "bg-blue-200 text-white"
					: "bg-white border border-blue-200 text-blue-200"
			} ${otherstyles}`}
		>
			{children} {icon && icon}
		</button>
	);
}
