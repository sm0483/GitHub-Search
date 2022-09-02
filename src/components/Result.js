import logo from '../images/logo.png'
import {BsLink45Deg} from 'react-icons/bs'
import {GiPositionMarker} from 'react-icons/gi'
import {FiTwitter} from 'react-icons/fi'
import {CgOrganisation} from 'react-icons/cg'


const Result = () => {
    return (
        <div className="result-container">
      

            <article className='box'>
                <div className="img-div">
                    <img src={logo} alt={logo} />
                </div>
                <div className='profile-info'>
                    <h1>The Octacat</h1>
                    <h2>Octacat</h2>
                    <h3>This profile has no bio</h3>
                </div>
            </article>

            <div className="follow-data">
                <span>
                    <h5>Repo</h5>
                    <h4>8</h4>
                </span>

                <span>
                    <h5>Followers</h5>
                    <h4>5646</h4>
                </span>

                <span>
                    <h5>Following</h5>
                    <h4>9</h4>
                </span>
            </div>

            <footer className="basic-details">
                <span>
                    <label htmlFor=""><GiPositionMarker/></label>
                    <h3><a href="#add">address</a></h3>
                </span>

                <span>
                    <label htmlFor=""><FiTwitter/></label>
                    <h3><a href="#twitter">Not Availible</a></h3>
                </span>

                <span>
                    <label htmlFor=""><BsLink45Deg/></label>
                    <h3><a href="#github-blog">link</a></h3>
                </span>
                <span>
                    <label htmlFor=""><CgOrganisation/></label>
                    <h3><a href="#webpage">Blog</a></h3>
                </span>  
            </footer>

        </div>

      );
}
 
export default Result;