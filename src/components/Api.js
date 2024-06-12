export default class Api {
  constructor({ baseUrl, token, id, headers }) {
    this.baseUrl = baseUrl;
    this.token = token;
    this.id = id;
    this.headers = headers;
  }

  getUser() {
    return fetch(`${this.baseUrl}/users`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: this.token,
      },
    });
  }

  getUserMe() {
    return fetch(`${this.baseUrl}/users/me`, {
     // method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: this.token,
      },
    });
  }

  userEdit(name, about) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: this.token,
      },
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    });
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: this.token,
      },
    });
  }

  createCard(data) {
    return fetch(`${this.baseUrl}/cards`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        ...this.headers,
        authorization: this.token,
      },
      body: JSON.stringify(data),
    });
  }

  Update(data) {
    return fetch(`${this.baseUrl}/cards`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        ...this.headers,
        authorization: this.token,
      },
      body: JSON.stringify(data),
    });
  }

  deleteCard(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        ...this.headers,
        authorization: this.token,
      }
    });
}

addLikes(cardId) {
  return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      ...this.headers,
      authorization: this.token,
    }
  })
}

removeLikes(cardId) {
  return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      ...this.headers,
      authorization: this.token,
    }
  })
}

editAvatar({ avatar }) {
  return fetch(`${this.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      ...this.headers,
      authorization: this.token,
    },
    body: JSON.stringify({ avatar: avatar }),
  })
}
}
