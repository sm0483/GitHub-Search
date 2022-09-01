import logo from '../images/logo.png'

const Result = () => {
    return (
        <div className="result-container">
      

            <article className='box'>
                <div className="img-div">
                    <img src={logo} alt="github " />
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
                    <h4>4648</h4>
                </span>

                <span>
                    <h5>Following</h5>
                    <h4>9</h4>
                </span>
            </div>

            <div className="basic-details">
                <h3><a href="#address">san frase</a></h3>
                <h3><a href="#twitter">Not Availible</a></h3>
                <h3><a href="#github-blog">link</a></h3>
                <h3><a href="#address">Orkut</a></h3>
                
            </div>

        </div>

      );
}
 
export default Result;