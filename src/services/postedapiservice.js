import TokenService from "./token-service";
import config from "../config";

const postedapiservice = {
  postCard(content, title) {
    return fetch(`${config.API_ENDPOINT}/postcards`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        title,
        content,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  // getPosteds() {
  //   return fetch(`${config.API_ENDPOINT}/posteds`, {
  //     headers: {}
  //   }).then(res =>
  //     !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
  //   );
  // },
  // getPosted(postedId) {
  //   return fetch(`${config.API_ENDPOINT}/posteds/${postedId}`, {
  //     headers: {
  //       authorization: `bearer ${TokenService.getAuthToken()}`
  //     }
  //   }).then(res =>
  //     !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
  //   );
  // },
  // getPostedComments(postedId) {
  //   return fetch(`${config.API_ENDPOINT}/posteds/${postedId}/comments`, {
  //     headers: {
  //       authorization: `bearer ${TokenService.getAuthToken()}`
  //     }
  //   }).then(res =>
  //     !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
  //   );
  // },
};

export default postedapiservice;
