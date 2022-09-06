import lottie from 'lottie-web';
import { useEffect,useRef } from 'react';
import { useGlobalContext } from '../context/Context';
import notfound from '../images/notfound.json'

const NotFound = () => {

    const {notFound,err,noInternet}=useGlobalContext();
  

    const container=useRef(null);

    useEffect(()=>{
        if(container.current){
            const inst=lottie.loadAnimation({
                container:container.current,
                renderer:'svg',
                autoplay: true,
                animationData:notfound
            });
        

            return ()=>inst.destroy();
        }
    },[notFound])
    if(notFound===404 && err && !noInternet){
        return ( 
            <div className="notfound-container" ref={container}>

            </div>
        );
    }
}
 
export default NotFound;