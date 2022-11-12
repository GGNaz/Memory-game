// import logo from './logo.svg';
import "./App.css";

import React, { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import GameTimer from "./Components/GameTimer";
import mlbbLogo from "./Assets/mlbb.jpg"
import mlbbIcon from "./Assets/mlbb-1.png"
import fanny from "./Assets/fanny.jpg";
import gusion from "./Assets/gusion.jpg";
import diggie from "./Assets/diggie.jpg";
import nata from "./Assets/nata.jpg";

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
          card:( <img src={fanny} alt="fanny" className="h-50 w-full" />),
        },
        {
          name: "B",
          card: ( <img src={gusion} alt="gusion" className="h-50 w-full" />),
        },
        {
          name: "C",
          card: ( <img src={diggie} alt="diggie" className="h-50 w-full" />),
        },
        {
          name: "D",
          card: ( <img src={nata} alt="nata" className="h-50 w-full" />),
        },
        {
          name: "E",
          card: ( <img src={fanny} alt="fanny" className="h-50 w-full" />),
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

  }

  const time = new Date();
  time.setSeconds(time.getSeconds() + 60);

  return (
    <div className="bg-slate-700 min-h-full">
      {alertModal()}
      {/* <GameTimer expiryTimestamp={time} /> */}
      <div className="flex flex-row justify-center "><img style={{ height: "200px" }} src={mlbbLogo} alt="mlbblogo" /></div>
      <div className="grid grid-cols-5 gap-4">
        {loadCards?.length > 0 &&
          loadCards.map((data, index) => {
            const { title, isClick } = data;
            return (
              <div
              
                onClick={() => selectCard(title, index)}
              >

                <ReactCardFlip isFlipped={isClick} flipDirection="horizontal">
                  <div className="h-50 w-full border"> <img src={mlbbIcon} alt="cardIcon" /></div>
                 
             
                  {isClick && <div key={index} className="h-50 w-full border">{title.card}</div>}

                </ReactCardFlip>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default App;
