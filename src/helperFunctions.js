require("dotenv").config();


const url = process.env.REACT_APP_API_ENDPOINT;
export async function AuthFetchRequest(uri, token = "", method = "GET", data) {
  let res = await fetch(url + uri, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(data),
  });
  let json = await res.json();
  return json;
}

export async function FetchRequest(uri, method = "GET", data) {
  let res = await fetch(url + uri, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  let json = await res.json();
  return json;
}
export function getUser(token){
  
}
