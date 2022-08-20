import { LocaleProvider } from "antd";
import { API_BASE_URL, ACCESS_TOKEN, USER, IS_AUTHENTICTED, USER_ID } from "../component/common/constants";

const request = options => {
  const headers = new Headers();

  if (options.setContentType !== false) {
    headers.append("Content-Type", "application/json");
  }

  if (localStorage.getItem(ACCESS_TOKEN)) {
    headers.append(
      "Authorization",
      "Bearer " + localStorage.getItem(ACCESS_TOKEN)
    );
  }

  const defaults = { headers: headers };
  options = Object.assign({}, defaults, options);

  return fetch(options.url, options).then(response =>
    response.json().then(json => {
      console.log(response)
      if(response.status == 401){
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(USER)
        localStorage.removeItem(IS_AUTHENTICTED)
        //localStorage.removeItem("persist:root")
      }
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    }).catch(()=>console.log("error while Fetching"))
  );
};

export const login = (loginRequest)=> {
  console.log("dhhhd")
  return request({
    url: API_BASE_URL + "/auth/signin",
    method: "POST",
    body: JSON.stringify(loginRequest)
  });
}

export function signup(signupRequest) {
  return request({
    url: API_BASE_URL + "/auth/users",
    method: "POST",
    body: JSON.stringify(signupRequest)
  });
}

export function getCurrentUser() {
  if (!localStorage.getItem(ACCESS_TOKEN)) {
    console.log("hereeManj")
    return Promise.reject("No access token set.");
  }

  return request({
    url: API_BASE_URL + "/auth/users/me",
    method: "GET"
  });
}

export function getUserProfile(username) {
  if (!localStorage.getItem(ACCESS_TOKEN)) {
    return Promise.reject("No access token set.");
  }

  return request({
    url: API_BASE_URL + "/auth/users/summary/" + username,
    method: "GET"
  });
}

export function getAllUsers() {
  if (!localStorage.getItem(ACCESS_TOKEN)) {
    return Promise.reject("No access token set.");
  }

  return request({
    url: API_BASE_URL + "/auth/users",
    method: "GET"
  });
}

export function uploadImage(uploadImageRequest) {
  if (!localStorage.getItem(ACCESS_TOKEN)) {
    return Promise.reject("No access token set.");
  }

  return request({
    setContentType: false,
    url: API_BASE_URL + "/media/images",
    method: "POST",
    body: uploadImageRequest
  });
}

export function updateProfilePicture(uri) {
  if (!localStorage.getItem(ACCESS_TOKEN)) {
    return Promise.reject("No access token set.");
  }

  return request({
    url: API_BASE_URL + "/auth/users/me/picture",
    method: "PUT",
    body: uri
  });
}

export function createPost(createPostRequest) {
  if (!localStorage.getItem(ACCESS_TOKEN)) {
    return Promise.reject("No access token set.");
  }

  return request({
    url: API_BASE_URL + "/post/posts",
    method: "POST",
    body: JSON.stringify(createPostRequest)
  });
}

export function getCurrentUserPosts() {
  if (!localStorage.getItem(ACCESS_TOKEN)) {
    return Promise.reject("No access token set.");
  }

  return request({
    url: API_BASE_URL + "/post/posts/me",
    method: "GET"
  });
}

export function getUserPosts(username) {
  if (!localStorage.getItem(ACCESS_TOKEN)) {
    return Promise.reject("No access token set.");
  }

  return request({
    url: API_BASE_URL + "/post/posts/" + username,
    method: "GET"
  });
}

export function follow(followRequest) {
  
  if (!localStorage.getItem(ACCESS_TOKEN)) {
    return Promise.reject("No access token set.");
  }


  console.log(followRequest);

  return request({
    url: API_BASE_URL + "/graph/associations/"+followRequest.follower.id+"/"+followRequest.following.id+"/test",
    method: "GET"
  });
}

export function getfollowersAndFollowing(id) {
  if (!localStorage.getItem(ACCESS_TOKEN)) {
    return Promise.reject("No access token set.");
  }

  return request({
    url: API_BASE_URL + "/graph/associations/"+id+"/degree",
    method: "GET"
  });
}

export function isFollowing(usernameA, usernameB) {
  if (!localStorage.getItem(ACCESS_TOKEN)) {
    return Promise.reject("No access token set.");
  }

  return request({
    url: API_BASE_URL + "/graph/associations/" + usernameA +"/"+ usernameB+"?type=FOLLOW",
    method: "GET"
  });
}

export function getfollowers(user_id) {
  if (!localStorage.getItem(ACCESS_TOKEN)) {
    return Promise.reject("No access token set.");
  }

  return request({
    url: API_BASE_URL + "/graph/objects/" + user_id + "/adjacents?type=USER&associationType=FOLLOWER",
    method: "GET"
  });
}

export function getfollowing(user_id) {
  if (!localStorage.getItem(ACCESS_TOKEN)) {
    return Promise.reject("No access token set.");
  }

  return request({
    url: API_BASE_URL + "/graph/objects/" + user_id + "/adjacents?type=USER&associationType=FOLLOW",
    method: "GET"
  });
}

export function getFeed(username, pagingState) {
  if (!localStorage.getItem(ACCESS_TOKEN)) {
    return Promise.reject("No access token set.");
  }

  let url = API_BASE_URL + "/feed/feed/" + username;

  if (pagingState != null) {
    url = url + "?ps=" + pagingState;
  }

  return request({
    url: url,
    method: "GET"
  });
}
