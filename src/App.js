import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import EmailsContainer from './Containers/EmailsContainer/EmailsContainer';
import {data} from './data/data'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className='main-container'>
        <Sidebar emailCount={data.length}/>
        <EmailsContainer />
      </main>
    </div>
  );
}

export default App;
