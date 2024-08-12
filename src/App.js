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


function App() {
  // const dispatch=useDispatch()
  // const jwt=localStorage.getItem("jwt")
  // useEffect(()=>{
  //   dispatch(getUser(jwt))
  // },[])
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
      {/* <Navbar /> */}
      {/* <Home /> */}
      {/* <RestaurantDetails/> */}
      {/* <Cart/> */}
      {/* <Profile/> */}
      <CustomerRouter/> 
      </CssBaseline>
      
    </ThemeProvider>
  );
}

export default App;
