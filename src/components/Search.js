import {Button} from 'react-bootstrap';
import {FaSearch} from 'react-icons/fa'


const Search = () => {
    return ( 
        <div className="search-bar">
            <form >
                <label htmlFor="id"><FaSearch/></label>
                <input type="text" id='id' placeholder="Search github username "/>
                <Button type='submit'>
                    Search
                </Button>
            </form>
        </div>
     );
}
 
export default Search;
