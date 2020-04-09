export class User {
  id: number;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  roleID: number;
  // roleID: number;
  // genre: string;
  // birthday: Date;
  // phone: string;
  // about: string;

  constructor() {
    this.id = null;
    this.username = 'none';
    this.password = 'none';
    this.firstname = 'none';
    this.lastname = 'none';
    this.roleID = null;
    // this.roleID = null;
    // this.genre = 'none';
    // this.birthday = null;
    // this.phone = 'none';
    // this.about = 'none';
  }
}
