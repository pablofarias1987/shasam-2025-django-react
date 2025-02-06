import {Fragment} from 'react'
import {connect} from 'react-redux'
import style from './Styles/Navbar.module.css';


function Alert ({ alert }) {

    const displayAlert = () => {
        if (alert !== null){
            return (
                <div className={style.alert.alertType}>
                <div className={style.div_3}>
                    <div className={style.div_3}>
                    <i className={style.alert.alertType} aria-hidden="true" />
                    </div>
                    <div className={style.div_3}>
                    <p className={style.alert}>{alert.msg}</p>
                    </div>
                </div>
                </div>
            )
        } else {
            return(
                <Fragment></Fragment>
            )
        }
    }

    return (
        <Fragment>
            {displayAlert()}
        </Fragment>
    )
}

const mapStateToProps = state => ({
    alert: state.Alert.alert
})

export default connect(mapStateToProps)(Alert)