import Layout from '../../hocs/Layout'
import style from '../../components/Styles/Index2.module.css';
import img from '../../image/bglanding.jpg';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function Index2() {

    return(<Layout>
        <div className={style.div2}>
        {/* <img src={img} className={style.img2} alt="h"></img> */}
        {/* <p className={style.p1}> Comienza tu terapia
        hoy mismo...</p> */}
            <Link to="/signup">
            <br></br>
              <button
                className={style.button2}
                size=""
              >
                Recibe orientación gratis!!
              </button>
            </Link>

</div>
        </Layout>)
}

