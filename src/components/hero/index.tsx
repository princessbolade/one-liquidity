import { Box, Flex, Text, Image } from "@chakra-ui/react";
import coins from "../../assets/coins.svg";
import React from "react";
import Button from "../button";
import { motion } from "framer-motion";

function Hero() {
  return (
    <Box mx={"auto"} maxW={"1440px"} py={"100px"} px={"20px"}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <Text fontWeight={"bolder"} fontSize={"6xl"}>
            Accept Payments Globally, <br /> Be Limitless.
          </Text>
          <Text fontSize={"16px"} pt={"25px"}>
            Enjoy bordeless payments with One Liquidity. Our solution is
            <Text as="span" color="#1870d5">
              {" "}
              user friendly, fast{" "}
            </Text>{" "}
            and{" "}
            <Text as="span" color="#1870d5">
              secure.
            </Text>
          </Text>

          <Box pt={"50px"}>
            <motion.button
              whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                bg={"#1870d5"}
                padding={"10px 24px"}
                color={"white"}
                _hover={{
                  color: "#1870d5",
                  bg: "white",
                  border: "1px",
                  borderColor: "#1870d5",
                }}
                children="Get Started"
              />
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                bg={"white"}
                color={"#1870d5"}
                border={"1px"}
                borderColor={"#1870d5"}
                padding={"10px 24px"}
                _hover={{
                  color: "white",
                  bg: "#1870d5",
                }}
                children="Contact Sales"
                ml={"20px"}
              />
            </motion.button>
          </Box>
        </Box>
        <Box display={{ base: "none", md: "flex" }}>
          <Image w={"100%"} h={"400px"} src={coins} />
        </Box>
      </Flex>
    </Box>
  );
}

export default Hero;
