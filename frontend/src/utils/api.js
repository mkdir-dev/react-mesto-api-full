class Api {
  constructor({ url, headers }) {
    this._url = url
    this._headers = headers
  }

  _fixPromise(res) {
    // проверить, всё ли в порядке с ответом
    if (res.ok) {
      return res.json()
    }
    // если ошибка, то отклонить промис
    return Promise.reject(`Произошла ошибка: ${res.status}`)
  }

  // получить данные пользователя с сервера
  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      // headers: this._headers
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      }
    })
      .then(res => this._fixPromise(res))
  }

  // получить данные карточек
  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      // headers: this._headers
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      }
    })
      .then(res => this._fixPromise(res))
  }

  // редактировать профиль
  editUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      // headers: this._headers,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        name: `${data.name}`,
        about: `${data.about}`
      })
    })
      .then(res => this._fixPromise(res))
  }

  // сменить аватар
  editUserAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      // headers: this._headers,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        avatar: `${data.avatar}`
      })
    })
      .then(res => this._fixPromise(res))
  }

  // добавить карточку
  addCard(data) {

    console.log(data);

    return fetch(`${this._url}/cards`, {
      method: 'POST',
      // headers: this._headers,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        name: `${data.name}`,
        link: `${data.link}`
      })
    })
      .then(res => this._fixPromise(res))
  }

  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: 'DELETE',
      // headers: this._headers
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then(res => this._fixPromise(res))
  }

  addLikeCard(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      method: 'PUT',
      // headers: this._headers
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then(res => this._fixPromise(res))
  }

  deleteLikeCard(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      method: 'DELETE',
      // headers: this._headers
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then(res => this._fixPromise(res))
  }

  changeLikeCardStatus(id, isLiked) {
    if (isLiked) {
      return this.deleteLikeCard(id)
    } else {
      return this.addLikeCard(id)
    }
  }
}

const api = new Api({
  url: 'https://api.mesto-mkdirdev.nomoredomains.club',
  /*
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`, // я не могу фиксировать так токен, поэтому убираем headers
  }
  */
})

export default api