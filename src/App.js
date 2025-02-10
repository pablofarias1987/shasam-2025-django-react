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
import Alcohol from './containers/pages/treatments/Alcohol'
import Cannabis from './containers/pages/treatments/Cannabis';
import Cocaine from './containers/pages/treatments/Cocaine';
import Gambling_addiction from './containers/pages/treatments/Gambling_addiction';
import Pills from './containers/pages/treatments/Pills';
import Sex from './containers/pages/treatments/Sex';
import Technology from './containers/pages/treatments/Technology';
import Base_Paste from './containers/pages/treatments/Base_Paste';



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
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/alcohol' element={<Alcohol/>}/>
          <Route exact path='/cocaine' element={<Cocaine/>}/>
          <Route exact path='/gambling_addiction' element={<Gambling_addiction/>}/>
          <Route exact path='/pills' element={<Pills/>}/>
          <Route exact path='/sex' element={<Sex/>}/>
          <Route exact path='/technology' element={<Technology/>}/>
          <Route exact path='/base_paste' element={<Base_Paste/>}/>
          <Route exact path='/cannabis' element={<Cannabis/>}/>
          <Route exact path='/programs' element={<Programs/>}/>
          <Route exact path='/treatments' element={<Treatments/>}/>
          <Route exact path='/thankyou' element={<ThankYou/>}/>

          </Routes>
          </Router>
    </Provider>
  );
}

export default App;
