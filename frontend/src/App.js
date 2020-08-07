import React from 'react';
import './index.css';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import HomePage from './components/HomePage';
import DetailPage from './components/DetailPage';
import CartPage from './components/CartPage';
import LoginPanel from './components/LoginPanel';
import SignUpPanel from './components/SignUpPanel';
import ShippingPage from './components/ShippingPage';
import PaymentPage from './components/PaymentPage';
import { useSelector } from 'react-redux';
import PlaceOrderPage from './components/PlaceOrderPage';
import ConfirmationPage from './components/ConfirmationPage';
import OrdersPage from './components/OrdersPage'
import BrandDetailPage from './components/BrandDetailPage'
import LandingPage from './components/LandingPage'

function App(){

  const userSignin = useSelector(state =>state.userSignin);
  const { userInfo } = userSignin;
  console.log("this is user info",userInfo)

  const openMenu =()=>{
    document.querySelector(".sidebar").classList.add("open");
  }

  const handleCartButton =()=>{

  }

  const closeMenu =()=>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  return(
    <BrowserRouter>
    <div className="grid-container">
            <header className="header">
                <div className="brand">
                    <button className="button-menu" onClick={openMenu}>&#9776;</button>
                    <Link to="/" className="header__title">My Sneakers</Link>
                </div>
                <div className="header-links">
                  <Link to={`/cart`}>
                     <button>Cart</button>
                  </Link>

                     {userInfo ? <Link to="/">Welcome {userInfo.user.firstName}</Link>: <Link to="/signin">Sign In</Link>}


                </div>
            </header>
            <aside className="sidebar">
               <div className="sidebar_data">
                  <div>
                     <button className="sidebar-close-button"onClick={closeMenu}>close</button>
                  </div>
                  <div>
                     <div className="main-body-contact">Developer Info</div>
                  </div>
                  <div className="sidebar__info">
                     <div className="sidebar__name">GIANCARLO SANCHEZ</div>
                     <a className="sidebar__info-email" href="https://www.linkedin.com/in/giancarlo-sanchez-6b28301aa/">giancarlo.sanchez.developer@gmail.com</a>
                     <div className="sidebar__info-phone">
                        <div>📱</div>
                        <div>405 365 7708</div>
                     </div>
                     <div className="sidebar__info-phone">
                        <div>🏙️</div>
                        <div>Oklahoma City</div>
                     </div>
                     {/* <div>OKLAHOMA</div> */}
                     <div className="sidebar__git-block">
                        <a href="https://github.com/giancarlo-sanchez">
                           <div className="sidebar__git-info">
                              <img
                                 alt="giancarlo"
                                 src="https://avatars2.githubusercontent.com/u/60968129?s=460&u=40626fc20a0de43bd1d1fd02c3cb2549e97c4109&v=4"
                                 className="footer__profile-pic"
                              ></img>
                              <div>GitHub repo</div>
                           </div>
                        </a>
                     </div>



                  </div>
               </div>

            </aside>

            <main className="main">
              <div className="content">
                <Route path="/signin" exact={true} component={LoginPanel}/>
                <Route path="/register" exact={true} component={SignUpPanel}/>
                <Route path="/shipping" component={ShippingPage} />
                <Route path="/payment" component={PaymentPage} />
                <Route path="/orders/users/:id" component={OrdersPage} />
                <Route path="/placeorder" component={PlaceOrderPage} />
                <Route path="/confirmation" component={ConfirmationPage} />
                <Route path="/sneakers/:id" exact={true} component={DetailPage}/>
                <Route path="/brands/:id" exact={true} component={BrandDetailPage}/>
                <Route path="/cart/:id?" exact={true} component={CartPage}/>
                <Route path="/catalog" exact={true} component={HomePage}/>
                <Route path="/" exact={true} component={LandingPage}/>
              </div>

          </main>
            <footer className="footer">
               <div>My Sneakers ©️</div>
               <a href="https://github.com/giancarlo-sanchez">
               <img
                  alt="giancarlo"
                  src="https://avatars2.githubusercontent.com/u/60968129?s=460&u=40626fc20a0de43bd1d1fd02c3cb2549e97c4109&v=4"
                  className="footer__profile-pic"
               ></img>
               </a>
            </footer>
      </div>
    </BrowserRouter>
  )
}

export default App;
