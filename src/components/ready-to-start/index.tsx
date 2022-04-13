import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import Button from "../button";
import React from "react";

function ReadyToStart() {
  return (
    <Box mx={"auto"} maxW={"1440px"} py={"50px"} px={"20px"}>
      <Box textAlign={"center"}>
        <Heading color={"#1870d5"}>Ready to get started?</Heading>
        <Text lineHeight={"8"} fontSize={"16px"} pt={"25px"}>
          Explore One Liquidity or create an account instantly and start
          accepting payments. <br /> You can also contact us to design a custom
          package that fits your business.
        </Text>
        <Flex alignItems={"center"} justifyContent={"center"} mt={"20px"}>
          <Button
            bg="#1870d5"
            color={"white"}
            fontSize={"16px"}
            _hover={{
              bg: "white",
              color: "#1870d5",
              border: "1px",
              borderColor: "#1870d5",
            }}
            children="Get Started"
          />
          <Button
            bg="white"
            color={"#1870d5"}
            fontSize={"16px"}
            border="1px"
            borderColor="#1870d5"
            ml={"20px"}
            _hover={{
              bg: "#1870d5",
              color: "white",
            }}
            children="Contact Sales"
          />
        </Flex>
      </Box>
      <Flex></Flex>
    </Box>
  );
}

export default ReadyToStart;
