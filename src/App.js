import './App.css';
import { Header } from './components/Header/Header';
import "../src/assets/css/animate.min.css"
import "../src/assets/css/bootstrap.min.css"
import "../src/assets/css/font-awesome.min.css"
import "../src/assets/css/jquery-ui.css"
import "../src/assets/css/jquery.fancybox.min.css"
import "../src/assets/css/jquery.mCustomScrollbar.min.css"
import "../src/assets/css/meanmenu.css"
import "../src/assets/css/nice-select.css"
import "../src/assets/css/normalize.css"
import "../src/assets/css/owl.carousel.min.css"
import "../src/assets/css/responsive.css"
import "../src/assets/css/slick.css"
import "../src/assets/css/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-loading-skeleton/dist/skeleton.css'
// import {HomePage} from "./components/Pages/HomePage"
// import { Route, Routes } from 'react-router-dom';
// import { SingleTravel } from './components/SingleTravel/SingleTravel';
// import { Footer } from './components/Footer/Footer';
// import { About } from './components/About/About';
// import { Travel } from './components/Travel/Travel';
// import { SignUp } from './components/SignUp/SignUp';
// import { Login } from './components/Login/Login';
import { useAuth } from './hook/hook';
import { PublicPage } from './components/Public/PublicPage';
import { PrivatePage } from './components/Private/PrivatePage';





function App() {
  const {token} = useAuth()
  return (

    <>
  {token ? <PrivatePage/> : <PublicPage/>}    


    <div className="App">
      
    </div>
    </>
  );
}

export default App;
