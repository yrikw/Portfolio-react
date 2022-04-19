import './About.css';


function About() {
  return (
    <div className="About">
      <a className="button" href={`${process.env.PUBLIC_URL}/Yuriikawa-resume.pdf.png`} target="_blank">RESUME</a>
      <ul>
        <li><a href="https://www.linkedin.com/in/yuri-ikawa-b78227189/">LINKEDIN</a></li>
        <li><a href="https://github.com/yrikw">GITHUB</a></li>
        <li><a href="https://www.instagram.com/_freshpear/">INSTAGRAM</a></li>
        <li><a href="mailto:mbcrhc@gmail.com">E-MAIL</a></li>
      </ul>
    </div>
  );
}

export default About;