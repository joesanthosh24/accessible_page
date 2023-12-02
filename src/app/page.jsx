export default function Home() {
  return (
    <>
      <div className="headingContent">
        <div className="container">
          <h1>Welcome to Empower Ability Labs!</h1>
          <p>
            Empower Ability Labs is a hub for learning and empathy-building. We
            are on a mission to foster understanding and promote inclusive
            digital experiences for all. We offer a range of services designed
            to promote accessibility awareness, drive inclusivity, and enhance
            the user experience. And help you find answers on How do people with
            disabilities use technology and navigate the digital world? What
            tools do they employ?
          </p>
        </div>
      </div>

      <div className="container">
        <h2 className="community">Meet The Empower Community</h2>
        <div className="row">
          <div className="col-md-4">
            <h3>Our Approach</h3>
            <p>
              Empower Ability Labs utilizes a hands-on approach to raise
              awareness and promote empathy. Our immersive workshops and lab
              days provide participants with a unique opportunity to step into
              the shoes of individuals with disabilities and navigate the world
              from their perspective.
            </p>
            <a
              href="https://www.google.com/search/howsearchworks/our-approach/"
              target="_blank"
              title="Our Approach"
            >
              Learn More
            </a>
          </div>
          <div className="col-md-4">
            <h3>Services</h3>
            <p>
              Promote accessibility awareness and enhance the user experience.
            </p>
            <ul className="pl-3">
              <li>Empathy lab days and workshops.</li>
              <li>Go beyond WCAG compliance!</li>
              <li>Inspirational speakers.</li>
            </ul>
            <a
              href="https://www.elevenways.be/en/services"
              target="_blank"
              title="Services"
            >
              Learn More
            </a>
          </div>
          <div className="col-md-4">
            <h3>Testimonials</h3>
            <p>
              Invite a speaker with disabilities to share their unique journey.
              This captivating addition to your upcoming event will offer
              insights that resonate, inspire, educate, and enrich your team’s
              understanding of inclusion.
            </p>
            <a
              href="https://dictionary.cambridge.org/us/dictionary/english/testimonial"
              target="_blank"
              title="Testimonials"
            >
              Learn More
            </a>
          </div>
        </div>

        <hr />
      </div>
    </>
  );
}
