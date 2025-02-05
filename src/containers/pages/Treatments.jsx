
import { Link } from 'react-router-dom';
import Layout from '../../hocs/Layout'
import style from '../../components/Styles/Treatments.module.css';
import alcohol from '../../image/alcohol.png'
import cannabis from '../../image/cannabis.png'
import cocaina from '../../image/cocaina.png'
import pastillas from '../../image/pastillas.png'
import tecnologia from '../../image/tecnologia.png'
import sexo from '../../image/sexo.png'
import ludopatia from '../../image/ludopatia.png'
import pasta_base from '../../image/pasta_base.png'


export default function Treatments() {

    return(<Layout>
        <div className={style.div2}>      
             <h1 className={style.t1}>Tratamientos</h1>
             <div className={style.flex1}>
        <div>
        <Link to='/alcohol'>
       <img src={alcohol}className={style.circle} alt="alcohol"/>
       </Link>
       <p className={style.p1}>Alcohol</p>
      </div>

       <div>
       <Link to="/">
       <img src={cannabis} className={style.circle} alt="cannabis"/>
       </Link>
       <p className={style.p1}>Cannabis</p>
       </div>
       <div>
       <Link to="/">
       <img src={cocaina} className={style.circle} alt="cocaina"/>
       </Link>
       <p className={style.p1}>Cocaína</p>
       </div>

       <div>
       <Link to="/">
       <img src={pastillas} className={style.circle} alt="pastillas"/>
       </Link>
       <p className={style.p1}>Pastillas</p>
       </div>
       <div>
       <Link to="/">
       <img src={tecnologia} className={style.circle} alt="tecnologia"/>
       </Link>
       <p className={style.p1}>Tecnología</p>
       </div>
       <div>
       <Link to="/">
       <img src={sexo} className={style.circle} alt="sexo"/>
       </Link>
       <p className={style.p1}>Sexo</p>
       </div>
       <div>
       <Link to="/">
       <img src={ludopatia} className={style.circle} alt="ludopatia"/>
       </Link>
       <p className={style.p1}>Ludopatía</p>
       </div>
       <div>
       <Link to="/">
       <img src={pasta_base} className={style.circle} alt="pasta base"/>
       </Link>
       <p className={style.p1}>Pasta Base</p>
       </div>

       </div>
       </div>
        </Layout>)
}

