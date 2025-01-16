import '../../styles/Navbar.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { logout } from '../../redux/actions/auth'
import { Fragment, useEffect, useState } from 'react'
import { Navigate } from 'react-router'


function Navbar ({
  isAuthenticated,
  user,
  logout
}){
  const [redirect, setRedirect] = useState(false);
  const logoutHandler = () => {
    logout()
    setRedirect(true);
  }

  if (redirect){
    window.location.reload(false)
    return <Navigate to='/' />;
  }

  const authLinks = (
    <>
      <div>
        <button className="inline-flex justify-center w-full rounded-full  text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
            <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </span>
        </button>
      </div>
  <div
  as={Fragment}
  enter="transition ease-out duration-100"
  enterFrom="transform opacity-0 scale-95"
  enterTo="transform opacity-100 scale-100"
  leave="transition ease-in duration-75"
  leaveFrom="transform opacity-100 scale-100"
  leaveTo="transform opacity-0 scale-95"
>
  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
    <div className="py-1">
      <>
        {({ active }) => (
          <Link
            to="/dashboard"
            className={(
              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
              'block px-4 py-2 text-sm'
            )}
          >
            Dashboard
          </Link>
        )}
      </>
      
      
      <form method="POST" action="#">
        <>
          {({ active }) => (
            <button
              onClick={logoutHandler}
              className={(
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block w-full text-left px-4 py-2 text-sm'
              )}
            >
              Sign out
            </button>
          )}
        </>
      </form>
    </div>
  </div>
</div>
</>
)

const guestLinks = (
<Fragment>
<Link to="/login" className="text-base font-medium text-gray-500 hover:text-gray-900">
  Sign in
</Link>
<Link
  to="/signup"
  className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
>
  Sign up
</Link>
</Fragment>
)
    return (
      <nav className="navbar">
        <div className="navbar-logo">SHASAM</div>
        <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/signup">Registrarse</Link></li>
        <li><Link to="/login">Iniciar secion</Link></li>
        </ul>


        <form method="POST" action="#">

  {({ active }) => (
    <button
      onClick={logoutHandler}
      className={(
        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
        'block w-full text-left px-4 py-2 text-sm'
      )}
    >
      Sign out
    </button>
  )}
{
                isAuthenticated ? authLinks:guestLinks
              }
</form>

      </nav>


    );
  
}
  const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user

  })

  export default connect(mapStateToProps,{
    logout

  }) (Navbar)