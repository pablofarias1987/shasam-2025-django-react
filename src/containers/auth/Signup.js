import Layout from '../../hocs/Layout'
import { useState, useEffect } from 'react'
import { Navigate } from 'react-router'
import {connect} from 'react-redux'
import { signup } from '../../redux/actions/auth'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import style from '../../components/Styles/Signup.module.css';

const Signup = ({
  signup,
  isAuthenticated
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

  if(isAuthenticated)
    return <Navigate to="/"/>

  return (
    <Layout>
    <h2 className={style.h2}>Crear cuenta</h2>
<br/>
     
        <form  className={style.form} onSubmit={e=>onSubmit(e)}>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik101"
              className="position-relative"
            >
              <Form.Label htmlFor="first_name" >Nombres</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresar nombres"
                name="first_name"
                value={first_name}
                onChange={e=>onChange(e)}
                required
                
              
              />

</Form.Group>
<Form.Group as={Col} md="4" controlId="vvalidationFormik102">
                         <Form.Label htmlFor="last_name">Apellidos</Form.Label>
                         <Form.Control
                type="text"
                placeholder="Ingresar apellidos"
                name="last_name"
                value={last_name}
                onChange={e=>onChange(e)}
                required
              />

</Form.Group>

            <Form.Group as={Col} md="4" controlId="validationFormikUsername2">
              <Form.Label htmlFor="email">Email</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Ingresar Email"
                  aria-describedby="inputGroupPrepend"
                  name="email"
                  value={email}
                  onChange={e=>onChange(e)}
                  required
                />

              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik103"
              className="position-relative"
            >
              <Form.Label htmlFor="dni">Rut o Dni</Form.Label>
              <Form.Control
                type="text"
                
                placeholder="Ingresar rut o dni"
                name="dni"
                value={dni}
                onChange={e=>onChange(e)}
                required
              />


            </Form.Group>
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik104"
              className="position-relative"
            >
              <Form.Label htmlFor="country">Ciudad</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresar ciudad"
                name="country"
                value={country}
                onChange={e=>onChange(e)}
                required
              />

            </Form.Group>
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik105"
              className="position-relative"
            >
              <Form.Label htmlFor="commune">Comuna</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresar comuna"
                name="commune"
                value={commune}
                onChange={e=>onChange(e)}
                required
              />


            </Form.Group>
          </Row>
          <Row className="mb-3">
          <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik106"
              className="position-relative"
            >
            <Form.Label htmlFor="address">Direccion</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresar direccion"
              required
              value={address}
              name="address"
              onChange={e=>onChange(e)}
          
            />
 
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationFormik07" className="position-relative">
              <Form.Label htmlFor="password">Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresar contraseña"
                name="password"
                value={password}
                onChange={e=>onChange(e)}
                required
              />

            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik08" className="position-relative">
              <Form.Label htmlFor="re_password">Repetir contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Reingresar contaseña"
                name="re_password"
                value={re_password}
                onChange={e=>onChange(e)}
                required
              />

            </Form.Group>
            </Row>
          {/* <Form.Group className="position-relative mb-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik106"
              feedbackTooltip
            />
          </Form.Group> */}
          <Button variant="info" type="submit">Registrarse</Button>
        </form>
      
   
    </Layout>
  )
}
const mapStateToProps = state => ({
  isAuthenticated: state.Auth.isAuthenticated

})

export default connect(mapStateToProps, {
  signup
}) (Signup)