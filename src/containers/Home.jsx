import Layout from '../hocs/Layout'
import style from '../components/Styles/Home.module.css';
import {connect} from 'react-redux'
import img from '../image/bglanding.jpg';

import { Link } from 'react-router-dom';

function Home({isAuthenticated}) {


    return(<Layout>
        <div className={style.div2}>
        {/* <img src={img} className={style.img2} alt="h"></img> */}
        {/* <p className={style.p1}> Comienza tu terapia
        hoy mismo...</p> */}
            {isAuthenticated?<p></p>:
            <Link to="/signup">
            <br></br>
              <button
                className={style.button2}
                size=""
              >
                Recibe orientación gratis!!
              </button>
            </Link>}

</div>
        </Layout>)
}


  const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user})

export default connect(mapStateToProps,{

}) (Home)