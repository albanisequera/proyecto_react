import './App.css';
import Appbar from './Components/Appbar/Appbar';
import Navegationbar from './Components/Navegationbar/Navegationbar';
import Backgroundimage from './Components/Backgroundimage/Backgroundimage';
import Footer from './Components/Footer/Footer';
import ImageSlider from './Components/Slider/ImageSlider';
import SliderData from './SliderData';
import { Switch, BrowserRouter as Router, Route, BrowserRouter, Link } from "react-router-dom";
import SignIn from "./Components/Sign/Signin";
import SignUp from "./Components/Sign/Signup";
import Nosotros from "./Components/Pages/Nosotros/Nosotros";
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { actionTypes } from "./reducer";
import Traduccion from './Components/Pages/Cursos/Traduccion/Traduccion';
import Interpretacion from './Components/Pages/Cursos/Interpretacion/Interpretacion';
import Fwa from './Components/Pages/Diplomados/Fwa/Fwa';
import Bridgingthegap from './Components/Pages/Diplomados/Bridgingthegap/Bridgingthegap';
import Courtinterpreter from './Components/Pages/Diplomados/Courtinterpreter/Courtinterpreter';
import Efenglish from './Components/Pages/Diplomados/Efenglish/Efenglish';
import Hipaa from './Components/Pages/Diplomados/Hippa/Hipaa';
import Blogs from './Components/Pages/Blog/blogs';
import CabeceraBlog from './Components/Pages/Blog/CabeceraBlog';
import Products from './Pagescheck/Products';
import CheckoutPage from './Pagescheck/CheckoutPage';
import Checkout from './Components/ProcessOrder/Checkout';

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: actionTypes.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className='app'>
      <Router>
        <header>
          <link to='/'>
          </link>
        </header>
        <Appbar />
        <Switch>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path='/signin'>
            <SignIn />
          </Route>
          <Route path='/nosotros'>
            <Navegationbar />
            <Nosotros />
          </Route>
          <Route path='/traduccion'>
            <Navegationbar />
            <Traduccion />
          </Route>
          <Route path='/interpretacion'>
            <Navegationbar />
            <Interpretacion />
          </Route>
          <Route path='/bridgingthegap'>
            <Navegationbar />
            <Bridgingthegap />
          </Route>
          <Route path='/courtinterpreter'>
            <Navegationbar />
            <Courtinterpreter />
          </Route>
          <Route path='/efenglish'>
            <Navegationbar />
            <Efenglish />
          </Route>
          <Route path='/Hipaa'>
            <Navegationbar />
            <Hipaa />
          </Route>
          <Route path='/fwa'>
            <Navegationbar />
            <Fwa />
          </Route>
          <Route path='/blog'>
            <Navegationbar />
            <CabeceraBlog />
            <Blogs />
          </Route>
          <Route path='/product'>
            <Navegationbar />
            <Products />
          </Route>
          <Route path='/checkout-page'>
            <Navegationbar />
            <CheckoutPage />
          </Route>
          <Route path='/checkout'>
            <Checkout />
          </Route>
          <Route path='/'>
            <Navegationbar />
            <Backgroundimage />
            <ImageSlider slides={SliderData} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
