'use client'
import { Agenda } from "@/components/Agenda";

export default function AgendaPage() {
	return (
		<section className="min-h-screen gradient-no-grid max-w-[920px] mx-auto w-full">
			<div className="mt-[140px] relative z-10 pb-32 flex flex-col items-center">
				<Agenda />
			</div>
		</section>
	);
}
