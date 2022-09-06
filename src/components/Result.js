import logo from '../images/logo.png'
import {BsLink45Deg,} from 'react-icons/bs'
import {GiPositionMarker} from 'react-icons/gi'
import {FiTwitter} from 'react-icons/fi'
import {CgOrganisation} from 'react-icons/cg'
import { useGlobalContext } from '../context/Context'
import notfound from '../images/notfound.jpeg'


const Result = () => {
    const {data,err,isLoading,notFound,wait,noInternet}=useGlobalContext();  

    if(notFound===404 && err && !noInternet){
        return (<div className="notfound-container">
            <img src={notfound} alt="not found" />
        </div>)
    }

    
    if(data.length!==0 && !noInternet){
        return (
            <div className="result-container">
                <article className='box'>
                    <div className="img-div">
                        <img src={data.avatar_url} alt={logo} />
                    </div>
                    <div className='profile-info'>
                        <h1>{data.name===null ? 'The Octacat':data.name}</h1>
                        <h2>{data.login===null ? 'Octacat':data.login}</h2>
                        <h3>{data.bio===null ? 'This profile has no bio':data.bio}</h3>
                    </div>
                </article>

                <div className="follow-data">
                    <span>
                        <h5>Repo</h5>
                        <h4>{data.public_repos===null ? 'Not':data.public_repos}</h4>
                    </span>

                    <span>
                        <h5>Followers</h5>
                        <h4>{data.followers===null ? 'Not':data.followers}</h4>
                    </span>

                    <span>
                        <h5>Following</h5>
                        <h4>{data.following===null ? 'Not':data.following}</h4>
                    </span>
                </div>

                <footer className="basic-details">
                    <span>
                        <label htmlFor=""><GiPositionMarker/></label>
                        <h3><a href={data.location===null ? 'Not availible':"https://www.google.com/maps/place/"+data.location} >{data.location===null ? 'Not availible':data.location}</a></h3>
                    </span>

                    <span>
                        <label htmlFor=""><FiTwitter/></label>
                        <h3><a href={data.twitter_username===null ? 'Not availible':"https://twitter.com/"+data.twitter_username}>{ data.twitter_username===null ? 'Not availible':data.twitter_username}</a></h3>
                    </span>

                    <span>
                        <label htmlFor=""><BsLink45Deg/></label>
                        <h3><a href="#github-blog" >{data.email===null ? 'Not availible':data.email}</a></h3>
                    </span>
                    <span>
                        <label htmlFor=""><CgOrganisation/></label>
                        <h3><a href={data.organizations_url===null ? 'Not availible':data.organizations_url}>{data.organizations_url===null ? 'Not availible':data.organizations_url}</a></h3>
                    </span>  
                </footer>

            </div>
            
        );
    }
    else if(!noInternet){
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
}
 
export default Result;