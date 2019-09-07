import * as Actions from './app.actions';
import { Employee } from '../model/employee';

const initialState: Employee[] = [];

export function employeeReducer(state = initialState, action: Actions.AppActions): Employee[] {
    switch (action.type) {
        case Actions.ADD_EMPLOYEE:
            return [...state, action.payload];
        case Actions.GET_EMPLOYEES:
            return action.payload;
        case Actions.DELETE_EMPLOYEE:
            if (state.length <= 1) {
                return initialState;
            }
            return state.filter(x => x.id + '' !== action.payload + '')
        default:
            return state;
    }
}
