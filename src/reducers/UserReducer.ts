interface IPayload {
    firstName: string;
}

interface IAction {
    type: string
    payload: IPayload
}

export default (state : object = {}, action : IAction) => {

    switch(action.type) {
        case "SET_FIRST_NAME":
            return { ...state, firstName: action.payload.firstName }
        break;
    }

    return state;

}