import {Button} from 'react-bootstrap';
import {FaSearch} from 'react-icons/fa'
import { useGlobalContext } from '../context/Context';


const Search = () => {
    const {getData,search,setSearch,setIsLoading}=useGlobalContext();

    const searchButton=(e)=>{
        getData(e);
        setIsLoading(true);
    }
    
    return ( 
        <div className="search-bar">
            <form>
                <label htmlFor="id"><FaSearch/></label>
                <input type="text" id='id' placeholder="Search github username " value={search} onChange={(e)=>setSearch(e.target.value)}/>
                <Button type='submit' onClick={(e)=>searchButton(e)}>
                    Search
                </Button>
            </form>
        </div>
     );
}
 
export default Search;
