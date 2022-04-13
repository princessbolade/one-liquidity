import { Box, Flex, Text, Heading, Image } from "@chakra-ui/react";
import developers from "../../assets/developers.jpg";
import Button from "../button";
import React from "react";

function Developers() {
  return (
    <Box mx={"auto"} maxW={"1440px"} py={"50px"} px={"20px"}>
      <Box textAlign={"center"}>
        <Heading color={"#1870d5"}>Designed for Developers</Heading>
      </Box>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        pt={{ md: "100px", base: "50px" }}
        display={{ base: "block", md: "flex" }}
      >
        <Image mx={"auto"} w={"500px"} src={developers} />

        <Box pl={"20px"} mt={{ base: "30px", md: "0" }}>
          <Text color={"#1870d5"} fontSize={"2xl"} fontWeight={"bold"}>
            Africa's leading API integration
          </Text>
          <Text pt={"20px"} lineHeight={"8"} fontSize={"16px"}>
            We agonize over the right abstractions so your teams don’t need to{" "}
            stitch <br /> together disparate systems or spend months integrating
            payments functionality.
          </Text>
          <Button
            mt={"30px"}
            bg="white"
            color={"#1870d5"}
            border={"1px"}
            borderColor={"#1870d5"}
            fontSize={"16px"}
            _hover={{
              bg: "#1870d5",
              color: "white",
              border: "1px",
              borderColor: "#1870d5",
            }}
            children="Read the docs"
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default Developers;
