import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/Navigation.css";

const list = [
    { name: "Transaction Import Assistant", path: "/", exact: true },
    { name: "Select File for Import", path: "/select_file_for_import" },
    { name: "Import Preview", path: "/import_preview" },
    { name: "Match Import and account", path: "/match_import_and_account" },
    { name: "Transaction Information", path: "/transaction_information" },
    { name: "Match Transactions", path: "/match_transactions" },
    { name: "Import Summary", path: "/import_summary" },
]
const Navigation = () => {

    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
        </li>
    ))
    return (
        <nav className='main'>
            <ul>
                {menu}
            </ul>
        </nav>
        // <nav class="nav flex-column">
        //     <a class="nav-link active" aria-current="page" href="/">Transaction Import Assistant</a>
        //     <a class="nav-link" href="/select_file_for_import">Select File for Import</a>
        //     <a class="nav-link" href="#">Link</a>
        //     <a class="nav-link disabled">Disabled</a>
        // </nav>

    );
}

export default Navigation
