import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='mt-4 py-3 footer-bg'>
            <p>Dental Solution &copy; {year} Developed By Md Imran.</p>
        </footer>
    );
};

export default Footer;