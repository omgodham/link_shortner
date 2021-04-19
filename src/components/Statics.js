import React,{useState} from 'react';
import axios from 'axios';
import './Statics.css'
function Statics() {
    const [link, setLink] = useState('');
    const [currentId, setCurrentId] = useState(1);
    const [links , setLinks] = useState([]);

    const handleClick = async () => {
     const response = await axios.get(`https://api.shrtco.de/v2/shorten?url=${link}`);
     setLinks([...links , {link:link , shortenLink :response.data.result.full_short_link }]);
     setLink("");
            }

    return (
        <div className='statistics'>
             <div className='shorten_block' style={{background: `hsl(257, 27%, 26%) url('${process.env.PUBLIC_URL}/bg-shorten-desktop.svg')`}}>
            <input type="text" className="shorten_input" placeholder='Shorten link here...' required value={link} onChange={(event)=> setLink(event.target.value)}/>
            <button className="shorten_btn" onClick={handleClick}>Shorten It!</button>
            </div>
            { links.map((link,index) => {
                    return <div className='shorten_links' key={index}>
                <span>{link.link.length > 35 ?  link.link.substring(0,35) : link.link}{link.link.length > 35 ?  '...' : ''}</span>
                <span id='shorten_link'>{link.shortenLink}</span>
                <button onClick={ () => {
                    navigator.clipboard.writeText(link.shortenLink);
                    document.getElementById(`btn${index}`).style.backgroundColor='hsl(260, 8%, 14%)';
                    document.getElementById(`btn${index}`).innerHTML = 'Copied';
                    document.getElementById(`btn${currentId}`).style.backgroundColor='hsl(180, 66%, 49%)';
                    document.getElementById(`btn${currentId}`).innerHTML = 'Copy';
                    setCurrentId(index);
                } } id={`btn${index}`}>Copy</button>
            </div>
                })
            }
            
          
            <div className='statistics_title'>
                <h1>Advanced Statistics</h1>
                <p>Track now your links are performing across the web with our advanced statistics dashboard.</p>
            </div>
            <div className='statistics_blocks'>
                <div className='statistics_card'>
                    <img src='\icon-brand-recognition.svg' />
                    <h3>Brand Recognition</h3>
                    <p>Boost your brand recognition with each click. Generic links don't mean a thing click. Branded links help insttll confidence in your content.</p>
                </div>
                <div className='statistics_card'>
                    <img src='\icon-detailed-records.svg' />
                    <h3>Detailed Records</h3>
                    <p>Boost your brand recognition with each click. Generic links don't mean a thing click. Branded links help insttll confidence in your content.</p>
                </div>
                <div className='statistics_card'>
                    <img src='\icon-fully-customizable.svg' />
                    <h3>Fully Customizable</h3>
                    <p>Boost your brand recognition with each click. Generic links don't mean a thing click. Branded links help insttll confidence in your content.</p>
                </div>
                
            </div>
            <hr className='horizontal_line'></hr>
        </div>
    )
}

export default Statics
