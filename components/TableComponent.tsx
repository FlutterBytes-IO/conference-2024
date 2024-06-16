import { TableComponentProps } from "@/types";
import { RightArrow2 } from "./vectors/RightArrow";

export default function TableComponent({
	tableHead = headCells,
	tableBody = bodyCells,
	more,
}: TableComponentProps) {
	return (
		<div className="border-[0.5px] border-neutral-500 text-neutral-700 rounded-[40px] max-w-[877px] flex flex-col">
			<table className="w-full">
				<thead className="font-semibold">
					<tr>
						{tableHead.map((item) => (
							<th
								className="py-4 px-2.5 border border-neutral-300"
								key={item.key}
							>
								{item.value}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{tableBody.map((item, index) => (
						<tr
							key={item.key}
							className={`${
								index === tableBody.length - 1 ? "last-row-no-border" : ""
							}`}
						>
							{tableHead.map((innerItem, index) => (
								<td
									className={`py-4 px-2.5 border border-neutral-300 text-center ${
										index === 1 ? "font-medium" : "text-sm font-normal"
									} ${index === tableHead.length - 1 ? "px-5" : ""}`}
									key={`${innerItem.key}-${item.key}`}
								>
									{item[innerItem.key]}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
			{more &&
				(more || (
					<div className="border-t border-neutral-300 py-2 px-32 flex items-center justify-between">
						<div className="py-4 px-2.5">
							<span className="text-neutral-600 font-semibold italic text-center">
								20+ more sessions
							</span>
						</div>
						<button className="border border-blue-200 rounded-[40px] p-3 pl-5 flex items-center gap-x-2 text-sm text-blue-200 font-semibold">
							Full agenda of the event <RightArrow2 />
						</button>
					</div>
				))}
		</div>
	);
}

const headCells = [
	{
		key: "timeline",
		value: "Timeline",
	},
	{
		key: "session",
		value: "Session Title",
	},
	{
		key: "anchor",
		value: "Anchor (s)",
	},
	{
		key: "day",
		value: "Day",
	},
];

const bodyCells = Array(5)
	.fill("")
	.map((_, i) => ({
		timeline: "10:03pm 8:04am",
		session:
			"Flutter for Enterprise: Scaling and Integrating with Existing Systems",
		anchor: "Rebecca Omolabake, Christopher Nwosu-Madueke",
		day: "Friday",
		key: `key-${i + 1}`,
	}));
