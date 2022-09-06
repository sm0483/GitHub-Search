import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search';
import Result from './components/Result';
import Internet from './components/Internet';
import Loading from './components/Loading';
import NotFound from './components/NotFound';
import { useGlobalContext } from './context/Context';

function App() {
  const {notFound,noInternet} =useGlobalContext();
  if(notFound===404){
    return(
      <main className="main-container">
        <Search/>
        <NotFound/>
      </main>
    )
  }

  if(noInternet){
    return (
      <main className="main-container">
      <Search/>
      <Internet/>
    </main>
    )
  }

  return (
    <main className='main-container'>
        <Search/>
        <Result/>
        <Loading/>
    </main>
  );
}

export default App;
