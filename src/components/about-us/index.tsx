import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import strategy from "../../assets/idea-bulb.png";
import product from "../../assets/new-product.png";
import saftey from "../../assets/privacy.png";
import React from "react";

const item = [
  {
    heading: "Strategy",
    src: strategy,
    text: "From Direct integrations with card networks and banks to checkout flows in the browser, we operate on and optimise at every entry level of the financial stack. We release hundreds of features and improvements to help you stay ahead of industry shifts.",
  },
  {
    heading: "Product",
    src: product,
    text: "From Direct integrations with card networks and banks to checkout flows in the browser, we operate on and optimise at every entry level of the financial stack. We release hundreds of features and improvements to help you stay ahead of industry shifts.",
  },
  {
    heading: "Saftey",
    src: saftey,
    text: "From Direct integrations with card networks and banks to checkout flows in the browser, we operate on and optimise at every entry level of the financial stack. We release hundreds of features and improvements to help you stay ahead of industry shifts.",
  },
];

function AboutUs() {
  return (
    <Box mx={"auto"} maxW={"1440px"} py={"50px"} px={"20px"}>
      <Box textAlign={"center"}>
        <Heading color={"#1870d5"}>Why us?</Heading>
        <Text lineHeight={"8"} fontSize={"16px"} pt={"25px"}>
          One Liquidity is a leading payment platform patnering with companies{" "}
          ranging from crypto-native institutions and <br /> fintech firms to
          remove the complexity of building financial platforms from scratch{" "}
        </Text>
      </Box>
      <Flex>
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          pt={"50px"}
          display={{ base: "block", md: "flex" }}
        >
          {item.map((items, i) => (
            <Box
              bg={"#f3f5fb"}
              borderRadius={"20px"}
              ml={{ base: "0", md: "50px" }}
              px={"30px"}
              py={"30px"}
              mt={{ base: "30px", md: "0" }}
            >
              <Image w={"100px"} h={"100px"} src={items.src} />
              <Text
                mt={"25px"}
                color={"#1870d5"}
                fontSize={"2xl"}
                fontWeight={"semibold"}
              >
                {items.heading}
              </Text>

              <Text pt={"25px"}>{items.text}</Text>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}

export default AboutUs;
