import logo from './logo.svg';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AddItems from '../src/Components/AddItems/AddItems';
import Login from './Components/Auth/Login/Login';
import Signup from './Components/Auth/Signup/Signup';
import Home from './Components/Home/Home';
import Product from './Components/Product/Product';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import MyItems from './Components/MyItems/MyItems';
import { ToastContainer } from 'react-toastify';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import SingleItems from './Components/SingleItems/SingleItems';
import Auth from '../src/Firebase/firebase.init';
import Notfound from './Components/NotFound/Notfound';
import RequireAuth from './Components/Auth/RequireAuth/RequireAuth';
import Blog from './Components/Blog/Blog';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import ManageUser from './Components/ManageUser/ManageUser';
import ManageAllOrders from './Components/ManageAllOrders/ManageAllOrders';
import Profile from './Components/Profile/Profile';
import Review from './Components/Review/Review';
import Portfolio from './Components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/portfolio' element={<Portfolio />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/signup' element={<Signup />} ></Route>
        <Route path='/product' element={<Product />} ></Route>
        <Route path='/singleitems/:id' element={<SingleItems />} ></Route>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='manage_inventory' element={<RequireAuth><ManageInventory />
          </RequireAuth>}></Route>
          <Route path='review' element={<RequireAuth><Review />
          </RequireAuth>}></Route>
          <Route index element={<RequireAuth><Profile />
          </RequireAuth>}></Route>
          <Route path='manage-all-orders' element={<RequireAuth><ManageAllOrders />
          </RequireAuth>}></Route>
          <Route path='manageAllUser' element={<RequireAuth><ManageUser />
          </RequireAuth>}></Route>
          <Route path='my_items' element={<RequireAuth><MyItems /></RequireAuth>}></Route>
          <Route path='additem' element={
            <RequireAuth><AddItems /></RequireAuth>
          }></Route>
        </Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='*' element={<Notfound />} ></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
