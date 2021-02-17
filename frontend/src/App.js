import React from "react"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useRouteMatch,
  useParams
} from "react-router-dom"

import Account from "./pages/Account"
import Favorites from "./pages/Favorites"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Order from "./pages/Order"
import OrderHistory from "./pages/OrderHistory"
import OrderSummary from "./pages/OrderSummary"
import OrderTracking from "./pages/OrderTracking"
import Payment from "./pages/Payment"
import PickupInfo from "./pages/PickupInfo"
import Reviews from "./pages/Reviews"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import StoreInfo from "./pages/StoreInfo"

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/order">Order</Link>
          </li>
          <li>
            <Link to="/orderhistory">Order History</Link>
          </li>
          <li>
            <Link to="/ordertracking">Order Tracking</Link>
          </li>
          <li>
            <Link to="/payment">Payment</Link>
          </li>
          <li>
            <Link to="/pickupinfo">Pickup Info</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/storeinfo">Store Info</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/orderhistory">
            <OrderHistory />
          </Route>
          <Route path="/ordersummary">
            <OrderSummary />
          </Route>
          <Route path="/ordertracking">
            <OrderTracking />
          </Route>
          <Route path="/pickupinfo">
            <PickupInfo />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/reviews">
            <Reviews />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/storeinfo">
            <StoreInfo />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
