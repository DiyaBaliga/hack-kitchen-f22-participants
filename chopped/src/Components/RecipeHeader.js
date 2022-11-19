import React from 'react';
import gyoza1 from '../Images/pork.gyoza1.png'
import gyoza2 from '../Images/pork.gyoza2.png'

function Header() {
    return (
        <div id='top'>
            <div>
                <h1>Trader Joe's Frozen Dumplings</h1>     
                <a href="https://www.traderjoes.com/home">
                   <p>Here's where to buy it!</p>
                    </a>
            </div>
            <img width="300px" src={gyoza1} alt="uncooked version" />{" "}
            <img width="300px" src={gyoza2} alt="cooked version" />{" "}
        </div>
    )
}

export default Header;