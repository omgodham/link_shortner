import React from 'react'
import './FrontInfo.css'
function FrontInfo() {
    return (
        <div className='frontInfo'>
            <div className="frontInfo_content">
                <div className="frontInfo_left">
                    <p className='title'>More than just shorter links</p>
                    <p className='description'>Build your brand's recognition and get detiled insights on how your links are performing</p>
                    <button>Get Started</button>
                </div>
            <div className="frontInfo_right">
                <img className='info_image' src='/illustration-working.svg' />
            </div>
            </div>
           
        </div>
    )
}

export default FrontInfo
