import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";
import Image from 'next/image'
import { motion } from "framer-motion";

const logoStartup = ""

function Header() {
  return (
    <Navbar className="mb-5">
      <Container className="p-1 d-flex justify-content-center align-items-center ">
        <Navbar.Brand href="/" className="p-0">
        <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 1 }}
              transition={{ duration: 0.15 }}
            >
          <Image src="/kugelschiff.svg" alt="kugelschiff" width="140" height="54" />
          </motion.div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
