import { Reducer } from "@reduxjs/toolkit";
import init from "./initdeck";


const initialState = {
    deck:init(),
    player:[],
    adversaire:[],
    outofthedeck:[],

};

console.log(initialState.deck);



const deck: Reducer<any> = (
  state = initialState,
  action = { type: '@INIT' , payload: undefined}
) => {

    console.log(state.deck);

    console.log(action.payload);

  switch (action.type) {
    case 'GETCARD':
      return {
        ...state,
        deck: [...state.deck.filter(e => { return e.index != action.payload.index; console.log(e.index)})],
        player: [...state.player, action.payload],
        outofthedeck: [...state.outofthedeck, action.payload.index],
      };

      case 'ADVGETCARD':
        return {
          ...state,
          deck: [...state.deck.filter(e => { return e.index != action.payload.index; console.log(e.index)})],
          adversaire: [...state.adversaire, action.payload].sort((a,b) => a.number - b.number),
          outofthedeck: [...state.outofthedeck, action.payload.index],
 
        };

        case 'THROWCARD':
            return {
              ...state,
              player: [...state.player.filter(e => { return e.index != action.payload.index; console.log(e.index)})],
              deck: [...state.deck, action.payload],
              outofthedeck: [...state.outofthedeck.filter(e => { return e != action.payload.index; console.log(e.index)})],
            };

            case 'ADVTHROWCARD':
                return {
                  ...state,
                  adversaire: [...state.adversaire.filter(e => { return e.index != action.payload.index; console.log(e.index)})],
                  deck: [...state.deck, action.payload],
                  outofthedeck: [...state.outofthedeck.filter(e => { return e != action.payload.index; console.log(e.index)})],
                };

                case 'RESTART':
                    return {
                      ...state,
                      adversaire: initialState.adversaire,
                      deck: initialState.deck,
                      outofthedeck: initialState.outofthedeck,
                      player: initialState.player,
                    };


    default:
      return state;
  }

};

export default deck;
