import Layout from '../../../hocs/Layout'
import style from '../../../components/Styles/Treatments.module.css';


export default function Cannabis() {

    return(<Layout>

        <div className={style.div_1}>
            <h2 className={style.h2_2}>Shasam expertos en la adicción al cannabis</h2>
            <p className={style.p2}> El cannabis es la droga más fumada después del tabaco y la sustancia ilegal más consumida por los jóvenes.
            <br></br><br></br>Fumar porros genera rápidamente dependencia y es causa de brotes psicóticos y daños cerebrales, entre otros. Consideramos al cannabis como una droga alucinógena o con la capacidad de alterar la percepción, con muchos efectos negativos tanto a corto como a largo plazo. Con esfuerzo es posible liberarse de la dependencia que crea.
            </p>
            <h2 className={style.h2_2}>RECUERDA</h2>
            <p className={style.p2}>No finalizar tu relación con los porros te genera depresión, apatía y desilusión por el futuro. No ser capaz de dejar los porros puede llevarte a sufrir daños cerebrales, pérdidas de memoria y alucinaciones. No acabar con tu adicción al cannabis supone un malgasto económico.
            </p>
        </div>
    </Layout>)

}
    
    