import { ReactNode } from "react";
import {
  Box,
  Text,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Image,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import Logo from "../../assets/one-liquidity.jpeg";

const Links = ["Products", "Company", "Developers", 'Pricing'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    pl={'20px'}
  fontSize={'16px'}
    _hover={{
      textDecoration: "none",
      color:'#1870d5'
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box mx={"auto"} maxW={"1440px"} py={"50px"}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Flex alignItems={"center"} justifyContent={"center"}>
              <Image w={"30px"} h={"30px"} src={Logo} />
              <Text pl={"10px"} fontWeight={'bold'} fontSize={'24px'}>One Liquidity</Text>
            </Flex>
            </HStack>
            <Flex alignItems={'center'}
            justifyContent={'center'}
              as={"nav"}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink  key={link}>{link}</NavLink>
              ))}
            </Flex>
         
          <Flex alignItems={"center"} justifyContent={'space-between'}>
            <Menu>
              <MenuButton as={Button} padding={'8px 24px'} rightIcon={<ChevronDownIcon />}>
               Use Cases
              </MenuButton>
              <MenuList>
                <MenuItem>E-Commerce</MenuItem>
                <MenuItem>MarketPlaces</MenuItem>
                <MenuItem>Platforms</MenuItem>
                <MenuItem>Crypto</MenuItem>
              </MenuList>
            </Menu>
            <Box as={Button} bg={'#1870d5'} color={'white'} padding={'8px 24px'} ml={'20px'}>Sign In</Box>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
             <Flex alignItems={"center"}  justifyContent={"flex-start"} ml={'10px'}>
              <Image w={"30px"} h={"30px"} src={Logo} />
              <Text pl={"10px"} fontWeight={'bold'} fontSize={'24px'}>One Liquidity</Text>
            </Flex>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
