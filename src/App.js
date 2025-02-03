import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ThankYou from './containers/pages/ThankYou';
import Home from './containers/Home';
import Error404 from './containers/errors/Error404';
import Dashboard from './containers/pages/Dashboard';
import Login from './containers/auth/Login';
import Signup from './containers/auth/Signup';
import Activate from './containers/auth/Activate';
import ResetPassword from './containers/auth/ResetPassword';
import ResetPasswordConfirm from './containers/auth/ResetPasswordConfirm';
import Programs from './containers/pages/Programs';
import About from './containers/pages/About';
import Treatments from './containers/pages/Treatments';
import Index2 from './containers/pages/Index2';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Error Display */}
          <Route path="*" element={<Error404/>}/>

          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/home' element={<Home/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/activate/:uid/:token' element={<Activate/>}/>
          <Route exact path='/reset_password' element={<ResetPassword/>} />
          <Route exact path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm/>} />
          <Route exact path='/dashboard' element={<Dashboard/>}/>

          <Route exact path='/index2' element={<Index2/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/programs' element={<Programs/>}/>
          <Route exact path='/treatments' element={<Treatments/>}/>
          <Route exact path='/thankyou' element={<ThankYou/>}/>

          </Routes>
          </Router>
    </Provider>
  );
}

export default App;
