import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { useState } from "react";


const Selections = ({ callback }) => {
  const [selectedRover, setSelectedRover] = useState("");
  const [selectedCamera, setSelectedCamera] = useState("");


  const state = {
    selectedRover: selectedRover,
    selectedCamera: selectedCamera,
  };

  const changeCameraHandler = (event) => {
    setSelectedRover(event.target.value);
  };

  const updatedCameraHandler = (event) => {
    var camera = event.target.value;
    let acronym = "";
    if (camera === "Front Hazard Avoidance Camera") {
      acronym = "FHAZ";
    } else if (camera === "Rear Hazard Avoidance Camera") {
      acronym = "RHAZ";
    } else if (camera === "Mast Camera") {
      acronym = "MAST";
    } else if (camera === "Chemistry and Camera Complex") {
      acronym = "CHEMCAM";
    } else if (camera === "Mars Hand Lens Imagera") {
      acronym = "MAHLI";
    } else if (camera === "Mars Descent Imager") {
      acronym = "MARDI";
    } else if (camera === "Navigation Camera") {
      acronym = "NAVCAM";
    } else if (camera === "Panoramic Camera") {
      acronym = "PANCAM";
    } else if (
      camera === "Miniature Thermal Emission Spectrometer (Mini-TES)"
    ) {
      acronym = "MINITES";
    }
    setSelectedCamera(acronym);
  };

  const curiosity_cameras = [
    "Front Hazard Avoidance Camera",
    "Rear Hazard Avoidance Camera",
    "Mast Camera",
    "Chemistry and Camera Complex",
    "Navigation Camera",
  ];
  const opportunity_camera = ["Navigation Camera", "Panoramic Camera"];
  const spirit_camera = ["Navigation Camera", "Panoramic Camera"];

  let type = null;

  let options = null;

  if (selectedRover === "Curiosity") {
    type = curiosity_cameras;
  } else if (selectedRover === "Opportunity") {
    type = opportunity_camera;
  } else if (selectedRover === "Spirit") {
    type = spirit_camera;
  }

  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>);
  }

  const submitHandler = () => {
    callback(state);
  };

  return (
    <FullScreenSection>
      <FormControl p={20}>
        <FormLabel
          as="h1"
          id="rovers_selection"
          textAlign="center"
          fontWeight="bold"
          fontSize={24}
        >
          Select Rover Parameters
        </FormLabel>
        <HStack p={2} spacing={8} alignItems="center">
          <VStack>
            <Text fontSize={18} fontStyle="italic">
              Rover
            </Text>
            <Select
              id="rovers_select"
              name="Rovers"
              placeholder="Select a rover..."
              onChange={changeCameraHandler}
            >
              <option>Curiosity</option>
              <option>Opportunity</option>
              <option>Spirit</option>
            </Select>
          </VStack>
          <VStack>
            <Text fontSize={18} fontStyle="italic">
              Camera
            </Text>
            <Select
              name="Rovers"
              placeholder="Select a camera..."
              onChange={updatedCameraHandler}
            >
              {options}
            </Select>
          </VStack>
          <VStack>
            <Button
              fontSize={16}
              fontStyle="italic"
              colorScheme="blackAlpha"
              onClick={submitHandler}
            >
              Submit
            </Button>
          </VStack>
        </HStack>
      </FormControl>
    </FullScreenSection>
  );
};

export default Selections;
