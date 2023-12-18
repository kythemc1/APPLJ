export const API_ROOT = 'http://localhost:8080/api/';
export const TIMEOUT = 10000;

export const API_KEY_CHAT_BOT =
  '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';

export const API_KEY_YOUTUBE='AIzaSyCzfyJbE3YdUIzHB5CJQIfK003bptgFg3Y';

export const API = {
  API_CHAT_BOT: 'https://api.openai.com/v1/completions',

  //auth
  API_AUTH_LOGIN: `${API_ROOT}auth/login`,
  API_REGISTER : `${API_ROOT}users/create`,

  //Listen
  API_GET_COUNT_LIST_VIDEO: `${API_ROOT}listen/get-total-listen/`,
  API_GET_LISTEN_N1: `${API_ROOT}listen/get-all-n1/1`,
  API_GET_LISTEN_N2: `${API_ROOT}listen/get-all-n2/1`,
  API_GET_LISTEN_N3: `${API_ROOT}listen/get-all-n3/1`,
  API_GET_LISTEN_N4: `${API_ROOT}listen/get-all-n4/1`,
  API_GET_LISTEN_N5: `${API_ROOT}listen/get-all-n5/1`,

};
