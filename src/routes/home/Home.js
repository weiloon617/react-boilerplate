import React from 'react'
import { Link } from 'react-router-dom'

// Redux
import { connect } from 'react-redux'

// Component
import Layout from '../../components/layout/Layout'

const Home = props => {
  return (
    <Layout>
      <p>Hello World of React and Webpack {props.global.testing}</p>
      <p>
        <Link to="/dynamic">Navigate to Dynamic Page</Link>
      </p>
    </Layout>
  )
}

const mapStateToProps = state => {
  const { global } = state
  return { global }
}

export default connect(mapStateToProps)(Home)
