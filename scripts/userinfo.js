export const users = [
  {
    name: " ",
    job: " ",
  },
];

export class UserInfo {
  constructor(name, job) {
    this._name = name;
    this._job = job;
  }

  getUserInfo() {
    this._name = document.querySelector(".popup__description-name");
    this._job = document.querySelector(".popup__description-job");
  }

  setUserInfo() {
    this.getUserInfo();
    this._name.value = document.querySelector(".profile__title").textContent;
    this._job.value = document.querySelector(
      ".profile__subheading"
    ).textContent;
  }
}
