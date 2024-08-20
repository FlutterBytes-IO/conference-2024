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
		value: "FlutterBytes Hackathon",
		link: "https://drive.google.com/file/d/1fy53GKvSgOuhk6ZqjcWthuhFCHVomHve/view?usp=sharing",
		target: "_blank"
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
		value: "Organizing committee",
		link: "/organizers",
	},
];

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

export const currentSpeakers = Array(8)
	.fill("")
	.map((_, i) => ({
		name: "Rebecca Omolabake",
		role: "Senior Flutter Developer, EdenLife",
		image: "/images/Avatar.png",
		key: `key-${i + 1}`,
	}));

export const pastSpeakers = Array(8)
	.fill("")
	.map((_, i) => ({
		name: "Rebecca Omolabake",
		role: "Senior Flutter Developer, EdenLife",
		image: "/images/Avatar.png",
		key: `key-${i + 1}`,
	}));

export const committee = Array(8)
	.fill("")
	.map((_, i) => ({
		name: "Rebecca Omolabake",
		role: "Senior Flutter Developer, EdenLife",
		image: "/images/Avatar.png",
		key: `key-${i + 1}`,
	}));
