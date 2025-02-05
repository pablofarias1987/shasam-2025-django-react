import Layout from '../../hocs/Layout'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { login } from '../../redux/actions/auth'
import { Navigate } from 'react-router'
import Loader from 'react-loader-spinner'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import style from '../../components/Styles/Login.module.css';


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
          <h2 className=" ">Iniciar con tu cuenta</h2>
          <p className=" ">
            O{' '}
            <Link to="/signup" className=" ">
              Registarse
            </Link>
          </p>
        </div>

        <div className=" ">
          <div className=" ">
          
          <Form onSubmit={e=>onSubmit(e)}>
              <Form.Group as={Col} md="3" controlId="formGroupEmail">
                <Form.Label htmlFor="email">Email</Form.Label>
                  <Form.Control type="email" value={email} name="email"
                    onChange={e=>onChange(e)} placeholder="Ingresar email" required />
               </Form.Group>
               <Form.Group as={Col} md="3" controlId="formGroupPassword" className="position-relative">
                <Form.Label htmlFor="password">Contraseña</Form.Label>
                  <Form.Control type="password"   name="password"
                    value={password}
                    onChange={e=>onChange(e)} placeholder="Ingresar contraseña" required />
              </Form.Group>
                <div className="text-sm">
                  <Link to="/reset_password" className=" ">
                  ¿Olvidaste tu contraseña?
                  </Link>
                </div>
                <Button variant="dark" type="submit">Iniciar sesion</Button>
          </Form>
  


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