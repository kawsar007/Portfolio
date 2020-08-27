import React from 'react';
import './about.css';
import Navbar from '../Header';
import {Link } from 'react-router-dom';


export default function About() {
    return (
      <>
        <Navbar/>
        <section>
            <div className="about">
              <h1>About <span>Me</span></h1>
            </div>
            <div className="content">
              <p> <span className="hello">Hello!</span> I'm Kawsar Mia, a passionate Web Developer.
                  I develop web applications, mobile applications, and desktop applications.
              </p>
              <p>My Dream is to ome day start my own business are become an enterpreneur</p>
              <p>
              My core skill is based on JavaScript and I love to do most of the things using JavaScript.
             I have no job experience but when a good opportunity comes to me I'll proved myself greate. 
              </p>
            </div>
            <Link className="button" to='./'>Back To Home</Link>
        </section>
      </>
    )
}
