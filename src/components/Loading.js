import { useEffect } from "react";
import { useGlobalContext } from "../context/Context";
import lottie from "lottie-web";
import loadingLogo from "../images/loading.json";



const Loading = () => {
    const {isLoading}=useGlobalContext();
    useEffect(()=>{
        const inst= lottie.loadAnimation({
            container: document.querySelector(".loading"),
            animationData: loadingLogo,

        });

        return ()=>inst.destroy();
    },[])


    if(isLoading){
        return (
            <section>
                <div className="loading">
                </div>
            </section>
  
        );
    }
}
 
export default Loading;