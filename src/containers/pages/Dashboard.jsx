import Layout from '../../hocs/Layout'
import { connect } from 'react-redux'

import { useEffect } from 'react';
import { Navigate } from 'react-router';
import DashboardLink from '../../components/dashboard/DashboardLink';
import { Fragment, useState } from 'react'
import Alert from '../../components/alert'

import { Link } from 'react-router-dom';



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Dashboard =({

    isAuthenticated,
    user
})=>{

  const [open, setOpen] = useState(false);

  

    if(!isAuthenticated)
        return <Navigate to="/"/>

    return (
        <Layout>
      <>


          <main className="flex-1">
            <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
            <div className="max-w-3xl mx-auto">
            <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">Bienveni@ a Shasam</h3>
        <span className="flex-grow">{user.first_name} {user.last_name}</span>
      </div>
      <div className="mt-5 border-t border-gray-200">
        <dl className="divide-y divide-gray-200">
 

          
          <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <span className="flex-grow">{user.email}</span>
              
            </dd>
          </div>

         
        </dl>
      </div>
            </div>
            </div>
            <DashboardLink/>
            </div>
          </main>
         
</>
<Alert/>
</Layout>)
}

const mapStateToProps =state=>({

    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user
})

export default connect(mapStateToProps,{

}) (Dashboard)