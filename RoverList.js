import { Heading, Text, HStack, VStack, Image, Button, Box } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

function RoverList(params) {
  const showMore = () => {
    params.setShowItems(params.roverArray.length)
  }
  const showLess = () => {
    params.setShowItems(5)
  }

  return (
    <FullScreenSection>
      <Heading as="h1" id="rovers!">
        Selected Details
      </Heading>
      {params.roverArray
        .slice(0, params.showItems + 1)
        .map((rovers, index) => {
          return (
            <div key={rovers.id} >
              <VStack margin={2}>
                <HStack
                  spacing={12}
                  textAlign="center"
                  fontStyle="italic"
                  justifyContent="center"
                >
                  <Text>Rover: {rovers.rover.name}</Text>
                  <Text>Martian Sol: {rovers.sol}</Text>
                  <Text>Earth Date: {rovers.earth_date}</Text>
                </HStack>
                <HStack
                  spacing={12}
                  textAlign="center"
                  fontStyle="italic"
                  justifyContent="center"
                  margin={6}
                >
                  <Text>
                    Camera Name: '{rovers.camera.name}' -{" "}
                    {rovers.camera.full_name}
                  </Text>
                </HStack>
              </VStack>
              <VStack alignItems="center" justifyContent="center" margin={2}>
                <Image src={rovers.img_src} alt="" />
              </VStack>
              
            </div>
            
          );
        })}
        <Box >
          <VStack margin={4} >
        {(params.showItems === 5) ? <Button colorScheme="blackAlpha" onClick={showMore}>Show More</Button>: <Button colorScheme="blackAlpha" onClick={showLess}>Show Less</Button>}
        </VStack>
        </Box>
    </FullScreenSection>
  );
}
export default RoverList;
