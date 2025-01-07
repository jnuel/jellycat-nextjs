'use client'
import Image from "next/image";
import React from "react";
import './styles.css';
import { useState } from 'react';
import gameData from './GameData';

type Personality = "Toast" | "Tennis Ball" | "Peanut" | "Strawberry" | "Cloud" | "Bubble Tea" | "Disco Ball" | "Croissant" | "Sun" | "Pickle";

const personalities_initial_state: Record<Personality, number> = {
  "Toast": 0,
  "Tennis Ball": 0,
  "Peanut": 0,
  "Strawberry": 0,
  "Cloud": 0,
  "Bubble Tea": 0,
  "Disco Ball": 0,
  "Croissant": 0,
  "Sun": 0,
  "Pickle": 0,
};

export default function Home() {
  const [currentState, setCurrentState] = useState<number>(1);
  const [personalities, setPersonalities] = useState<Record<Personality, number>>(personalities_initial_state);
  const [justStarted, setJustStarted] = useState<boolean>(true);
  const [storyText, setStoryText] = useState<string>("");
  const [endGame, setEndGame] = useState<boolean>(false);
  const [storyImage, setStoryImage] = useState<string>("/larger_images/goodmorning.png");
  const [progress, setProgress] = useState<number>(0);

  function startGame() {
    if (justStarted) {
      setJustStarted(false);
      setStoryImage(gameData[currentState].image);
      setStoryText(gameData[currentState].text);
      setProgress(10); // Initial progress
      // console.log(storyImage);
      // console.log("currentState is ", currentState);
    }
  }

  function changeState(newState: number, selectedPersonalities: Personality[]) {
    if (newState === 0) {
      // console.log("reveal most selected jelly!");
      revealMostSelectedJellycat();
    } else {
      // console.log(personalities);
      // console.log("selected personalities: %s", selectedPersonalities);
      // increase personalities by 1
      const nextPersonalities = { ...personalities };
      selectedPersonalities.forEach(personality => {
        nextPersonalities[personality] = nextPersonalities[personality] + 1;
        // console.log("personality: ", personality);
      });
      setPersonalities(nextPersonalities);
      setStoryImage(gameData[newState].image);
      setStoryText(gameData[newState].text);  
      // console.log("new image: ","\""+gameData[newState].image+"\"");
      // console.log(newState)
      setCurrentState(newState);
      setProgress(progress + 10); // Update progress
    }
  }

  function createButtons() {
    // console.log("current state from create buttons: ", currentState);
    const buttonList = [];

    for (const [choice, info] of Object.entries(gameData[currentState].choices)) {
      // console.log("choices: ", gameData[currentState].choices);
      // console.log("choice: ", choice);
      // console.log("info: ", info);
      const nextState = info[0];
      buttonList.push(<div className="choice-button" onClick={() => changeState(nextState, info[1] as Personality[])}>{choice}</div>);
    }
    return buttonList;
  };

  function revealMostSelectedJellycat() {
    // console.log("calculating fate");
    let maxCount = 0;
    let maxJelly = '';

    setEndGame(true);

    for (const [jellycat, count] of Object.entries(personalities)){
        if (count > maxCount) {
            maxCount = count;
            maxJelly = jellycat;
        }
    }
    // console.log(maxJelly);
    const jellyImagePath = `/smaller_images/id_cards/${maxJelly}.png`;
    setStoryImage(jellyImagePath);
    setStoryText(`You are a ${maxJelly}! Right click or hold the image to save`);
    // console.log(endGame);
  }

  function createShareButton() {
    return (<div className="choice-button" id="choices" onClick={() => {
      const shareMessage = `Check out my Jellycat ID! You can create yours at https://which-jellycat.vercel.app/`;
            navigator.clipboard.writeText(shareMessage).then(() => {
                alert('Link copied to clipboard!');
            }).catch(() => {
                alert('Failed to copy link. Please try again.');
            });
          }}>Share the game with friends</div>);
  }

  return (
    <div className="container">
      { justStarted ? (
        <div>
          <div className="title">What Jellycat are you?</div>
          <div className="image-container">
          <Image
            src="/homescreen_inspo.png"
            alt="Homescreen inspo"
            width={500}
            height={500}
            priority={true}
          />
            {/* <img className="home-screen" src={storyImage} alt="Start"/> */}
            </div>
          <a href="#" className="start-button" onClick={startGame}>Start</a>
        </div>
      ) : (
        <div>
          <div className="game-container" id="game-container">
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="story-text" id="story-text">{storyText}</div>
          <div className="image-container">
          <Image
            src={storyImage}
            alt="Picture of Jellycat"
            width={500}
            height={500}
            priority={true}
          />
                {/* <img id="story-image" src={storyImage} alt="Story"/> */}
          </div>
          <div className="end-div">
            { endGame ? (<div> {createShareButton()} </div>) : <div>{Object.entries(gameData[currentState].choices)? (
                <div className="choices" id="choices"> {createButtons()}
                </div> ): <div></div>}</div>}
            </div>
            </div>
        </div>
      )}
    </div>
  );
}
