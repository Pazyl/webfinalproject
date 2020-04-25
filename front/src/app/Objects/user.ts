export class User {
  id: number;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  roleID: number;
  email: string;
  gender: string;
  phone: string;
  birthday: string;

  constructor() {
    this.id = null;
    this.username = 'none';
    this.password = 'none';
    this.firstname = 'none';
    this.lastname = 'none';
    this.roleID = null;
    this.email = 'none';
    this.gender = 'none';
    this.phone = 'none';
    this.birthday = 'none';
  }
}
