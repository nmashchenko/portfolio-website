import teameights from "../assets/images/works/teameights.png";
import candymarket from "../assets/images/works/candymarket.png";
import jeauto from "../assets/images/works/jeauto.png";

export const projects = [
  {
    title: "Teameights",
    description:
      "Web-based platform for student developers to find each other and work together on pet projects, tournaments between teams, duels between members, mentorships, AI code review and more.",
    technologies: ["react", "mongodb", "nestjs"],
    image: teameights,
  },
  {
    title: "Candy Market",
    description:
      "A serverless candy marketplace providing real-time updates. With a sleek interface, we cater to candy enthusiasts by offering a diverse range of delectable treats. Award-winning project, born out of a hackathon",
    technologies: ["react", "postgresql", "supabase"],
    image: candymarket,
  },
  {
    title: "JeAuto",
    description:
      "An online platform catering to the automotive needs of the Czech Republic, our web-based marketplace for cars offers an extensive array of vehicles to suit every discerning buyer. Cool UI!",
    technologies: ["react", "mongodb", "nodejs"],
    image: jeauto,
  },
];
