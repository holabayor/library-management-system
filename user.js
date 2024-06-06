export default class User {
  /**
   * Creates a new User object
   * @param {string} name - The name of the user
   */
  constructor(name) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.borrowedBooks = [];
  }
}
