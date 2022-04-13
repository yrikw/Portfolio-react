import './About.css';


function About() {
  return (
    <div className="App">
      <a className="button" href={`${process.env.PUBLIC_URL}/Yuriikawa-resume.pdf.png`} target="_blank">RESUME</a>
    </div>
  );
}

export default About;