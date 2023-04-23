import { Box, Button, Flex, HStack } from "@chakra-ui/react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  
  return (
    <Box backgroundColor="#18181b">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <HStack spacing={4}>
            <p>James • © 2023</p>
            <Button backgroundColor="black" color="white" onClick={scrollToTop}>
              Navigate Top
            </Button>
          </HStack>
        </Flex>
      </footer>
    </Box>
  );
}

export default Footer;
