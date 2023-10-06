import React from 'react'
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.mainNav}>
        <ul>
          <Link href="/" cursor="pointer">
            <li>Home</li>
          </Link>
          <Link href="/about" cursor="pointer">
            <li>About</li>
          </Link>
          <Link href="/blogs" cursor="pointer">
            <li>Blogs</li>
          </Link>
          <Link href="/contact" cursor="pointer">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
  )
}

export default Navbar