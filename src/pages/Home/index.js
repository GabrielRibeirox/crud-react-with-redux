import React from 'react'
import Header from '../../components/Header'
import Form from '../../components/Form'

import ContentPost from '../../components/ContentPost'
import './index.scss';

export default function Home() {
  return (
    <>
      <div className="content">
        <Header />
        <div className="content-question">
          <h1>What’s on your mind? </h1>
          <Form />
        </div>
        <ContentPost />
      </div>
    </>
  )
}
