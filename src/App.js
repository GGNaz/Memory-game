// import logo from './logo.svg';
import "./App.css";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import GameTimer from "./Components/GameTimer";

const App = () => {
  const [loadCards, setLoadCards] = useState([]);
  const [tempStore, setTempStore] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  let x = 10;

  // getRandomInt(x)

  // function getRandomInt(x) {
  // const getRandomIndex =  Math.floor(Math.random() * x);
  // console.log("getRandomIndex",getRandomIndex)
  // if(getRandomIndex%2==0){

  // }

  // }

  useEffect(() => {
    const generateCard = () => {
      let myArr = [];
      let toLoad = [];

      for (let i = 0; i < 10; i++) {
        myArr.push({
          title: null,
          isClick: false,
        });
      }
      let arr = [
        {
          name: "A",
          card: "https://img.icons8.com/office/200/000000/corgi.png",
        },
        {
          name: "B",
          card: "https://img.icons8.com/office/200/000000/clown-fish.png",
        },
        {
          name: "C",
          card: "https://img.icons8.com/office/200/000000/chicken.png",
        },
        {
          name: "D",
          card: "https://img.icons8.com/office/200/000000/bumblebee.png",
        },
        {
          name: "E",
          card: "https://img.icons8.com/office/200/000000/pig.png",
        },
        // {
        //   name: "F",
        //   card: "https://img.icons8.com/office/200/000000/dolphin.png",
        // },
        // {
        //   name: "G",
        //   card: "https://img.icons8.com/office/200/000000/elephant.png",
        // },
        // {
        //   name: "H",
        //   card: "https://img.icons8.com/office/200/000000/snail.png",
        // },
       
      ];
      // shuffle(arr);
      console.log("arr", arr.length);

      for (let i = 0; i < 10; i++) {
        const randomLetters = Math.floor(Math.random() * arr.length);

        const findIfExist = toLoad.filter(
          (item) => item.title.name === arr[randomLetters].name
        );
        if (findIfExist.length >= 2) {
          arr.splice(randomLetters, 1);
          // const newrandomLetters = Math.floor(Math.random() * arr.length);
          let ctr = 0;
          let randomNum = 0;
          do {
            const newrandomLetters = Math.floor(Math.random() * arr.length);
            const findAgain = toLoad.filter(
              (item) => item.title.name === arr[newrandomLetters].name
            );
            if (findAgain.length >= 2) {
              arr.splice(newrandomLetters, 1);
            } else {
              randomNum = newrandomLetters;
            }

            ctr = findAgain.length;
            // i = i + 1;
            // result = result + i;
          } while (ctr >= 2);

          const params = {
            title: arr[randomNum],
            isClick: false,
          };

          toLoad.push(params);
        } else {
          const params = {
            title: arr[randomLetters],
            isClick: false,
          };

          toLoad.push(params);
          // do{
          //   const randomLetters =  Math.floor(Math.random() * arr.length);
          //   const findIfExist = toLoad.filter((item) => item.title === arr[randomLetters])
          // }while(findIfExist<2)
        }

        console.log("randomLetters", arr[randomLetters]);
      }
      setLoadCards(toLoad);
    };
    generateCard();
  }, []);

  const selectCard = (title, index) => {
    let makeCopy = [...loadCards];

    if (tempStore?.length >= 2) {
      console.log("click ctr set 0");
      console.log("asdasdas", tempStore[0][0]);
      tempStore.map((data) => {
        if (tempStore[0][0] !== tempStore[1][0]) {
          makeCopy[data[1]].isClick = false;
          setLoadCards(makeCopy);
        }
      });

      // if(tempStore[0][0] === tempStore[1][0]){
      //   // setTempStore([])
      // }
      setTempStore([]);
      // console.log("loadCards", loadCards);

      // return clickCounter = 0
    } else {
      makeCopy[index].isClick = true;
      setLoadCards(makeCopy);
      setTempStore([...tempStore, [title, index]]);
      return VerticallyCenter()
      // return  toLoad[index].isClick = true

      // return clickCounter = clickCounter +1;
    }
  };
  console.log("loadCards", loadCards);
  console.log("tempStore", tempStore);
  // do {
  //   return myArr.push({
  //     title: "aw",
  //     isClick: false
  //   })
  // } while (i <= getRandomIndex);

  // console.log(Math.floor(Math.random() * 4))
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  function VerticallyCenter() {
    let checkIfWin = 0;
   

    loadCards?.map((data, i) => {
      if (data.isClick === true) {
        checkIfWin = checkIfWin + 1;
      }
      if (checkIfWin === loadCards?.length && loadCards?.length === i + 1) {
        alert("YOU WIN MADA FAKAH");
        // return win = true
      }
    });
    // setOpenModal(win);
    console.log("checkIfWin", checkIfWin);

    // return (
    //   <>
    //     {/* <Button onClick={() => setOpenModal(true)}>Trigger modal</Button>
    //      */}
    //     <Modal
    //       onClose={()=> setOpenModal(false)}
    //       isOpen={openModal}
    //       isCentered
    //     >
    //       <ModalOverlay />
    //       <ModalContent>
    //         <ModalHeader>Congratulations</ModalHeader>
    //         <ModalCloseButton />
    //         <ModalBody>You win! Wanna play again?</ModalBody>
    //         <ModalFooter>
    //           {/* <Button onClick={onClose}>No</Button> */}
    //           <Button onClick={false}>Yes</Button>
    //         </ModalFooter>
    //       </ModalContent>
    //     </Modal>
    //   </>
    // );
  }

  const alertModal = () => {
    return  <Modal
          onClose={()=> setOpenModal(false)}
          isOpen={openModal}
          isCentered
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Congratulations</ModalHeader>
            <ModalCloseButton />
            <ModalBody>You win! Wanna play again?</ModalBody>
            <ModalFooter>
              {/* <Button onClick={onClose}>No</Button> */}
              <Button onClick={false}>Yes</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
  }

  const time = new Date();
  time.setSeconds(time.getSeconds() + 60);

  return (
    <>
    {alertModal()}
      <GameTimer expiryTimestamp={time} />
      <Grid templateColumns="repeat(1, 1fr)">
      <GridItem
               
                w="100%"
                h="200"
                // bg="blue.500"
            
                color="red"
                fontSize={50}
              >
        <label>GAME FOR FUCKING BRAIN</label>
      </GridItem>
      </Grid>
      <Grid templateColumns="repeat(5, 1fr)" gap={6} p="20">
    
        {loadCards?.length > 0 &&
          loadCards.map((data, index) => {
            const { title, isClick } = data;
            return (
              <GridItem
                // style={{transform: `rotateY(180deg)`, transition: `transform 0.8s`,
                // transformStyle:` preserve-3d`}}
                // className="flip-card"
                w="100%"
                h="200"
                // bg="blue.500"
                cursor="pointer"
                onClick={() => selectCard(title, index)}
                color="red"
                fontSize={50}
              >
            
                <ReactCardFlip isFlipped={isClick} flipDirection="horizontal">
                  <img src="https://img.icons8.com/plasticine/400/000000/help.png" />
                  {}
                  {isClick && <img alt={title.name} src={title.card} />}
                  {/* <Box
        
        > {isClick&&title}</Box> */}
                </ReactCardFlip>
              </GridItem>
            );
          })}

      
      </Grid>
    </>
  );
};

export default App;
