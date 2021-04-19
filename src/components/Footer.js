import React from 'react';
import './Footer.css';
function Footer() {
    return (
        <div className='footer'> 
            <div className='footer_content'>
            <div className="footer_logo">
                    <h1>Shortly</h1>
            </div>
            <div className='footer_options'>
                <div className="footer_option_block">
                    <ul className="options_list">
                        <li className="option_item">Features</li>
                        <li className="option_item">Link Shortening</li>
                        <li className="option_item">Branded Links</li>
                        <li className="option_item">Analytics</li>
                    </ul>
                </div>
                <div className="footer_option_block">
                    <ul className="options_list">
                        <li className="option_item">Resources</li>
                        <li className="option_item">Blog</li>
                        <li className="option_item">Developers</li>
                        <li className="option_item">Support</li>
                    </ul>
                </div>
                <div className="footer_option_block">
                    <ul className="options_list">
                        <li className="option_item">Company</li>
                        <li className="option_item">About</li>
                        <li className="option_item">Our Team</li>
                        <li className="option_item">Careers</li>
                        <li className="option_item">Contact</li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer
