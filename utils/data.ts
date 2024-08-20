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
    target: "_blank",
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
    timeline: "8:00am - 5:00pm",
    session: "Coming Soon",
    anchor: "Coming Soon",
    day: "Friday",
    key: `key-${i + 1}`,
  }));

export const fridayAgenda = Array(1)
  .fill("")
  .map((_, i) => ({
    timeline: "8:00am - 5:00pm",
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
    name: "Data Unsent",
    role: "Flutter Developer, FBC",
    image: "https://robohash.org/flutterbyte.png",
    key: `key-${i + 1}`,
  }));

export const committee = Array(8)
  .fill("")
  .map((_, i) => ({
    name: "Data Unsent",
    role: "Flutter Developer, FBC",
    image: "https://robohash.org/flutterbyte.png",
    key: `key-${i + 1}`,
  }));
