export const links1 = [
	{
		value: "Apply to speak",
		link: "/speakers-application",
	},
	{
		value: "Apply to volunteer",
		link: "/volunteer",
	},
	{
		value: "About us",
		link: "/about",
	},
	{
		value: "Be a sponsor",
		link: "/sponsorships",
	},
];

export const links2 = [
	{
		value: "Event Agenda",
		link: "/agenda",
	},
	{
		value: "Gallery & Testimonials",
		link: "#gallery",
	},
	{
		value: "Speakers",
		link: "/speakers",
	},
	{
		value: "Organising committee",
		link: "/organisers",
	},
];

let i = 1;

export const saturdayAgenda = Array(14)
	.fill("")
	.map((_, i) => ({
		timeline: "10:03pm 8:04am",
		session:
			"Flutter for Enterprise: Scaling and Integrating with Existing Systems",
		anchor: "Rebecca Omolabake, Christopher Nwosu-Madueke",
		day: "Friday",
		key: `key-${i + 1}`,
	}));

export const fridayAgenda = Array(5)
	.fill("")
	.map((_, i) => ({
		timeline: "10:03pm 8:04am",
		session:
			"Flutter for Enterprise: Scaling and Integrating with Existing Systems",
		anchor: "Rebecca Omolabake, Christopher Nwosu-Madueke",
		day: "Friday",
		key: `key-${i + 1}`,
	}));
