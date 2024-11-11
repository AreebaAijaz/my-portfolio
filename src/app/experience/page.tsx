import "../../styles/experience.css";
import Image from "next/image";

export default function Experience() {
  return (
    <section id="services" className="exp-sec">
      <div className="break">
        <hr />
      </div>
      <main className="mainbar">
        <p>What I have done so far</p>
        <h1>Work Experience</h1>
        <div className="container">
          <div className="box">
            <div className="vertical">
              <div className="title">
                <h5>HTML Developer (2020-21)</h5>
              </div>
              <div className="description">
                <p>
                  Building well-structured and responsive web pages using HTML5.
                  Focused on creating accessible and organized content to
                  support seamless styling and interactivity.
                </p>
              </div>
            </div>
            <div className="vertical">
              <div className="title">
                <h5>Javascript Developer (2022-23)</h5>
              </div>
              <div className="description">
                <p>
                  Exploring TypeScript to bring clarity and reliability to
                  JavaScript code. Building skills in type safety and structure
                  to create scalable and maintainable web applications.
                </p>
              </div>
            </div>
            <div className="vertical">
              <div className="title">
                <h5>Next.Js Developer (2024-25)</h5>
              </div>
              <div className="description">
                <p>
                  Learning Next.js to build fast, responsive web applications.
                  Developing foundational skills in server-side rendering,
                  routing, and seamless page transitions for a smooth user
                  experience.
                </p>
              </div>
            </div>
            <div className="vertical">
              <div className="title">
                <h5>UI/UX Design (2024-onwards)</h5>
              </div>
              <div className="description">
                <p>
                  Exploring UI/UX design principles to create user-friendly,
                  visually appealing interfaces. Focusing on basic design
                  patterns, layout balance, and understanding user flow for
                  intuitive experiences.
                </p>
              </div>
            </div>
            <div className="vertical">
              <div className="title">
                <h5>Git & Version Control Basics (2024)</h5>
              </div>
              <div className="description">
                <p>
                  Learning to manage and track code changes with Git, keeping
                  projects organized and collaborating effectively. Version
                  control helps me maintain clean, trackable code while
                  improving team workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
