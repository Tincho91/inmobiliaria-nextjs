import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { NavigationLinks } from "../../NavigationConsts";

const NavigationLink = ({ title, link, icon }) => {
  return (
    <Link href={`${link}`} target="_blank">
      <Flex alignItems="center" gap="0.5rem">
        {icon}
        {title}
      </Flex>
    </Link>
  );
};

const NavigationDesktop = () => {
  return (
    <Box
      color="orange.500"
      padding="2rem"
      backgroundColor="white"
      display={{ base: "none", lg: "block" }}
    >
      <Box maxWidth="1280px" margin="0 auto">
        <Flex alignItems="center" justifyContent="space-between">
          <Link href="/">
            <Box display="flex" gap="2" alignItems="center">
              <Text fontSize="2xl" fontWeight="black">
                <h1>MEZZADRI PROPIEDADES</h1>
              </Text>
            </Box>
          </Link>
          <Flex gap="12" alignItems="center" fontWeight="medium">
            {NavigationLinks.map((item) => (
              <NavigationLink key={item} {...item} />
            ))}
            <Button padding="1.5rem" colorScheme="orange" fontSize="1rem">
              Alta de Propiedad
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default NavigationDesktop;
