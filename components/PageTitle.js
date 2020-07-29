import React from 'react'
import Head from 'next/head'

const PageTitle = ({ title }) => {
  return (
    <Head>
      <title>{title} - Catedral Da Trindade</title>
    </Head>
  )
}
export default PageTitle
