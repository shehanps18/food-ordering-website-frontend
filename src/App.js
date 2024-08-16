import './App.css';
import { Navbar } from './component/navbarComponent/Navbar';
//import { Home } from './component/HomeComponent/Home';
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from './component/ThemesComponent/darkTheme';
import { CssBaseline } from '@mui/material';
import RestaurantDetails from './component/restaurantComponent/RestaurantDetails';
import Cart from './component/cartComponent/Cart';
import Profile from './component/profileComponent/Profile';
import { CustomerRouter } from './component/routerComponent/CustomerRouter';
import { useDispatch, useSelector } from 'react-redux';
import { store } from './component/status/Store';
import { useEffect } from 'react';
import { getUser } from './component/status/authentication/Action';


function App() {
  const dispatch=useDispatch()
  const jwt=localStorage.getItem("jwt")
  const {auth}= useSelector(store=>store)
  useEffect(()=>{
    dispatch(getUser(auth.jwt||jwt))
  },[auth.jwt,dispatch])
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
     
      <CustomerRouter/> 
      </CssBaseline>
      
    </ThemeProvider>
  );
}

export default App;
