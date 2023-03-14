import Link from "next/link";
import { ButtonGroup, IconButton, Box, Text, Flex } from "@chakra-ui/react";
import { FaWhatsapp, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <Box color="white" padding="2rem" backgroundColor="orange.500">
      <Box 
        maxWidth="1280px" 
        margin="0 auto"
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Link href="/">
            <Box display="flex" gap="2" alignItems="center">
              <Text fontSize="2xl" fontWeight="black">
                <h1>MEZZADRI PROPIEDADES</h1>
              </Text>
            </Box>
          </Link>
          <Flex gap="8" alignItems="center" fontWeight="medium" marginLeft='3'>
            <ButtonGroup variant="ghost">
              <IconButton
                as="a"
                href="#"
                aria-label="LinkedIn"
                icon={<FaWhatsapp fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="Twitter"
                icon={<FaFacebook fontSize="1.25rem" />}
              />
            </ButtonGroup>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
