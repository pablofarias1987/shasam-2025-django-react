
import { Link } from "react-router-dom"



  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
const DashboardLink =()=>{
    return(
        <div><button>
            <Link
            to="/"
            className={classNames('text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                'group flex items-center px-2 py-2 text-base font-medium rounded-md'
            )}
            >

            Volver a inicio
            </Link></button>
            
          
        </div>
    )
}

export default DashboardLink