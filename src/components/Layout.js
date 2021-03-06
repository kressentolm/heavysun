import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Web Dev / Design / Media" />
    <Navbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
