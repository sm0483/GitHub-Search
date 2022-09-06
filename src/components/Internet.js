import { useGlobalContext } from "../context/Context";
import internetLogo from "../images/internet.json";
import { useEffect,useRef } from "react";
import lottie from 'lottie-web';

const Internet = () => {
    const {noInternet}=useGlobalContext();
    const container=useRef(null);


    useEffect(()=>{
        if(container.current){
            const inst=lottie.loadAnimation({
                container:container.current,
                renderer:'svg',
                autoplay: true,
                animationData:internetLogo
            });

        return ()=>inst.destroy();
     }
    },[noInternet])
        if(noInternet){
            return (
                <div className="internet" ref={container}>
                </div>
            
            );
        }
}
 
export default Internet;