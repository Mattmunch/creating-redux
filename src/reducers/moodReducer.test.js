import { drinkCoffee, eatSnack, takeNap, study } from '../actions/moodActions';
import reducer from './moodReducer';


describe('mood reducer', () => {
  it('handles the DRINK_COFFEE case', () => {
    const action = drinkCoffee();
    const initialState = { coffees: 1 };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ coffees:2 });
  });
  it('handles the EAT_SNACK case', () => {
    const action = eatSnack();
    const initialState = { snacks: 1 };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ snacks:2 });

  });
  it('handles the TAKE_NAP case', () => {
    const action = takeNap();
    const initialState = { naps: 1 };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ naps:2 });

  });
  it('handles the STUDY case', () => {
    const action = study();
    const initialState = { studies: 1 };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ studies: 2 });

  });
})
;
