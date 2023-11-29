import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({
    headerTitle: "Welcome to Empower Ability Labs!",
    mainParagraph:
      "Empower Ability Labs is a hub for learning and empathy-building. We are on a mission to foster understanding and promote inclusive digital experiences for all. We offer a range of services designed to promote accessibility awareness, drive inclusivity, and enhance the user experience. And help you find answers on How do people with disabilities use technology and navigate the digital world? What tools do they employ?",
    empowerCommunity: "Meet The Empower Community",
    rowContent: {
      approach: {
        heading: "Our Approach",
        paragraph:
          "Empower Ability Labs utilizes a hands-on approach to raise awareness and promote empathy. Our immersive workshops and lab days provide participants with a unique opportunity to step into the shoes of individuals with disabilities and navigate the world from their perspective.",
        link: {
          href: "https://www.google.com/search/howsearchworks/our-approach/",
          title: "Our Approach",
        },
      },
      services: {
        heading: "Services",
        paragraph:
          "Promote accessibility awareness and enhance the user experience.",
        link: {
          href: "https://www.elevenways.be/en/service",
          title: "Services",
        },
        listItems: [
          { content: "Empathy lab days and workshops." },
          { content: "Go beyond WCAG compliance!" },
          { content: "Inspirational speakers." },
        ],
      },
      testimonials: {
        heading: "Testimonials",
        paragraph:
          "Invite a speaker with disabilities to share their unique journey. This captivating addition to your upcoming event will offer insights that resonate,  inspire, educate, and enrich your team’s understanding of inclusion.",
        link: {
          href: "https://dictionary.cambridge.org/us/dictionary/english/testimonial",
          title: "Testimonials",
        },
      },
    },
  });
}
