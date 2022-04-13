import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Link,
  Text,
  Input,
  InputLeftElement,
  InputGroup,
  HStack,
  Image,
} from "@chakra-ui/react";
import Logo from "../../assets/one-liquidity.jpeg";
import linkedin from "../../assets/linkedin.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import React from "react";

const item = {
  Products: ["Payments", "Checkout", "Virtual Cards", "Invoicing"],
  Information: ["FAQ", "Blog", "Support", "BETA"],
  Company: ["About Us", "Careers", "Contact Us", "One Liquidity Media"],
};

const image = [
  {
    src: linkedin,
  },
  {
    src: twitter,
  },
  {
    src: facebook,
  },
];

function Footer() {
  return (
    <Box bg={"#f3f5fb"}>
      <Box
        borderRadius={"20px"}
        mx={"auto"}
        maxW={"1440px"}
        py={"50px"}
        px={"20px"}
      >
        <Flex alignItems={"center"} justifyContent="space-between" px={"50px"}>
          {Object.entries(item).map(([key, values], i) => {
            return (
              <Box>
                <Box fontWeight={"bold"}>{key}</Box>
                {values.map((link) => (
                  <Flex flexDir={"column"} pt={"10px"}>
                    <Link color={"#1870d5"}>{link}</Link>
                  </Flex>
                ))}
              </Box>
            );
          })}
          <Box bg={"#203C860D"} borderRadius={"10px"} px={"20px"} py={"20px"}>
            <Text fontWeight={"bold"}>Subscribe</Text>
            <InputGroup mt={"15px"}>
              <InputLeftElement
                children={<ChevronRightIcon w={"20px"} color="#1870d5" />}
              />
              <Input
                borderRadius={"20px"}
                border={"1px"}
                borderColor={"#1870d5"}
                type="email"
                placeholder="Email Address"
              />
            </InputGroup>
            <Text lineHeight={"6"} fontSize={"12px"} mt={"20px"}>
              Hello, we are One Liquidity. Our goal is to remove <br /> the
              complexity of building payment solutions for <br /> financial
              companies and start ups
            </Text>
          </Box>
        </Flex>
        <Box pt={"50px"} mx={"auto"}>
          <hr style={{ border: "0.1px solid #00000026" }} />
        </Box>
        <Flex
          mt={"20px"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <HStack spacing={8} alignItems={"center"}>
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              display={{ base: "none", md: "flex" }}
            >
              <Image w={"30px"} h={"30px"} src={Logo} />
              <Text pl={"10px"} fontWeight={"bold"} fontSize={"24px"}>
                One Liquidity
              </Text>
            </Flex>
          </HStack>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Text pr={"15px"}>Terms</Text>
            <Text pr={"15px"}>Privacy</Text>
            <Text pr={"15px"}>Cookies</Text>
          </Flex>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            {image.map((images, i) => (
              <Image pr={"15px"} src={images.src} key={i} />
            ))}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Footer;
