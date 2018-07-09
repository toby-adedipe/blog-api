import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ()=>{
    return(
        <div className="footer">
            <ul>
                <li><Link to="/">Home page</Link></li>
                <li><Link to="/articles">Articles</Link></li>
                <li><Link to="/bookmarked">Bookmarked</Link></li>
            </ul>
        </div>
    )
}

export default Footer;