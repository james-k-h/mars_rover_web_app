import { Box, HStack, Text } from "@chakra-ui/react";

function Header() {
  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      
    >
      <Box color="white" maxWidth="1280px" margin="0 auto" >
        <HStack px={12} py={4} justifyContent="center"  alignItems="center">
          <Text>Mars Rovers - A Compilation</Text>
        </HStack>
      </Box>
    </Box>
  );
}
export default Header;
