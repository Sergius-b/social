import './App.css';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wraper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wraper-content'>
          <Route path='/dialogs'
            component={DialogsContainer} />

          <Route path='/profile/:userId?'
            component={ProfileContainer} />

          <Route path='/users'
            component={UsersContainer} />
           
          <Route path='/login'
            component={Login} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
