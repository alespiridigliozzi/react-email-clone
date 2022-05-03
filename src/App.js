import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import EmailsContainer from './Containers/EmailsContainer/EmailsContainer';
import { EmailsProvider } from './Context/EmailsContext';
import {data} from './data/data'

function App() {
  return (
    <EmailsProvider>
      <div className="App">
      <Navbar />
      <main className='main-container'>
        <Sidebar />
        <EmailsContainer />
      </main>
      </div>
    </EmailsProvider>
  );
}

export default App;
