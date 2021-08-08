import api from "./api"

export const BASE_URL = 'https://api.mesto-mkdirdev.nomoredomains.club'

function fixRes(res) {
  return res.ok ? res.json() : Promise.reject(`Произошла ошибка: ${res.status}`)
}


export function register(email, password) {
  return fetch(`${BASE_URL}/signup`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      password, email
    })
  })
    .then(res => fixRes(res))
}

export function authorization(email, password) {
  return fetch(`${BASE_URL}/signin`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      password, email
    })
  })
    .then(res => {
      console.log(res)
      if (res.token) {
        localStorage.setItem('jwt', res.token)
        api.refreshHead()

        return res.token
      }
    })
    .then(res => fixRes(res))
}

export function getToken(token) {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `${token}`
    },
    method: 'GET',
  })
    .then(res => res.json())
    .then(res => fixRes(res))
}