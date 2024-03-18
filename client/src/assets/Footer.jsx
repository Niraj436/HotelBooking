import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <>
    <footer className="footer p-10 bg-neutral text-neutral-content flex justify-around">
  <nav>
    <header className="footer-title">Services</header> 
    <Link className="link link-hover">Branding</Link>
    <Link className="link link-hover">Design</Link>
    <Link className="link link-hover">Marketing</Link>
    <Link className="link link-hover">Advertisement</Link>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <Link to={"about"} className="link link-hover">About us</Link>
    <Link className="link link-hover">Contact</Link>
    <Link className="link link-hover">Jobs</Link>
    <Link className="link link-hover">Press kit</Link>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <Link className="link link-hover">Terms of use</Link>
    <Link className="link link-hover">Privacy policy</Link>
    <Link className="link link-hover">Cookie policy</Link>
  </nav>
</footer>
    </>
  )
}

export default Footer