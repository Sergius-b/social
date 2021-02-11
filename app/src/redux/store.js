import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


let store = {
    _state: {
        loginData: [
            { login: 'sergey',password: 'sergey', isAuth: false }
        ],
        
        profilePage: {
            postData: [
                { id: 1, message: 'Hello!'},
                { id: 2, message: 'Hola!'}
            ],

            newPostText: ['hello guys']
        },

        dialogsPage: {
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
    },
    _callSubscriber() {
        console.log('state cnahged')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
}

export const addPostActionCreater = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const sendMessageCreater = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })


export default store;

store.subscribe(store._state)
