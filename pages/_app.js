import React from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

import '../css/styles.css'

const MyApp = ({ Component, pageProps }) => {
    return (
        <div className="m-1">
            <div>
                <Header />
                <Menu />
                <div className='relative h-full'>
                <Component {...pageProps} />
                </div>
                <Footer />
            </div>
        </div>
    )
}
export default MyApp