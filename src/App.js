import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search';
import Result from './components/Result';
import Internet from './components/Internet';
import Loading from './components/Loading';

function App() {
  return (
    <main className='main-container'>
        <Search/>
        <Result/>
        <Internet/>
        <Loading/>
    </main>
  );
}

export default App;
