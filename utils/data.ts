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
    value: "Organizing committee",
    link: "/organizers",
  },
];

export const saturdayAgenda = Array(1)
  .fill("")
  .map((_, i) => ({
    timeline: "8:00am 5:00pm",
    session: "Coming Soon",
    anchor: "Coming Soon",
    day: "Friday",
    key: `key-${i + 1}`,
  }));

export const fridayAgenda = Array(1)
  .fill("")
  .map((_, i) => ({
    timeline: "8:00am 5:00pm",
    session: "Coming Soon",
    anchor: "Coming Soon",
    day: "Friday",
    key: `key-${i + 1}`,
  }));

export const currentSpeakers = Array(1)
  .fill("")
  .map((_, i) => ({
    name: "Speaker 1",
    role: "This can be you",
    image: "https://robohash.org/flutterbyte.png",
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
