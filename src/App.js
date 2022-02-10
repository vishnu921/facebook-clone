import './App.css';
import Login from './auth/login/Login';
import Feed from './components/Feed/Feed';
import Widgets from './components/Feed/Widgets';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {

  const user = null;

  return (
    <div className="app">

      {!user ? (
        <Login />
      ) : (
        <>
          <Header />

          <div className="main-body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
