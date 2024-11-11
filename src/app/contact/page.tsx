import "../../styles/contact.css"
import Link from "next/link"
import { IoSend } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";



export default function Contact(){
    return(
        <section id="contact" className="cntct-section">
            <div className="cntct-main">
            <div className="cntct-text">
                <h1 className="info">Contact <span className="me">Me</span></h1>
                <h3 className="info">Let&apos;s Work Together</h3>
                <p className="info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero eveniet eum non dolorem sed quam quibusdam cumque fugiat deserunt ex? Commodi soluta, quis nam eos labore adipisci expedita porro ullam.</p>
                <div className="cntct.list">
                    <Link href="/" className="info"><span className="icon"><IoSend /></span>areebaaijaz694@gmail.com</Link><br />
                    <Link href="/" className="info"><span className="icon"><FaPhoneAlt /></span>0311-3783418</Link>
                </div>
            </div>
            <div className="cntct-form">
                <form action="">
                    <input type="text" placeholder="Enter Your Name" /><br />
                    <input type="email" placeholder="Enter Your Email" /><br />
                    <input type="text" placeholder="Enter Your Subject" /><br />
                    <textarea name="" rows={8} cols={20} placeholder="Enter Your Message"  />
                    <button className="form-btn">SUBMIT</button>
                </form>
            </div>
            </div>
        </section>
    )
} 