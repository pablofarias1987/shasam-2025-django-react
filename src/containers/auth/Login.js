import Layout from '../../hocs/Layout'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { login } from '../../redux/actions/auth'
import { Navigate } from 'react-router'
import Loader from 'react-loader-spinner'
import style from '../../components/Styles/Login.module.css';


const Login = ({
  login,
  loading,
  isAuthenticated,
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

  if(isAuthenticated)
    return <Navigate to="/"/>
  return (
    <Layout>

        <div className={style.css_form}>
          <div class={style.login_container}>
          <form onSubmit={e=>onSubmit(e)} class={style.login_form}>
            <h2 className={style.h2}>Iniciar con tu cuenta</h2>
            <p className={style.p1}>
            O{' '}
            <Link to="/signup" className=" ">
              Registarse
            </Link>
          </p>
            <div class={style.input_group}>
                <label htmlFor="email">Usuario</label>
                <input type="email" id="formGroupEmail" value={email} name="email" onChange={e=>onChange(e)}  placeholder="Ingresa tu Email" required/>
            </div>
            <div class="input-group">
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" value={password}onChange={e=>onChange(e)} name="password" placeholder="Ingresa tu contraseña" required/>
            </div>
            <div className="text-sm">
                  <Link to="/reset_password" className=" ">
                  ¿Olvidaste tu contraseña?
                  </Link>
                </div>
                <div>
                {loading ? 
                <button
                class={style.login_btn}
              >
                <Loader
                type="Oval"
                color="#fff"
                width={20}
                height={20}
                />
              </button>:
            <button type="submit" class={style.login_btn}>Iniciar sesion</button>
            }
            </div>
        </form>
    </div></div>

            
  
    </Layout>
  )
}
const mapStateToProps = state => ({
  loading: state.Auth.loading,
  isAuthenticated: state.Auth.isAuthenticated
})

export default connect(mapStateToProps, {
  login
}) (Login)