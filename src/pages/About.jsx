// import aboutImage from "../assets/head_shot_sml_v3.jpeg"
// import '../styles/About.css';
import resume from '../assets/slenorovitz-resume.pdf';

function About() {
  return (
    <div className='about'>
      <div className='container'>
        <div className='row box'>
          <div className='col-md-4'>
            <img src="/head_shot_sml_v3.jpeg" alt='image of website owner' className="image-box" />
          </div>
          <div className='col-md-8 '>
            <h1>Hi I'm Stephanie Lenorovitz</h1>
            <p>
              I’m a Full Stack User Experience developer with 8 plus years of design experience, working and consulting for large corporations, startups, e-commerce and consumer brands. I’ve worked for the likes of Ancestry, Apple, Uniqlo, Wal-Mart, NIH among others. With a background in marketing, advertising and graphic design for digital and print platforms. With a well rounded skill set in design and development, I strive to create easy to use and engaging online experiences.
            </p>
          </div>
          <button className='resume'>
            <a href={resume} download="slenorovitz-resume.pdf">
              resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
export default About