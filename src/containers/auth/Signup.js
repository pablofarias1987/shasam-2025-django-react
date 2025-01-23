import Layout from '../../hocs/Layout'
import { useState, useEffect } from 'react'

import {connect} from 'react-redux'
import { signup } from '../../redux/actions/auth'


import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

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

     
        <Form  onSubmit={e=>onSubmit(e)}>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik101"
              className="position-relative"
            >
              <Form.Label htmlFor="first_name" >Nombre</Form.Label>
              <Form.Control
                type="text"
                name="first_name"
                value={first_name}
                onChange={e=>onChange(e)}
                
              
              />

</Form.Group>
<Form.Group as={Col} md="4" controlId="vvalidationFormik102">
                         <Form.Label htmlFor="last_name">Apellido</Form.Label>
                         <Form.Control
                type="text"
                name="last_name"
                value={last_name}
                onChange={e=>onChange(e)}
              />

</Form.Group>

            <Form.Group as={Col} md="4" controlId="validationFormikUsername2">
              <Form.Label htmlFor="email">Email</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  aria-describedby="inputGroupPrepend"
                  name="email"
                  value={email}
                  onChange={e=>onChange(e)}
   
                />

              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik103"
              className="position-relative"
            >
              <Form.Label htmlFor="dni">Rut o Dni</Form.Label>
              <Form.Control
                type="text"
                placeholder="Dni"
                name="dni"
                value={dni}
                onChange={e=>onChange(e)}
     
              />


            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationFormik104"
              className="position-relative"
            >
              <Form.Label htmlFor="country">Ciudad</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ciudad"
                name="country"
                value={country}
                onChange={e=>onChange(e)}
          
              />

            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationFormik105"
              className="position-relative"
            >
              <Form.Label htmlFor="commune">Comuna</Form.Label>
              <Form.Control
                type="text"
                placeholder="Comuna"
                name="commune"
                value={commune}
                onChange={e=>onChange(e)}
    
              />


            </Form.Group>
          </Row>
          <Row className="mb-3">
          <Form.Group
              as={Col}
              md="3"
              controlId="validationFormik106"
              className="position-relative"
            >
            <Form.Label htmlFor="address">Direccion</Form.Label>
            <Form.Control
              type="text"
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
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={e=>onChange(e)}
                
              />

            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik08" className="position-relative">
              <Form.Label htmlFor="re_password">Repetir contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Repetir contaseña"
                name="re_password"
                value={re_password}
                onChange={e=>onChange(e)}
       
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
        </Form>
      
   
    </Layout>
  )
}
const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {
  signup
}) (Signup)