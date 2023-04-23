import RoverList from "../components/RoverList";
import { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Selections from "../components/Selections";


function HomePage(params) {
  const [roverArray, setRoverArray] = useState([]);
  const [selectedID, setSelectedID] = useState(0);
  const [state, setState] = useState({
    selectedRover: '',
    selectedCamera: '',
  });
  const [showItems, setShowItems] = useState(5);

  const callback = payload => {
    setState(payload);
  console.log(state);
}

  useEffect(() => {
    const getRovers = () => {
      if (state.selectedCamera === '' && state.selectedRover === '') {
      fetch(
        "https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/photos?sol=1000"
      ).then((response) =>
        response.json().then((data) => {
          setRoverArray(data.photos);
        })
      );
    } else {
      fetch(
        `https://mars-photos.herokuapp.com//api/v1/rovers/${state.selectedRover}/photos?sol=1000&camera=${state.selectedCamera}`
      ).then((response) =>
        response.json().then((data) => {
          setRoverArray(data.photos);
        })
      );
    }
    };
    getRovers();
  }, [state]);


  return (
    <ChakraProvider>
      <main>
        <Header />
        <Selections callback={callback}/>
        <RoverList
          roverArray={roverArray}
          selectedID={selectedID}
          setSelectedID={setSelectedID}
          showItems={showItems}
          setShowItems={setShowItems}
        />
        <Footer />
      </main>
    </ChakraProvider>
  );
}

export default HomePage;
