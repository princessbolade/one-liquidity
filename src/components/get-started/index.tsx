import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import unifiedImg from "../../assets/unified-img.png";
import React from "react";
import Button from "../button";

function GetStarted() {
  return (
    <Box mx={"auto"} maxW={"1440px"} py={"50px"} px={"20px"}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Box display={{base:'none' ,md:'flex'}}>
          <Image w={"100%"} h={"500px"} src={unifiedImg} />
        </Box>

        <Box>
          <Text color={"#1870d5"} fontSize={"2xl"} fontWeight={"bold"}>
            Your go-to unified payment platform
          </Text>
          <Text pt={"20px"} lineHeight={"8"} fontSize={"16px"}>
            Our payments platform is designed to increase conversion and reduce
            <br />
            fraud at every step of the payment flow. Get access to streamlined
            checkout <br /> flows, fraud prevention, issuer-level optimisations,
            and more so that you can <br /> focus on building the next big
            thing.
          </Text>
          <Button
            mt={"50px"}
            bg="#1870d5"
            color={"white"}
            fontSize={"16px"}
            _hover={{
                bg:'white',
                color: "#1870d5",
                border:'1px',
                borderColor: "#1870d5",
              }}
            children="Start With Payments"
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default GetStarted;
