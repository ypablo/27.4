import { ADD_COMMENT } from './actions';
import { EDIT_COMMENT } from './actions';
import { REMOVE_COMMENT } from './actions';
import { THUMB_UP_COMMENT } from './actions';
import { THUMB_DOWN_COMMENT } from './actions';

const initialState = [];

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [
                {
                    id: action.id,
                    text: action.text,
                    votes: 0
                }
                , ...state]
        case REMOVE_COMMENT:
            return comments: state.comments.filter(comment => comment.id !== action.id)
        case EDIT_COMMENT:
            //znajdz komentarz ktorego id == action.id
            // map metoda + if id == action.id
            //text = action.text lub votes +=1
            return Object.assign({}, state, {
                comments: [
                    {
                        id: action.id,
                        text: action.text
                    }
                ]
            });
        case THUMB_UP_COMMENT:
            return Object.assign({}, state, {
                comments: [
                    {
                        id: action.id,
                        votes: votes + 1
                    }
                ]
            });
        case THUMB_DOWN_COMMENT:
            return Object.assign({}, state, {
                comments: [
                    {
                        id: action.id,
                        votes: votes - 1
                    }
                ]
            });
        default:
            return state;
    }
}