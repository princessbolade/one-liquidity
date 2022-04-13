import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const item = [
  {
    heading: "Strategy",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae hendrerit tortor. Etiam convallis velit augue, id blandit lorem euismod vitae. Fusce pharetra posuere erat, sit amet tristique odio iaculis vitae. Morbi vel sem convallis, sollicitudin ex at, faucibus urna. Quisque eu ligula dignissim, pharetra orci ac, mattis lacus. Duis ac hendrerit odio, ut faucibus ligula. Vivamus vel eleifend lacus.",
  },
  {
    heading: "Product",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae hendrerit tortor. Etiam convallis velit augue, id blandit lorem euismod vitae. Fusce pharetra posuere erat, sit amet tristique odio iaculis vitae. Morbi vel sem convallis, sollicitudin ex at, faucibus urna. Quisque eu ligula dignissim, pharetra orci ac, mattis lacus. Duis ac hendrerit odio, ut faucibus ligula. Vivamus vel eleifend lacus.",
  },
  {
    heading: "Saftey",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae hendrerit tortor. Etiam convallis velit augue, id blandit lorem euismod vitae. Fusce pharetra posuere erat, sit amet tristique odio iaculis vitae. Morbi vel sem convallis, sollicitudin ex at, faucibus urna. Quisque eu ligula dignissim, pharetra orci ac, mattis lacus. Duis ac hendrerit odio, ut faucibus ligula. Vivamus vel eleifend lacus.",
  },
];

function AboutUs() {
  return (
    <Box mx={"auto"} maxW={"1440px"} py={"50px"} px={"20px"}>
      <Box textAlign={"center"}>
        <Heading color={"#1870d5"}>About us</Heading>
        <Text lineHeight={"8"} fontSize={"16px"} pt={"25px"}>
          One Liquidity is a leading payment platform patnering with companies{" "}
          <br />
          ranging from crypto-native institutions and fintech firms to remove
          the <br /> complexity of building financial platforms from scratch{" "}
        </Text>
      </Box>
      <Flex>
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          pt={"50px"}
        >
          {item.map((items, i) => (
            <Box>
              <Text color={"#1870d5"} fontSize={"2xl"} fontWeight={"semibold"}>
                {items.heading}
              </Text>
              <Text pr={"100px"} pt={"25px"}>
                {items.text}
              </Text>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}

export default AboutUs;
