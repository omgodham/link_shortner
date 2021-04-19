import React from 'react'

function Boosts() {
const boostStyle = () => {
    return {
        background: `hsl(257, 27%, 26%) url('${process.env.PUBLIC_URL}/bg-shorten-desktop.svg')`,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        height:'170px',
        backgroundSize:'100% 100%'
    }
}
const buttonStyle = () => {
    return {
        width:'fit-content',
    padding:'10px 20px',
    backgroundColor:'hsl(180, 66%, 49%)' , 
    border:'none' ,
    borderRadius:'30px' ,
    color:'white' , 
    fontWeight:'700' ,
     fontSize:'17px'}
}
    return (
        <div className='boosts' style={boostStyle()}>
            <h1 style={{color:'white' , fontWeight:'700'}}>Boost your links today</h1>
            <button style={buttonStyle()}>Get Started</button>
        </div>
    )
}

export default Boosts;
