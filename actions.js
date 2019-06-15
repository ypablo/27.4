import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4(),
        votes: 0
    }
}

function editComment(text) {
    return {
        type: EDIT_COMMENT,
        text,
        id: id,
        votes: votes
    }
}

function remComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: id
    }
}

function upComment(rating) {
    return {
        type: THUMB_UP_COMMENT,
        id: id,
        votes: votes + 1
    }
}

function downComment(rating) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: id,
        votes: votes - 1
    }
}