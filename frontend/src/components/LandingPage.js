import React from 'react'
import {Link} from 'react-router-dom'

function LandingPage(props){
    return <ul className="landing-page">
        <li>
            <Link to={`/catalog`}>
                <div>
                <img src="https://i.postimg.cc/vmhKLJhH/background.png" alt="catalog"/>
                </div>

            </Link>
        </li>
        <li>
            <Link to={`/brands/1`}>
            <div>
                <img src="https://i.postimg.cc/Pqmjb97H/adidas8.png" alt="catalog"/>
            </div>
            </Link>
        </li>
        <li>
            <Link to={`/brands/2`}>
            <div>
                <img src="https://i.postimg.cc/LX6zBKsg/converse5.jpg" alt="catalog"/>
            </div>
            </Link>
        </li>
        <li>
            <Link to={`/brands/3`}>
            <div>
                <img src="https://i.postimg.cc/ydvyw6GT/nb3.jpg" alt="catalog"/>
            </div>
            </Link>
        </li>
        <li>
            <Link to={`/brands/4`}>
            <div>
                <img src="https://i.postimg.cc/ZRVXVSFG/nike-3.png" alt="catalog"/>
            </div>
            </Link>
        </li>
        <li>
            <Link to={`/brands/5`}>
            <div>
                <img src="https://i.postimg.cc/Y2DJFtSg/reebook6.jpg" alt="catalog"/>
            </div>
            </Link>
        </li>
        <li>
            <Link to={`/brands/6`}>
            <div>
                <img src="https://i.postimg.cc/90w1Z5xt/puma-1.png" alt="catalog"/>
            </div>
            </Link>
        </li>
        <li>
            <Link to={`/brands/7`}>
            <div>
                <img src="https://i.postimg.cc/d0X51V6t/jordan-1.png" alt="catalog"/>
            </div>
            </Link>
        </li>
        <li>
            <Link to={`/brands/8`}>
            <div>
                <img src="https://i.postimg.cc/8zXHKzqB/vans-1.png" alt="catalog"/>
            </div>
            </Link>
        </li>
        <li>
            <Link to={`/brands/9`}>
            <div>
                <img src="https://i.postimg.cc/vm0ngphq/asics-wllppr2.png" alt="catalog"/>
            </div>
            </Link>
        </li>
    </ul>
}

export default LandingPage
