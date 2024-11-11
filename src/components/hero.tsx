"use client"

import Link from "next/link"
import Image from "next/image";
import "../styles/hero.css";


import { useEffect, useRef } from 'react';
import Typed from 'typed.js';




export default function Home(){
    const typedElement = useRef(null); // Reference for the typing effect

    useEffect(() => {
        const typed = new Typed(typedElement.current, {
            strings: ["Frontend Developer", "Web Designer", "Creative Coder"], // Add more titles as needed
            typeSpeed: 50,
            backSpeed: 25,
            loop: true,
        });

        return () => {
            typed.destroy(); // Cleanup on component unmount
        };
    }, []);

    return(
        <section className="section">
            <header className="header">
                <nav className="navbar">
                    <div className="left">Portfolio</div>
                    <div className="right">
                        <ul>
                               <li><Link href="/">Home</Link></li>
                               <li><Link href="#about">About</Link></li>
                               <li><Link href="#services">Services</Link></li>
                               <li><Link href="#project">Projects</Link></li>
                               <li><Link href="#contact">Contact</Link></li>
                        </ul>
                        <div className="menu-bar">
                        </div>
                    </div>
                </nav>
            </header>

            <main className="main">
                <div className="left-side">
                    <h3>Hello, It&apos;s me <span className="name">Areeba Aijaz</span></h3>
                    <h3>and I&apos;m a passionate<br /><span ref={typedElement} className="element"></span></h3>
                    {/* <p>I'm a web designer for extensive experience of 3 years, expertise is to create and design website. Frontend design,</p> */}
                    <button className="btn">More About me</button>
                </div>
                <div className="right-side">
                    <Image src="/girl.png" alt="" width={300} height={300} className="img-main"/>
                </div>
            </main>
        </section>
    )
}

