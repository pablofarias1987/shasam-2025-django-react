import Layout from '../../../hocs/Layout'
import style from '../../../components/Styles/Treatments.module.css';


export default function Pills() {

    return(<Layout>
        <div className={style.div_1}>
            <h2 className={style.h2_2}>Shasam especialistas en la adicción a las pastillas</h2>
            <p className={style.p2}> Las benzodiacepinas o psicofármacos, conocidos popularmente como pastillas, son drogas legales que acostumbran a aparecer en la vida del adicto a través de preinscripción médica.
            <br></br><br></br>Las pastillas generan tolerancia, que es lo que ayuda a desarrollar la adicción. Además, producen síndrome de abstinencia cuando queremos dejarlas, lo que deriva en ansiedad, irritabilidad, alteración del sueño, comportamiento obsesivo etc. por eso se hace realmente complicado prescindir de ellas sin ayuda profesional. Juntos vamos a conseguir, por fin, que te libres de su dependencia.
            </p>
            <h2 className={style.h2_2}>RECUERDA</h2>
            <p className={style.p2}>No finalizar tu dependencia a las pastillas te genera ansiedad, apatía e irritabilidad. No ser capaz de dejar los psicofármacos te aleja de tus seres queridos. El abuso de las pastillas puede conducirte a otras adicciones.
            </p>
        </div>

    </Layout>)

}
    
    