import Button from "@/components/Button";
import StyledImageContainer from "@/components/StyledImageContainer";
import { RightArrow2 } from "@/components/vectors/RightArrow";

export default function About() {
	return (
		<section className="min-h-screen gradient-no-grid max-w-[920px] mx-auto w-full">
			<h2 className="font-gigaSans flex mx-auto w-fit text-center mt-[140px] px-5 border-y-[1.5px] border-fbc_blue-100 text-[32px] font-semibold relative z-10 heading-text">
				About us
			</h2>
			<div className="font-gigaSans mt-[52px] mb-[100px] p-5 md:px-[80px] xl:px-[111px] bg-fbc_blue-100 border-[0.5px] border-blue-100 text-blue-500 text-sm rounded-2xl relative z-10 space-y-5">
				<p>
					At FlutterBytes Conference, we&rsquo;re dedicated to creating a
					premier event experience that connects professionals, thought leaders,
					and innovators from diverse backgrounds and industries. Our mission is
					to provide a platform for knowledge sharing, collaboration, and
					growth, fostering a community that drives progress and innovation.
				</p>
				<p>
					With a commitment to excellence and a passion for making a meaningful
					impact, our team works tirelessly to curate a comprehensive program,
					secure esteemed Speakers, and create a conducive environment for
					meaningful connections and learning.
				</p>
				<div>
					<p>Our values are:</p>
					<ul>
						<li>
							- Connection: We believe in the power of people coming together to
							achieve great things.
						</li>
						<li>
							- Innovation: We embrace fresh ideas and perspectives that shape
							the future.
						</li>
						<li>
							- Growth: We strive to create opportunities for personal and
							professional development.
						</li>
						<li>
							- Community: We&rsquo;re dedicated to building a supportive and
							inclusive network
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col gap-y-10 mb-[100px] ">
				<h3 className="border-y-[1.5px] w-fit self-center border-fbc_blue-100 text-[28px] leading-[42px] text-center py-2.5 px-5 text-gradient font-semibold">
					Meet the Organizing Committee
				</h3>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-5 md:gap-10 mb-10">
					<div className="flex flex-col items-center">
						<StyledImageContainer />
						<p className="mt-3 mb-1 font-semibold text-neutral-700 text-center">
							Jamiu
							<br className="max-md:hidden" /> Okanlawon
						</p>
						<p className="text-sm text-neutral-700 text-center">
							Senior Flutter Developer, EdenLife
						</p>
					</div>
					<div className="flex flex-col items-center">
						<StyledImageContainer />
						<p className="mt-3 mb-1 font-semibold text-neutral-700 text-center">
							David
							<br className="max-md:hidden" /> Adegoke
						</p>
						<p className="text-sm text-neutral-700 text-center">
							Engineering Manager, Raptures Entertainment
						</p>
					</div>
					<div className="flex flex-col items-center">
						<StyledImageContainer />
						<p className="mt-3 mb-1 font-semibold text-neutral-700 text-center">
							Mariam
							<br className="max-md:hidden" /> Hamzat
						</p>
						<p className="text-sm text-neutral-700 text-center">
							Rich woman with multiple roles
						</p>
					</div>
					<div className="flex flex-col items-center">
						<StyledImageContainer />
						<p className="mt-3 mb-1 font-semibold text-neutral-700 text-center">
							+20 other committee
							<br className="max-md:hidden" /> members
						</p>
						<p className="text-sm text-neutral-700 text-center">
							Across 10 teams for effective conference planning.
						</p>
					</div>
				</div>
				<div className="flex w-full flex-col justify-center items-center sm:flex-row gap-4 mt-10">
					<Button
						component="link"
						href="/volunteer"
						variant="contained"
						otherstyles="text-base font-semibold"
						icon={<RightArrow2 color="#fff" />}
					>
						Apply to volunteer
					</Button>
					<Button
						component="link"
						href="/organizers"
						variant="outlined"
						otherstyles="text-base font-semibold"
						icon={<RightArrow2 />}
					>
						See full committee
					</Button>
				</div>
			</div>
		</section>
	);
}
