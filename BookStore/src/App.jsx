//import React from 'react';
import Home from './pages/Home';
import Navibar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AllBooks from './pages/AllBooks';
import AboutUs from './pages/AboutUs';
import Collection from './pages/Collection';
import BookDetails from './components/BookDetails/BookDetails';
import Profile from './pages/Profile';
import { useEffect } from 'react';
import { authActions } from './store/auth';
import { useDispatch, useSelector } from 'react-redux';
import Favorites from './components/Profile/Favorites';
import Status from './components/Profile/Status';
import Settings from './components/Profile/Settings';
import Summary from './pages/Summary';
import AddBook from './pages/AddBook';
import UpdateBook from './pages/UpdateBook';
import BookStatus from './pages/BookStatus';
import StartReading from './pages/StartReading';
import Payement from './components/Payment/Payment';
 

const App = () => {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.auth.role);
  useEffect(() => {
    if (
      localStorage.getItem('id') &&
      localStorage.getItem('token') &&
      localStorage.getItem('role')
    ) {
      dispatch(authActions.login());
      dispatch(authActions.changeRole(localStorage.getItem('role'))); 
    }
  },[]);

  return (
    <div> 
     
        <Navibar />
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/allbooks" element={<AllBooks />} />
          <Route  path="/login" element={<Login />} />
          <Route  path="/signup" element={<SignUp />} /> 
          <Route  path="/aboutus" element={<AboutUs />} />
          <Route  path="/collection" element={<Collection />} />
          <Route  path="/book-details/:id" element={<BookDetails />} />
          <Route  path="/update-book/:id" element={<UpdateBook />} />
          <Route path="/payement" element={<Payement />} />
          <Route  path="/start-reading/:id" element={<StartReading />} />
          <Route  path="/profile" element={<Profile />} >
            {role === 'user' ? <Route  index element={<Favorites />} /> 
              : <Route  index element={<Summary />} />
            }
            {role === 'admin' && <Route  path="/profile/addbook" element={<AddBook />} />}
            <Route  path="/profile/bookstatus" element={<BookStatus />} />
            
            <Route  path="/profile/status" element={<Status />} />
            <Route  path="/profile/settings" element={<Settings />} />
          </Route>	
        </Routes>
        <Footer />
      
    </div>
  );
};

export default App;
