import { Box, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { NavigationLinks } from "../../NavigationConsts";

const NavigationLink = ({ title, link, icon }) => {
  return (
    <Link href={link} target="_blank">
      <MenuItem alignItems="center" gap="0.5rem">
        {icon}
        {title}
      </MenuItem>
    </Link>
  );
};

const NavigationMobile = () => {
  return (
    <Box
      color="orange.500"
      padding="2rem"
      backgroundColor="white"
      display={{ base: "block", lg: "none" }}
      position="fixed"
      top="0"
      width="100%"
      zIndex="20"
      opacity="1"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Link href="/">
          <Box display="flex" gap="2" alignItems="center">
            <Text fontSize="2xl" fontWeight="black">
              <h1>MEZZADRI PROPIEDADES</h1>
            </Text>
          </Box>
        </Link>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            padding="1.5rem"
            colorScheme="orange"
            fontSize="1.5rem"
            fontWeight="medium"
          />
          <MenuList>
            {NavigationLinks.map((item) => (
              <NavigationLink key={item} {...item} />
            ))}
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default NavigationMobile;
