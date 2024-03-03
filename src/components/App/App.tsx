import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/logo.svg';

import './App.scss';
import Playercard from './Playercard';
import Deckcard from './Deckcard';
import Adversaire from './Adversaire';
import { useEffect, useState } from 'react';

function App() {


  const {deck, player, adversaire, outofthedeck, gameover, discard, exchange} = useSelector((store:any) => store.deck)

  const dispatch = useDispatch();


  const random = () => {

   let lancer = Math.floor(Math.random()*52);

    while (outofthedeck.includes(lancer)) {lancer = Math.floor(Math.random()*52)}
 
    return lancer;
      }
 
  const getcard = () => {

    checkgamestate();

    if (gameover==false){

    let randomcardindex = random();

    let randomcard = deck.filter(e =>  {return e.index == randomcardindex });

    console.log(randomcard[0]);

    dispatch({type:'GETCARD', payload:randomcard[0]});

    console.log(deck, player);

    let randomcardindex2 = random();

    let randomcard2 = deck.filter(e =>  {return e.index == randomcardindex2 });

    dispatch({type:'ADVGETCARD', payload:randomcard2[0]});

    console.log(outofthedeck);}

  }

  const restart = () => {

    dispatch({type:'RESTART'});
    window.location.reload();


  }

  const checkgamestate = () => {
  
    console.log(deck.length);
   if((deck.length<2)||(discard>8)||(exchange>8)){dispatch({type:'GAMEOVER'}), alert('gameover, please restart the game'),window.location.reload()} 

  }
  


      return (
              
        <div style={{textAlign:'center', marginTop:'5vh'}}>
          
          <ul style={{listStyle: 'none'}}><h2 style={{marginLeft:'-2vw'}}>Rules</h2>
            <li>Click on one of your card to threw it to the central deck</li>
            <li>Click on any adversaire card to trade the weakest card of your adversaire with your weakest card</li>
            <li>Click on one of the central deck card to exchange one deck card with your weakest card</li>
            <li>Game end when no card are left on the center deck or when player has used every discards or used every exchange</li>
            <li>Highest score when gameover occur win</li>

          </ul>


          <p>Discard available: {10-discard}</p>

          <p>Exchange available: {10-exchange}</p>


          <button type='button' onClick={getcard}>

            Get card

          </button>

        <p>You have {player.length} cards and {player.reduce((oldvalue, newvalue) => oldvalue + newvalue.number, 0)} points</p>

          <Playercard/>

          <p>It remain {deck.length} cards in the deck</p>

          <Deckcard/>

          <p>Your adversaire has {adversaire.length}  cards and {adversaire.reduce((oldvalue, newvalue) => oldvalue + newvalue.number, 0)} points</p>

            <Adversaire/>

            <p></p>

            <button type='button' onClick={restart}>

           Restart

            </button>

          </div>

        
        );
}

export default App;
