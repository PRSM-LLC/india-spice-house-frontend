import React from "react";

import { useState } from "react";

import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  Link,
  InputGroup,
  InputLeftElement,
  Textarea,
  Center,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson, BsWhatsapp } from "react-icons/bs";
import NextLink from "next/link";
//D92D26
//238d1a

export default function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = values;

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
  };

  return (
    <Center className="contact-large-container" maxW="full" overflow="hidden">
      <Box
        bg="#238d1a"
        color="white"
        borderRadius="lg"
        p={{ sm: 5, md: 5, lg: 16 }}
        className="contact-container"
      >
        <Box p={4} className="contact-content-container">
          <Wrap
            className="contact-content"
            spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}
          >
            <WrapItem>
              <Box>
                <Heading textAlign={"center"}>Contact</Heading>
                <Text mt={{ sm: 3, md: 3, lg: 5 }} textAlign={"center"}>
                  Fill up the form below to contact
                </Text>
                <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                  <VStack pl={0} spacing={3} alignItems="flex-start">
                    <NextLink href="tel:9529428010" passHref>
                      <Button
                        as="a"
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#FFFFFF"
                        _hover={{ border: "2px solid #D92D26" }}
                        leftIcon={<MdPhone color="#D92D26" size="20px" />}
                        textAlign={"center"}
                      >
                        (952) 942-8010
                      </Button>
                    </NextLink>
                    <NextLink
                      href="mailto:indiaspicehouseep@gmail.com"
                      passHref
                    >
                      <Button
                        as="a"
                        size="md"
                        height="48px"
                        width="300px"
                        variant="ghost"
                        color="#FFFFFF"
                        _hover={{ border: "2px solid #D92D26" }}
                        leftIcon={<MdEmail color="#D92D26" size="20px" />}
                        textAlign={"center"}
                      >
                        indiaspicehouseep@gmail.com
                      </Button>
                    </NextLink>
                  </VStack>
                </Box>
                <HStack
                  mt={{ lg: 10, md: 10 }}
                  spacing={10}
                  px={5}
                  alignItems="center"
                >
                  <IconButton
                    as="a"
                    aria-label="facebook"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    _hover={{ bg: "#D92D26" }}
                    icon={<MdFacebook size="28px" />}
                    href="https://www.facebook.com/indiaspicehouseep"
                  />
                  <IconButton
                    as="a"
                    aria-label="whatsapp"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    _hover={{ bg: "#D92D26" }}
                    icon={<BsWhatsapp size="28px" />}
                    href="https://wa.me/16122937478"
                  />
                </HStack>
              </Box>
            </WrapItem>
            <WrapItem>
              <Box bg="white" borderRadius="lg">
                <Box m={8} color="#0B0E3F">
                  <VStack spacing={5}>
                    <form onSubmit={handleSubmit}>
                      <div className="container">
                        {/* <h3 style={{ textAlign: "center" }}>Contact Form</h3> */}
                        <div className="input_container">
                          <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleChange}
                            placeholder="Enter your name..."
                            className="input"
                            required
                          />
                        </div>
                        <div className="input_container">
                          <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            placeholder="Enter your email..."
                            className="input"
                            required
                          />
                        </div>
                        <div className="input_container">
                          <textarea
                            name="message"
                            value={message}
                            onChange={handleChange}
                            placeholder="Enter your message..."
                            className="input"
                            required
                          />
                        </div>
                        <div className="btn_container">
                          <button className="contact-btn">Send</button>
                        </div>
                      </div>
                    </form>
                  </VStack>
                </Box>
              </Box>
            </WrapItem>
          </Wrap>
        </Box>
      </Box>
    </Center>
  );
}
