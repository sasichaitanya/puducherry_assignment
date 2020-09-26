import { BOOK_EVENT } from './actionTypes';

export const bookEvent = (obj) => {
  return {
    type: BOOK_EVENT,
    payload: obj
  }
}
