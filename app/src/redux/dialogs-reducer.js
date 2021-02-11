const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    messagesData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'I very happy' },
        { id: 4, message: 'Hi, brother' },
        { id: 5, message: 'I am fine' }
    ],
    dialogsData: [
        { id: 1, name: 'Andrew' },
        { id: 2, name: 'sergey' },
        { id: 3, name: 'sasha' },
        { id: 4, name: 'yura' },
        { id: 5, name: 'julia' }
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData, { id: 6, message: body }]
            };
        default:
            return state;
    }
}

export const sendMessageCreater = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;