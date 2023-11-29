import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({
    headerTitle: "Our Services",
    mainParagraph:
      "Dedicated space or programs designed to cultivate empathy and understanding among individuals towards the challenges faced by people with disabilities in using technology and interacting with various environments.",
    image: {
      src: "./images/services.png",
      alt: "Empower Ability Labs Logo",
    },
    services: {
      empathy: {
        heading: "Empathy Lab days and workshops",
        paragraph:
          "The lab days and workshops typically provide hands-on experiences, simulations, and interactions with assistive technologies, tools, and scenarios that replicate the obstacles individuals with disabilities encounter daily.",
      },
      inspirational: {
        heading: "Inspirational speakers",
        paragraph:
          "Invite a speaker with disabilities to take share their unique journey. This captivating addition to your upcoming event will offer insights that resonate, inspire, educate, and enrich your team collective understanding of inclusion.",
      },
      usability: {
        heading: "Usability testing",
        paragraph:
          "Go beyond WCAG! Involve individuals with disabilities in usability testing to gather valuable insights for refining product strategy and identifying accessibility concerns at an early stage when solutions are more feasible and cost-effective. You have access to a diverse community of people with disabilities, who use various assistive technologies. With technical expertise ranging from novice to expert, our community can support your product lifecycle from user research, to design, to QA.",
      },
    },
  });
}
