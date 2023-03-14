import { Box, Fade, Text } from "@chakra-ui/react";
import HeroForm from "../HeroForm";

const HeroBanner = () => {
  return (
    <Fade in>
      <Box
        position="relative"
        minHeight={{base:'1000px', sm:'90vh', md:'90vh'}}
        backgroundImage={`url('./hero/heroBg.jpg')`}
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundAttachment="fixed"
        marginTop={{ base: "104px", md: "80px", lg:'0px' }}
      >
        <Box
          position="absolute"
          width="100%"
          height="100%"
          opacity="0.45"
          backgroundColor="black"
        />
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          alignItems='center'
          justifyContent={{ base: "center", md: "center" }}
          maxWidth="1280px"
          position="absolute"
          color="white"
          fontWeight="semibold"
          left="0"
          right="0"
          bottom="0"
          top="0"
          margin="0 auto"
          padding="2rem"
          gap="5"
        >
          <Box width={{ base: "100%", md: "50%" }}>
            <Text
              fontSize={{ base: "4xl", md: "5xl" }}
              lineHeight="shorter"
              marginBottom="1.5rem"
            >
              Lorem ipsum dolor sit amet,{" "}
              <strong>consectetur adipiscing elit.</strong> Mauris scelerisque
              massa vitae nisl.
            </Text>
          </Box>
          <Box width={{ base: "100%", md: "auto" }}>
            <HeroForm position="relative" />
          </Box>
        </Box>
      </Box>
    </Fade>
  );
};

export default HeroBanner;
