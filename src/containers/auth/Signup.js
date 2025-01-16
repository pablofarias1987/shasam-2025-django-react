import Layout from '../../hocs/Layout'
import { useState, useEffect } from 'react'

import {connect} from 'react-redux'
import { signup } from '../../redux/actions/auth'

const Signup = ({
  signup
}) => {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  const [accountCreated, setAccountCreated] = useState(false);

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    dni: '',
    country: '',
    commune: '',
    address: '',
    password: '',
    re_password: ''
  })

  const { 
    first_name,
    last_name,
    email,
    dni,
    country,
    commune,
    address,
    password,
    re_password
  } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e =>{
    e.preventDefault();
    signup(first_name, last_name, email, dni, country, commune, address, password, re_password);
    setAccountCreated(true);
    window.scrollTo(0,0)
  }

  return (
    <Layout>
      <div className="">
        <div className="">
          <img
            className=""
            src=""
            alt=""
          />
          <h2 >Register</h2>
          
        </div>

        <div >
          <div>
            <form onSubmit={e=>onSubmit(e)} className="">
              <div>
                <label htmlFor="first_name" className=" ">
                  First Name
                </label>
                <div className="">
                  <input
                    name="first_name"
                    value={first_name}
                    onChange={e=>onChange(e)}
                    type="text"
                    required
                    className=" "
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last_name" className=" ">
                  Last Name
                </label>
                <div className="">
                  <input
                    name="last_name"
                    value={last_name}
                    onChange={e=>onChange(e)}
                    type="text"
                    required
                    className=" "
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className=" ">
                  Email address
                </label>
                <div className="">
                  <input
                    name="email"
                    value={email}
                    onChange={e=>onChange(e)}
                    type="email"
                    required
                    className=""
                  />
                </div>
              </div>
              <div className="">
              <label htmlFor="dni" className=" ">
                  Rut o Dni
                </label>
                <div className="">
                  <input
                    name="dni"
                    value={dni}
                    onChange={e=>onChange(e)}
                    type="text"
                    required
                    className=" "
                  />
                </div>
              </div>
              <div className="">
              <label htmlFor="country" className=" ">
                  country
                </label>
                <div>
                  <input
                    name="country"
                    value={country}
                    onChange={e=>onChange(e)}
                    type="text"
                    required
                    className=" "
                  />
                </div>
              </div>
              <div>
              <label htmlFor="commune" className=" ">
                  comuna
                </label>
                <div className="">
                  <input
                    name="commune"
                    value={commune}
                    onChange={e=>onChange(e)}
                    type="text"
                    required
                    className=" "
                  />
                </div>
              </div>
              <div>
              <label htmlFor="address" className=" ">
                  direccion
                </label>
                <div className="">
                  <input
                    name="address"
                    value={address}
                    onChange={e=>onChange(e)}
                    type="text"
                    required
                    className=" "
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    name="password"
                    value={password}
                    onChange={e=>onChange(e)}
                    type="password"
                    required
                    className=""
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="password" className=" ">
                  Repeat Password
                </label>
                <div className="mt-1">
                  <input
                    name="re_password"
                    value={re_password}
                    onChange={e=>onChange(e)}
                    type="password"
                    required
                    className=" "
                  />
                </div>
              </div>


              <div>
                <button
                  type="submit"
                  className=" "
                >
                  Register
                </button>
              </div>
            </form>

            
          </div>
        </div>
      </div>
    </Layout>
  )
}
const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {
  signup
}) (Signup)