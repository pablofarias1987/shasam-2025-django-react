import Layout from '../../../hocs/Layout'
import style from '../../../components/Styles/Treatments.module.css';


export default function Technology() {

    return(<Layout>

        <div className={style.div_1}>
            <h2 className={style.h2_2}>Shasam Expertos en adicciones a redes sociales, Internet, étc.</h2>
            <p className={style.p2}> La tecnología está cada vez más presente en nuestras vidas, existe un alto riesgo de crear un hábito y dependencia que hará que dejemos nuestras obligaciones y responsabilidades creando un problema a nuestra salud y entorno.
            La adicción a las redes sociales y a los videojuegos está escalando muy rápidamente en el ranking de adicciones más comunes. La depresión o la dependencia de likes para equilibrar nuestro autoestima son síntomas muy comunes y negativos relacionados con las redes.
            </p>
            <h2 className={style.h2_2}>RECUERDA</h2>
            <p className={style.p2}>No ser capaz de pasar el día sin móvil, ordenador o tablet te aleja de tus obligaciones y responsabilidades básicas. Comparar tu vida con la versión idealizada en redes de otras personas produce depresión. Pasar horas jugando te aleja de la vida real y de tus seres queridos.
            </p>
        </div>
    </Layout>)

}
    
    