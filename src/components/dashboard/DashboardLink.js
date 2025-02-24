
import { Link } from "react-router-dom"

import style from '../../components/Styles/Dashboard.module.css';

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
const DashboardLink =()=>{
    return(
      <Link
      to="/"
      
      >
        <button className={style.button1}>


            Volver a inicio
            </button></Link>
            
          
        
    )
}

export default DashboardLink