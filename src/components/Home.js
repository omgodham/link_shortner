import React from 'react'
import FrontPage from './FrontPage';
import Statics from './Statics';
import Boosts from './Boosts';
import Footer from './Footer';
function Home() {
    return (
        <div className='home'>
           {/* FrontPage */}
            <FrontPage />
           {/* Statics */}
            <Statics />
            {/* Boosts */}
            <Boosts />
           {/* footer */}
           <Footer />
        </div>
    )
}
export default Home
