class Service {
  static getUsers() {
    return fetch("https://randomuser.me/api/?results=15");
  }
}

export default Service;
