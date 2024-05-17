import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <title>Rohit C</title>
      <div className="left">
        <div className="top">
          <div className="name">
            <h1>Rohit C</h1>
          </div>
          <div className="image">
            <Image className="profile" priority={true} src={"/profile.png"} width={300} height={300} alt="Rohit C"/>
          </div>
        </div>
        <div className="bottom">
          <div className="description">
            <p>An enthusiastic and goal-driven Computer Science Engineering student with proficient team player abilities with adequate knowledge in mainstream programming languages seeking for an opportunity to put his potential to full use in the field of software development.</p>
          </div>
          <div className="social">
            <div className="one">
              <Link href={'https://github.com/RO21T'}>
                <Image className="github" priority={true} src={"/github.png"} width={45} height={45} alt="Github"/>
              </Link>
            </div>
            <div className="two">
              <Link href={'https://www.linkedin.com/in/rohit-c-6aa329255/'}>
                <Image className="linkedin" priority={true} src={"/linkedin.png"} width={50} height={45} alt="LinkedIn"/>
              </Link>
            </div>
            <div className="three">
              <Link href={'mailto:rohitc21official@email.com'}>
                <Image className="gmail" priority={true} src={"/gmail.png"} width={50} height={50} alt="Gmail"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="right"></div>
    </>
  );
}
