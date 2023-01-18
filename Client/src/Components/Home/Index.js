import React from 'react'
import Footer from '../Footer/Footer'
import Intro from './Components/Intro'
import Mission from './Components/Mission'
import Vision from './Components/Vision'

function Home() {
    return (
        <>
            <Intro />
            <Vision />
            <Mission />
            <Footer />
        </>
    )
}

export default Home