import React from "react";

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
export default function ContactForm() {
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
                <Heading>Contact</Heading>
                <Text mt={{ sm: 3, md: 3, lg: 5 }}>
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
                    <FormControl id="name">
                      <FormLabel>Your Name</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement
                          pointerEvents="none"
                          children={<BsPerson color="gray.800" />}
                        />
                        <Input type="text" size="md" />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="name">
                      <FormLabel>Mail</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement
                          pointerEvents="none"
                          children={<MdOutlineEmail color="gray.800" />}
                        />
                        <Input type="text" size="md" />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="name">
                      <FormLabel>Message</FormLabel>
                      <Textarea
                        borderColor="gray.300"
                        _hover={{
                          borderRadius: "gray.300",
                        }}
                        placeholder="Type Here!"
                      />
                    </FormControl>
                    <FormControl id="name" float="right">
                      <Button
                        variant="solid"
                        bg="#D92D26"
                        color="white"
                        _hover={{}}
                      >
                        Send Message
                      </Button>
                    </FormControl>
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
