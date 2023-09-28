import resume from '../assets/slenorovitz-resume.pdf';
import "../styles/Resume.css"

function Resume() {
    return (
        <div>
            <div className="resume-container">
            <h1>Front-End:</h1>
            <p>React
                Javascript
                Jquery
                HTML5
                CSS3
            </p>
            <h1>Back-End:</h1>
            <p>MySql <br/>
                Sequelize <br/>
                MongoDB <br/>
                GraphQL 
            </p>
            <h1>Other:</h1>
            <p>JWT
                Postman<br/>
                Compass <br/>
                Insomnia <br/>
                Apollo Sandbox
            </p>
            <h1>Deployment:</h1>
            <p>GitHub 
                Github pages <br/>
                Heroku <br/>
                Netlify <br/>
            </p>
            <button className='resume'>
            <a href={resume} download="slenorovitz-resume.pdf">
              Download my resume
            </a>
          </button>
            </div>
        </div>
    )
}
export default Resume