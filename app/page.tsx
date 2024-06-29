import Button from "@/components/Button";
import Agenda from "@/components/Agenda";
import StyledImageContainer from "@/components/StyledImageContainer";
import { RightArrow2 } from "@/components/vectors/RightArrow";
import CalendarIcon from "@/components/vectors/CalendarIcon";
import TicketIcon from "@/components/vectors/TicketIcon";

export default function Home() {
	return (
		<section className="flex min-h-screen flex-col gradient-no-grid max-w-[922px] w-full mx-auto">
			<div className="max-w-[758px] mx-auto w-full flex flex-col justify-center items-center mt-[140px] px-5 z-10 min-h-screen">
				<p className="text-neutral-700 text-xl font-medium pt-2.5 px-6 pb-3 border-b mb-3">
					The Global Impact of African Flutter Developers/Engineers
				</p>
				<p className="text-4xl leading-[67.2px] text-neutral-500 text-center mb-8">
					&#123;FlutterBytes Conference 2024&#125;
				</p>
				<Button
					variant="contained"
					icon={<RightArrow2 color="#fff" />}
					otherstyles="font-semibold text-2xl"
				>
					Get Ticket
				</Button>
			</div>
			<div className="pb-[120px] flex justify-center relative z-10">
				<div className="grid gap-8 md:gap-3 grid-cols-1 md:grid-rows-5 max-w-[920px] w-full">
					<div className="row-start-1 row-end-3 rounded-2xl bg-blue-200 bg-[url('/images/datebg-pattern.png')] bg-right bg-contain bg-no-repeat bg-blend-soft-light p-7 md:py-[46px] md:px-12 flex flex-col gap-y-6">
						<p className="flex items-center gap-x-2.5 text-white text-lg font-medium">
							<CalendarIcon /> A 2-day Event
						</p>
						<p className="text-white font-semibold text-[2rem] leading-[38px]">
							Friday and Saturday, <br className="max-md:hidden" />
							November 1st-2nd, 2024.
						</p>
						<div className="border border-dotted border-white pt-0.5 pb-1 px-[18px] rounded-[60px] w-fit">
							<p className="text-white text-lg font-medium">
								8:00AM on both days
							</p>
						</div>
					</div>
					<div className="row-start-3 row-end-5 flex gap-8 md:gap-3">
						<div className="bg-[url('/images/stat-bg.png')] rounded-2xl bg-center bg-cover py-10 px-[46px] flex place-content-center basis-[43%]">
							<div className="bg-white grid grid-cols-2 py-[17px] px-6 rounded-xl border border-blue-200 inner-shadow">
								<div className="flex flex-col text-center place-content-center">
									<p className="font-semibold text-[2rem] leading-[38px] text-gradient">
										16
									</p>
									<p className="text-neutral-500 font-medium text-base">
										Speakers
									</p>
								</div>
								<div className="flex flex-col text-center place-content-center">
									<p className="font-semibold text-[2rem] leading-[38px] text-gradient">
										900
									</p>
									<p className="text-neutral-500 font-medium text-base">
										Flutter Devs
									</p>
								</div>
								<div className="flex flex-col text-center place-content-center">
									<p className="font-semibold text-[2rem] leading-[38px] text-gradient">
										12
									</p>
									<p className="text-neutral-500 font-medium text-base">
										Sessions
									</p>
								</div>
								<div className="flex flex-col text-center place-content-center">
									<p className="font-semibold text-[2rem] leading-[38px] text-gradient">
										09
									</p>
									<p className="text-neutral-500 font-medium text-base">
										Gifts
									</p>
								</div>
							</div>
						</div>
						<div className="basis-[57%] flex bg-[url('/images/map-bg.png')] rounded-2xl bg-center bg-cover place-content-center border border-neutral-400"></div>
					</div>
					<div className="row-auto bg-fbc_blue-100 rounded-2xl py-9 px-9 flex items-center justify-between">
						<p className="text-blue-500 font-semibold text-[28px] leading-[33.6px] max-w-[270px]">
							Don’t miss out on all the fun!
						</p>
						<Button
							leftIcon={<TicketIcon />}
							icon={<RightArrow2 color="#fff" />}
							otherstyles="gap-x-3"
						>
							Pick Up a Ticket
						</Button>
					</div>
				</div>
			</div>
			<div className="bg-blue-50 relative z-10 pt-[116px] pb-32 flex flex-col items-center -mx-60">
				<Agenda isHomePage />
			</div>
			<div className="flex flex-col items-center relative z-10 py-[120px]">
				<h3 className="text-center mb-[52px] heading-text w-fit py-2.5 px-5 border-y-[1.5px] border-fbc_blue-100 text-[2rem] leading-[38px] font-semibold">
					Agenda for FlutterBytes Conference 2024
				</h3>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-5 md:gap-10 mb-10">
					<div className="flex flex-col items-center">
						<StyledImageContainer />
						<p className="mt-3 mb-1 font-semibold text-neutral-700">
							Rebecca Omolabake
						</p>
						<p className="text-sm text-neutral-700 text-center">
							Senior Flutter Developer, EdenLife
						</p>
					</div>
					<div className="flex flex-col items-center">
						<StyledImageContainer />
						<p className="mt-3 mb-1 font-semibold text-neutral-700">
							Rebecca Omolabake
						</p>
						<p className="text-sm text-neutral-700 text-center">
							Senior Flutter Developer, EdenLife
						</p>
					</div>
					<div className="flex flex-col items-center">
						<StyledImageContainer />
						<p className="mt-3 mb-1 font-semibold text-neutral-700">
							Rebecca Omolabake
						</p>
						<p className="text-sm text-neutral-700 text-center">
							Senior Flutter Developer, EdenLife
						</p>
					</div>
					<div className="flex flex-col items-center">
						<StyledImageContainer />
						<p className="mt-3 mb-1 font-semibold text-neutral-700">
							Rebecca Omolabake
						</p>
						<p className="text-sm text-neutral-700 text-center">
							Senior Flutter Developer, EdenLife
						</p>
					</div>
				</div>
				<div className="self-center flex items-center gap-x-10">
					<Button
						component="link"
						href="/speakers-application"
						variant="contained"
						otherstyles="text-base font-semibold py-3 px-5"
						icon={<RightArrow2 color="#fff" />}
					>
						Apply to speak
					</Button>
					<Button
						component="link"
						href="/speakers"
						variant="outlined"
						otherstyles="text-base font-semibold py-3 px-5"
						icon={<RightArrow2 />}
					>
						See all Speakers
					</Button>
				</div>
			</div>
			<div className="flex flex-col items-center relative z-10 py-[120px]">
				<h3 className="text-center mb-[52px] text-neutral-900 w-fit py-2.5 px-5 border-y-[1.5px] border-fbc_blue-100 text-[28px] leading-[42px] font-semibold">
					FlutterBytes Conference 2024 is being sponsored by:
				</h3>
				<div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-5 md:gap-10 mb-12">
					<div className="flex flex-col items-center">
						<StyledImageContainer
							src="/images/Google.png"
							otherstyles="!w-[150px] !h-[180px] p-2.5"
							innerstyles="border-4"
						/>
						<p className="mt-3 mb-1 font-semibold text-neutral-700">Google</p>
						<p className="text-sm text-neutral-700 text-center">
							Platinum Sponsor
						</p>
					</div>
					<div className="flex flex-col items-center">
						<StyledImageContainer
							src="/images/Eden-life.png"
							otherstyles="!w-[150px] !h-[180px] p-2.5"
							innerstyles="border-4"
						/>
						<p className="mt-3 mb-1 font-semibold text-neutral-700">Google</p>
						<p className="text-sm text-neutral-700 text-center">
							Platinum Sponsor
						</p>
					</div>
					<div className="flex flex-col items-center">
						<StyledImageContainer
							src="/images/Flutter.png"
							otherstyles="!w-[150px] !h-[180px] p-2.5"
							innerstyles="border-4"
						/>
						<p className="mt-3 mb-1 font-semibold text-neutral-700">Google</p>
						<p className="text-sm text-neutral-700 text-center">
							Platinum Sponsor
						</p>
					</div>
					<div className="flex flex-col items-center">
						<StyledImageContainer
							src="/images/Google.png"
							otherstyles="!w-[150px] !h-[180px] p-2.5"
							innerstyles="border-4"
						/>
						<p className="mt-3 mb-1 font-semibold text-neutral-700">Google</p>
						<p className="text-sm text-neutral-700 text-center">
							Platinum Sponsor
						</p>
					</div>
					<div className="flex flex-col items-center">
						<StyledImageContainer
							src="/images/Google.png"
							otherstyles="!w-[150px] !h-[180px] p-2.5"
							innerstyles="border-4"
						/>
						<p className="mt-3 mb-1 font-semibold text-neutral-700">Google</p>
						<p className="text-sm text-neutral-700 text-center">
							Platinum Sponsor
						</p>
					</div>
				</div>
				<div className="grid grid-cols-3 md:grid-cols-7 gap-y-10 gap-x-4 md:gap-10 place-content-center mb-12">
					<div className="flex flex-col items-center">
						<StyledImageContainer
							src="/images/Flutter.png"
							otherstyles="!w-[116.67px] !h-[140px] p-2.5 border-blue-500"
							innerstyles="border-4"
						/>
					</div>
					<div className="flex flex-col items-center">
						<StyledImageContainer
							src="/images/Honeycomb.png"
							otherstyles="!w-[116.67px] !h-[140px] p-2.5 border-blue-500"
							innerstyles="border-4"
						/>
					</div>
					<div className="flex flex-col items-center">
						<StyledImageContainer
							src="/images/Flutter-like.png"
							otherstyles="!w-[116.67px] !h-[140px] p-2.5 border-blue-500"
							innerstyles="border-4"
						/>
					</div>
					<div className="flex flex-col items-center">
						<StyledImageContainer
							src="/images/F-logo.png"
							otherstyles="!w-[116.67px] !h-[140px] p-2.5 border-blue-500"
							innerstyles="border-4"
						/>
					</div>
					<div className="flex flex-col items-center">
						<StyledImageContainer
							src="/images/Google.png"
							otherstyles="!w-[116.67px] !h-[140px] p-2.5 border-blue-500"
							innerstyles="border-4"
						/>
					</div>
					<div className="flex flex-col items-center">
						<StyledImageContainer
							src="/images/Google.png"
							otherstyles="!w-[116.67px] !h-[140px] p-2.5 border-blue-500"
							innerstyles="border-4"
						/>
					</div>
					<div className="flex flex-col items-center">
						<StyledImageContainer
							src="/images/Google.png"
							otherstyles="!w-[116.67px] !h-[140px] p-2.5 border-blue-500"
							innerstyles="border-4"
						/>
					</div>
				</div>
				<div className="flex justify-center">
					<Button
						component="link"
						href="/sponsorships"
						icon={<RightArrow2 color="#fff" />}
						otherstyles="py-4 w-full"
					>
						Be a sponsor
					</Button>
				</div>
			</div>
			<div className="flex flex-col items-center relative z-10 py-[120px] -mx-[120px]">
				<h3 className="text-center mb-[52px] text-neutral-600 w-fit py-2.5 px-5 border-y-[1.5px] border-fbc_blue-100 text-[28px] leading-[42px] font-semibold">
					Testimonials and Pictures from Previous Editions of FlutterBytes
					Conference
				</h3>
			</div>
			<div className="flex flex-col items-center relative z-10 py-[120px]">
				<h3 className="text-center mb-[52px] heading-text w-fit py-2.5 px-5 border-y-[1.5px] border-fbc_blue-100 text-[28px] leading-[42px] font-semibold">
					Meet the Organizing Committee
				</h3>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-5 md:gap-10 mb-10">
					<div className="flex flex-col items-center">
						<StyledImageContainer />
						<p className="mt-3 mb-1 font-semibold text-neutral-700">
							Jamiu Okanlawon
						</p>
						<p className="text-sm text-neutral-700 text-center">
							Senior Flutter Developer, EdenLife
						</p>
					</div>
					<div className="flex flex-col items-center">
						<StyledImageContainer />
						<p className="mt-3 mb-1 font-semibold text-neutral-700">
							David Adegoke
						</p>
						<p className="text-sm text-neutral-700 text-center">
							Engineering Manager, Raptures Entertainment
						</p>
					</div>
					<div className="flex flex-col items-center">
						<StyledImageContainer />
						<p className="mt-3 mb-1 font-semibold text-neutral-700">
							Mariam Hamzat
						</p>
						<p className="text-sm text-neutral-700 text-center">
							Rich woman with multiple roles
						</p>
					</div>
					<div className="flex flex-col items-center">
						<StyledImageContainer />
						<p className="mt-3 mb-1 font-semibold text-neutral-700">
							+20 other committee members
						</p>
						<p className="text-sm text-neutral-700 text-center">
							Across 10 teams for effective conference planning.
						</p>
					</div>
				</div>
				<div className="self-center flex items-center gap-x-10">
					<Button
						component="link"
						href="/volunteer"
						variant="contained"
						otherstyles="text-base font-semibold py-3 px-5"
						icon={<RightArrow2 color="#fff" />}
					>
						Apply to volunteer
					</Button>
					<Button
						component="link"
						href="/organizers"
						variant="outlined"
						otherstyles="text-base font-semibold py-3 px-5"
						icon={<RightArrow2 />}
					>
						See full committee
					</Button>
				</div>
			</div>
		</section>
	);
}
