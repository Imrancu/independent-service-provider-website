import React from 'react';
import Me from '../../images/me.png';
import './About.css';

const About = () => {
    return (
        <div className='about-container'>
            <h2 className='text-4xl font-bold my-5 text-gray-600'>About Me</h2>
            <div className='about'>
                <img src={Me} alt="" />
                <p className='text-dark'>This is Mohammad Imran. Programming is my dream job that I enjoy so much. I also love to design social media and graphic elements via Adobe Creative softwares. I learnt a lots of new things with Programing-Hero.</p>
            </div>
        </div>
    );
};

export default About;