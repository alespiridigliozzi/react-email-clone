import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import EmailsContainer from './Containers/EmailsContainer/EmailsContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className='main-container'>
        <Sidebar />
        <EmailsContainer />
      </main>
    </div>
  );
}

export default App;
