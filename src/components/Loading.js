import { useEffect,useRef } from "react";
import { useGlobalContext } from "../context/Context";
import lottie from "lottie-web";
import loadingLogo from "../images/loading.json";



const Loading = () => {
    const {isLoading}=useGlobalContext();
    const container=useRef(null);

    useEffect(()=>{
        if(container.current){
            const inst=lottie.loadAnimation({
                container:container.current,
                renderer:'svg',
                autoplay: true,
                animationData:loadingLogo
            });
        
            return ()=>inst.destroy();
        }
    },[isLoading])

        return (
            <section>
                <div className="loading" ref={container}>
                </div>
            </section>
  
        );
    
}
 
export default Loading;