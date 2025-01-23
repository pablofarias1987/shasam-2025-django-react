import { Link } from "react-router-dom"


  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
const DashboardLink =()=>{
    return(
        <>
            <Link
            to="/dashboard"
            className={classNames('text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                'group flex items-center px-2 py-2 text-base font-medium rounded-md'
            )}
            >
            <div
                className={classNames(
                'mr-4 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500',
                )}
                aria-hidden="true"
            />
            Dashboard
            </Link>
            
          
        </>
    )
}

export default DashboardLink