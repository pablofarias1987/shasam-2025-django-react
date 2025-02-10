import Layout from '../../hocs/Layout'
import {useParams} from 'react-router'
import { useState } from 'react'
import { connect } from 'react-redux'
import { activate } from '../../redux/actions/auth'
import { Navigate } from 'react-router'
import style from '../../components/Styles/Login.module.css';

import Loader from 'react-loader-spinner'

const Activate = ({
  activate,
  loading
}) =>{
    const params = useParams()
    const [activated, setActivated] = useState(false);

    const activate_account = () => {
      const uid = params.uid
      const token = params.token
      activate(uid, token);
      setActivated(true);
    }

    if (activated && !loading)
    return <Navigate to='/' />;
    
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
          <div className="max-w-3xl mx-auto">
          
          {loading ? 
          <button className={style.login_btn}
          >
            <Loader
            type="Oval"
            color="#fff"
            width={20}
            height={20}
            />
          </button>:
          <button
          onClick={activate_account}
          className={style.login_btn}
        >
          Activate Account
        </button>
        }

      
          </div>
        </div>
      </Layout>
    )
  }

  const mapStateToProps = state => ({
    loading: state.Auth.loading
  })
  
  export default connect(mapStateToProps,{
    activate
  }) (Activate)