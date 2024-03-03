import { Reducer } from "@reduxjs/toolkit";
import init from "./initdeck";


const initialState = {
    deck:init(),
    player:[],
    adversaire:[],
    outofthedeck:[],
    gameover:false,

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
        player: [...state.player, action.payload].sort((a,b) => a.number - b.number),
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
              player: [...state.player.filter(e => { return e.index != action.payload.index; console.log(e.index)})].sort((a,b) => a.number - b.number),
              deck: [...state.deck, action.payload],
              outofthedeck: [...state.outofthedeck.filter(e => { return e != action.payload.index; console.log(e.index)})],
            };

            case 'ADVTHROWCARD':
                return {
                  ...state,
                  adversaire: [...state.adversaire.filter(e => { return e.index != action.payload.index; console.log(e.index)})].sort((a,b) => a.number - b.number),
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
                      gameover:false,
                    };


                    case 'ECHANGECARDPART1':
                      return {
                        ...state,
                        adversaire: [...state.adversaire.filter(e => { return e.index != action.payload.index; console.log(e.index)}).sort((a,b) => a.number - b.number)],
                        player: [...state.player, action.payload].sort((a,b) => a.number - b.number),
  
                      };

                      case 'ECHANGECARDPART2':
                        return {
                          ...state,
                          player: [...state.player.filter(e => { return e.index != action.payload.index; console.log(e.index)})].sort((a,b) => a.number - b.number),
                          adversaire: [...state.adversaire, action.payload].sort((a,b) => a.number - b.number),
    
                        };

                        case 'SHUFFLECARD':
                          return {
                            ...state,
          
                            adversaire: [...state.adversaire].sort(() => Math.random() - 0.5),
                            deck: [...state.deck].sort(() => Math.random() - 0.5),
      
                          };

                          case 'ORDERCARD':
                            return {
                              ...state,
                              player: [...state.player].sort((a,b) => a.number - b.number),
                              adversaire: [...state.adversaire].sort((a,b) => a.number - b.number),
                              deck: [...state.deck].sort((a,b) => a.number - b.number),
        
                            };

                            case 'GAMEOVER':
                              return {
                                ...state,
                                gameover:true,
          
                              };
        
      


    default:
      return state;
  }

};

export default deck;
