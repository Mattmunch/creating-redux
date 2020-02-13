import React, { useReducer } from 'react';
import moodReducer from '../reducers/moodReducer';
import {
  drinkCoffee,
  eatSnack,
  takeNap,
  study
} from '../actions/moodActions';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { getFace } from '../selectors/faceSelectors';

const actions = [
  { name: 'DRINK_COFFEE', text: 'Drink Coffee', stateName: 'coffees', actionCreator: drinkCoffee },
  { name: 'EAT_SNACK', text: 'Snack', stateName: 'snacks', actionCreator: eatSnack },
  { name: 'TAKE_NAP', text: 'Nap', stateName: 'naps', actionCreator: takeNap },
  { name: 'STUDY', text: 'Study', stateName: 'studies', actionCreator: study },
];

const Moods = () => {
  
  const [state, dispatch] = useReducer(moodReducer, {
    coffees: 0,
    snacks: 0,
    naps: 0,
    studies:0
  });
  const handleSelection = (actionCreator) => dispatch(actionCreator());
  

  const face = getFace(state);

  return (
    <>
      <Controls actions={actions} handleSelection={handleSelection} />
      <Face emoji={face} />
    </>

  );
};
export default Moods;
