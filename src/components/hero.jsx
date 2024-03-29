import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Img,
  Stack,
  Text,
  Center,
} from "@chakra-ui/react";
import { HiChevronRight } from "react-icons/hi";

import Slideshow from "./slideshow";

import { motion } from "framer-motion";

export default function Hero() {
  const MotionHeading = motion(Heading);
  const MotionText = motion(Text);
  const MotionButton = motion(Button);
  return (
    <>
      <Box bg="gray.800"  position="relative">
        <Center
          textAlign={"center !important"}
          py="32"
          position="relative"
          zIndex={1}
        >
          <Flex color="white">
            <Box className="hero-content" mt={{ base: "100px", lg: "150px" }}>
              <MotionHeading
                as="h1"
                size={{ base: "xl", md: "3xl" }}
                className="hero-title"
                fontWeight="extrabold"
                maxWidth={{ base: "100%", md: "80%" }}
                mx="auto"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 1 }}
              >
                India Spice House, home of the spices
              </MotionHeading>
              <MotionText
                className="hero-subtitle"
                maxW={"500px"}
                fontSize={{ md: "2xl" }}
                mt="4"
                mx="auto"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
              >
                India Spice House has a variety of appetizers, entrees, and lots
                of sweet desserts. We offer catering services as well as hosting
                events.
              </MotionText>
              <Stack
                direction={{ base: "column", md: "row" }}
                mt="10"
                spacing="4"
                justifyContent={"center"}
              >
                <MotionButton
                  as="a"
                  href="https://order.toasttab.com/online/india-spice-house-8445-joiner-way"
                  target="_blank"
                  colorScheme="red"
                  px="8"
                  rounded="full"
                  size="lg"
                  fontSize="md"
                  fontWeight="bold"
                  className="hero-btn"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 1 }}
                >
                  <span style={{ paddingRight: "10px" }}>
                    Eat with us today
                  </span>
                  <HiChevronRight />
                </MotionButton>
              </Stack>
            </Box>
          </Flex>
        </Center>
        <Flex
          id="image-wrapper"
          position="absolute"
          insetX="0"
          insetY="0"
          w="full"
          h="full"
          overflow="hidden"
          align="center"
        >
          <Slideshow />
        </Flex>
      </Box>
    </>
  );
}
