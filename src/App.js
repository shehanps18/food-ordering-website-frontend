import './App.css';
import { Navbar } from './component/navbarComponent/Navbar';
//import { Home } from './component/HomeComponent/Home';
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from './component/ThemesComponent/darkTheme';
import { CssBaseline } from '@mui/material';
import RestaurantDetails from './component/restaurantComponent/RestaurantDetails';
import Cart from './component/cartComponent/Cart';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
      <Navbar />
      {/* <Home /> */}
      {/* <RestaurantDetails/> */}
      <Cart/>
      </CssBaseline>
      
    </ThemeProvider>
  );
}

export default App;
