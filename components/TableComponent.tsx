import { TableComponentProps } from "@/types";

export default function TableComponent({
	tableHead = headCells,
	tableBody = bodyCells,
}: TableComponentProps) {
	return (
		<div className="border-[0.5px] border-neutral-500 rounded-[40px] max-w-[877px] flex flex-col">
			<table className="w-full">
				<thead>
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
							{tableHead.map((innerItem) => (
								<td
									className="py-4 px-2.5 border border-neutral-300 text-center"
									key={`${innerItem.key}-${item.key}`}
								>
									{item[innerItem.key]}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
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
