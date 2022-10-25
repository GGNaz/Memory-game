// import logo from './logo.svg';
// import './App.css';
import { Grid, GridItem } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
const App = () => {
  const [loadCards, setLoadCards] = useState([]);
  const [tempStore, setTempStore] = useState([]);
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
          card: (
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAB40lEQVRoge2aP0vDQBiHH0WqUBA3QcFvoLsVtINLwUURFbHufhBt/RQFu1hcFdFZd11dbRUXdREXqw694jWmppd7e0nlHnhJcgnv/X65/Ol7DXgGiwxwCDwAXwlFAygpLbEpJ2ggGAc2RhoqybxNEkty/IxMbNpnI2kidQw7EtIrRyrEcTkiWeBFRdZUR5pGZA24Aq6BVenkLkfkEtgANoELaR2ujEwBH1p/TWDaREdaLq1toAIMqagAW5IduBqRW2BR214CbiR1+PeIa7yRtOGNpA1vpAt6RXkPFLR9BaBOq64oY1nxmWL6HglWlO/ALDCn1vV95T7qsE7Qrij1OAZqIe0mFV+kjhGDZL0wGtKW73LsmGTH0vfIXUjbpIpejo2NtJGawbEnwn3/iek9Mk7ryRQ1tfMETPRRh0iCZTqLpGA0gRUHOkQS7BJu5hPYc6hDJEEeeNRyvALrCegQSTANnAHnwEyCOnyF6BxvJG14I2nD1EjURFpimBqpAkVtu6jaUk/w+R012exKh0iC9vT/Br+n//tFXyrEKrBDa9Z8IC4rCD8TWeBZRfAvMpc6OogzIm/AqbY+EPybH40PapkTkROPBbW0+mCghP2nF1Kxb2Mko8yETby5iroy4XSK1WPLNwvJMpJWMQorAAAAAElFTkSuQmCC" />
          ),
        },
        "B",
        "C",
        "D",
        "E",
      ];
      // shuffle(arr);
      console.log("arr", arr.length);
      console.log("arrasdasd", arr);

      for (let i = 0; i < 10; i++) {
        console.log("i", i);
        const randomLetters = Math.floor(Math.random() * arr.length);
        console.log("na shuffle", arr[randomLetters]);
        const findIfExist = toLoad.filter(
          (item) => item.title === arr[randomLetters]
        );
        if (findIfExist.length >= 2) {
          arr.splice(randomLetters, 1);
          const newrandomLetters = Math.floor(Math.random() * arr.length);
          const params = {
            title: arr[newrandomLetters],
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

  // let clickCounter = 0;

  const selectCard = (title, index) => {
    let makeCopy = [...loadCards];

    if (tempStore?.length >= 2) {
      console.log("click ctr set 0");
      tempStore.map((data) => {
        const getIndex = loadCards.findIndex((item) => item.title === data);
        if (getIndex >= 0) {
          makeCopy[getIndex].isClick = false;
          setLoadCards(makeCopy);
        }
      });
      console.log("loadCards", loadCards);
      setTempStore([]);
      // return clickCounter = 0
    } else {
      makeCopy[index].isClick = true;
      setLoadCards(makeCopy);
      setTempStore([...tempStore, title]);

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

  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6} p="20">
      {loadCards?.length > 0 &&
        loadCards.map((data, index) => {
          const { title, isClick } = data;
          return (
            <GridItem
              w="100%"
              h="200"
              bg="blue.500"
              cursor="pointer"
              onClick={() => selectCard(title, index)}
              color="white"
              fontSize={50}
            >
              {isClick && title}
            </GridItem>
          );
        })}

      {/* <GridItem w='100%' h='200' bg='blue.500' cursor="pointer">B</GridItem>
     <GridItem w='100%' h='200' bg='blue.500' cursor="pointer">A</GridItem>
     <GridItem w='100%' h='200' bg='blue.500' cursor="pointer">B</GridItem> */}
      {/* <GridItem w='100%' h='10' bg='blue.500' />
    <GridItem w='100%' h='10' bg='blue.500' />
    <GridItem w='100%' h='10' bg='blue.500' />
    <GridItem w='100%' h='10' bg='blue.500' />
    <GridItem w='100%' h='10' bg='blue.500' />
    <GridItem w='100%' h='10' bg='blue.500' />
    <GridItem w='100%' h='10' bg='blue.500' />
    <GridItem w='100%' h='10' bg='blue.500' />
    <GridItem w='100%' h='10' bg='blue.500' />
    <GridItem w='100%' h='10' bg='blue.500' />
    <GridItem w='100%' h='10' bg='blue.500' /> */}
    </Grid>
  );
};

export default App;
