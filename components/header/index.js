import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import Link from 'next/link'
import Image from "next/image";
import { motion } from "framer-motion";


const initialOpacity = .6

function Header() {
  return (
    <Navbar className="mb-5">
      <Container fluid className="p-1 d-flex justify-content-around align-items-center ">

        <Link href="/allocation">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: initialOpacity }}
          whileHover={{ scale: 1.07, opacity: 1 }}
          whileTap={{ scale: 1 }}
          transition={{ duration: 0.15 }}
        >
          <AiFillHome size="2em"/>
          </motion.div>
        </Link>

        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: initialOpacity }}
          whileHover={{ scale: 1.03, opacity: 1 }}
          whileTap={{ scale: 1 }}
          transition={{ duration: 0.15 }}
        >
          <Image
            src="/kugelschiff.svg"
            alt="kugelschiff"
            width="140"
            height="54"
          />
        </motion.div>

        <Link href="/">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: initialOpacity }}
          whileHover={{ scale: 1.05, opacity: 1 }}
          whileTap={{ scale: 1 }}
          transition={{ duration: 0.15 }}
        >
          <FaUserAlt size="2em"/>
          </motion.div>
        </Link>
      </Container>
    </Navbar>
  );
}

export default Header;
