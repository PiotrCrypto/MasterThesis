import React from 'react';
import "../styles/Footer.css"
const Footer = () => {
    return (
        <div>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label" for="flexCheckDefault">
                Skip Errors
            </label>
            <button>Cancel</button>
            <button>Submit</button>
        </div>
    );
}

export default Footer;