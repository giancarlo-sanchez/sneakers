import React from 'react'
import {Link} from 'react-router-dom'

function LandingPage(props){
    return <div className="landing-page">
        <div>
            <a href="/catalog">
                <div>all</div>
            </a>
        </div>
        <div>
            <a href="/brands/1">
                <div>Adidas</div>
            </a>
        </div>
        <div>
            <a href="/brands/2">
                <div>Converse</div>
            </a>
        </div>
        <div>
            <a href="/brands/3">
                <div>New Balance</div>
            </a>
        </div>
        <div>
            <a href="/brands/4">
                <div>Nike</div>
            </a>
        </div>
        <div>
            <a href="/brands/5">
                <div>Reebok</div>
            </a>
        </div>
        <div>
            <a href="/brands/5">
                <div>Puma</div>
            </a>
        </div>
        <div>
            <a href="/brands/6">
                <div>Jordan</div>
            </a>
        </div>
        <div>
            <a href="/brands/7">
                <div>Vans</div>
            </a>
        </div>
        <div>
            <a href="/brands/7">
            <div>ASICS</div>
            </a>
        </div>
    </div>
}

export default LandingPage
