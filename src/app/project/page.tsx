import "../../styles/project.css";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="project" className="project-section">
      <h1 className="">Latest Projects</h1>
      <div className="project-main">
        <Link href="https://myresume-builder.vercel.app/" target="_blank">
        <div className="content">
            <div className="image-container">
            <Image
                    src="/resume-builder.avif"
                    alt="Resume Builder Project"
                    height={300}
                    width={300}
                    className="project-image"
                />
            </div>

        </div>
    </Link>
    <Link href="https://coffee-website-pied.vercel.app/" target="_blank">
        <div className="content">
            <div className="image-container">
            <Image
                    src="/cafe.avif"
                    alt="Resume Builder Project"
                    height={300}
                    width={300}
                    className="project-image"
                />
            </div>
        </div>
    </Link>
    <Link href="https://github.com/AreebaAijaz" target="_blank">
        <div className="content">
            <div className="image-container">
            <Image
                    src="/npm5.PNG"
                    alt="Resume Builder Project"
                    height={300}
                    width={300}
                   className="project-image"
                />
            </div>
            </div>
    </Link>

      </div>
    </section>
  );
}
