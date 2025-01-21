import Layout from '../../hocs/Layout'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { login } from '../../redux/actions/auth'
import Loader from 'react-loader-spinner'
import { Navigate } from 'react-router'

const Login = ({
  login,
  loading
}) => {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { 
    email,
    password,
  } = formData;

  const [activated, setActivated] = useState(false);

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e =>{
    e.preventDefault();
    login(email, password);
    setActivated(true);
  }

  if (activated)
    return <Navigate to='/' />;

  return (
    <Layout>
      <div className=" ">
        <div className=" ">
          <img
            className=" "
            src=" "
            alt=" "
          />
          <h2 className=" ">Sign in to your account</h2>
          <p className=" ">
            Or{' '}
            <Link to="/signup" className=" ">
              register
            </Link>
          </p>
        </div>

        <div className=" ">
          <div className=" ">
            <form onSubmit={e=>onSubmit(e)} className="space-y-6">
              <div>
                <label htmlFor="email" className=" ">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    name="email"
                    value={email}
                    onChange={e=>onChange(e)}
                    type="email"
                    required
                    className=" "
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className=" ">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    name="password"
                    value={password}
                    onChange={e=>onChange(e)}
                    type="password"
                    required
                    className=" "
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                {/* <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div> */}

                <div className="text-sm">
                  <Link to="/reset_password" className=" ">
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <div>
                {loading ? 
                <button
                className=" "
              >
                <Loader
                type="Oval"
                color="#fff"
                width={20}
                height={20}
                />
              </button>:
              <button
              type="submit"
              className=" "
            >
              Login
            </button>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}
const mapStateToProps = state => ({
  loading: state.Auth.loading
})

export default connect(mapStateToProps, {
  login
}) (Login)