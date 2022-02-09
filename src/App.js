import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
      <Header />

      <div className="main-body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
