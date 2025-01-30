import Layout from '../../hocs/Layout'
import style from '../../components/Styles/About.module.css';
import img from '../../image/about.jpeg';
export default function About() {

    return(
        <Layout>
        <img className={style.banner2}></img>
        <div className={style.div}>
            
        <h1 className={style.h1}>¿Quiénes Somos?</h1>
      
        <p className={style.p}><img className={style.img} src={img}alt="" />
        Somos una plataforma 100% online terapéutica llamada Shasam, con un modelo de carácter religioso, dedicada a la prevención, rehabilitación y adaptación social de jóvenes y adultos con problemas de drogodependencia, alcoholismo y marginación.
        <br/><br/>Hemos desarrollado un intenso y dedicado trabajo en el tratamiento de personas con problemáticas de alcohol y drogodependientes en una fase online, con duración de 9 meses.
        </p><br/>
        <h1 className={style.h1}>Nuestro Equipo</h1>
        <p className={style.p}> En SHASAM contamos con un equipo multidiciplinario compuesto por Psicólog@s, Psiquiatras, Monitores de apoyo, Asistente social y Técnicos en rehabilitación. </p>
        </div>
    </Layout>)
}

