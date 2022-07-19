import React from 'react';
import "../styles/Footer.css"
const Footer = () => {
    return (
        <div>
            {/* <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input> */}
            {/* <label class="form-check-label" for="flexCheckDefault">
                Skip Errors
            </label> */}
            <div className='buttons'>
                <button className='reset button'>Reset</button>
                <button className='submit button'>Submit</button>
            </div>
        </div>
    );
}

export default Footer;