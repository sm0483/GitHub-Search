import { useGlobalContext } from "../context/Context";
import internet from '../images/internet.webp'

const Internet = () => {
    const {noInternet}=useGlobalContext();
        if(noInternet){
            return (
                <div className="internet">
                    <img src={internet} alt="" />
                </div>
            );
        }
}
 
export default Internet;