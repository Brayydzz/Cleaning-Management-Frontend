require("dotenv").config();

const url = process.env.REACT_APP_API_ENDPOINT;
export function AuthFetchRequest(uri, token = "", method = "GET", data) {
  return new Promise(async (resolve, reject) => {
    let response = await fetch(url + uri, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(data),
    });
      const json = await response.json();
      resolve(json);
    
  });
}

export function AuthFetchRequestImages(uri, token = "", data, method = "POST") {
  return new Promise(async (resolve, reject) => {
    let response = await fetch(url + uri, {
      method: method,
      headers: {
        Authorization: token,
      },
      body: data,
    });

    const json = await response.json();
    resolve(json);
  });
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

export function checkAvailable(availableString, date, hoursRequired) {
  // Check if hour matches beginning of time (returns false if it is)
  // If it's doesn't match, check the next X amount of hours are available
  let availableArray = availableString.split("");

  for (let i = 0; i < hoursRequired * 4; i++) {
    if (
      availableArray[
        date.getHours() * 4 + Math.round((date.getMinutes() / 60) * 4) + i
      ] !== "0"
    ) {
      return false;
    }
  }
  return true;
}

export function setModal(modalData, modalType, cb) {
  cb({
    type: "setModalOpen",
    modalOpen: true,
    modalData,
    modalType
  })
}

export function setTimeAvailable(availableString, date, hoursRequired) {
  let availableArray = availableString.split("");
  let defaultString =
    "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
  if (!availableString) {
    availableArray = defaultString.split("");
  }
  // Run over all the array items from the Date Hours + hours required and set it to one
  for (
    let i = 0; i < hoursRequired * 4; i++) {
    availableArray[date.getHours() * 4 + Math.round((date.getMinutes() / 60) * 4) + i] = "1";
  }
  return availableArray.join("");
}
