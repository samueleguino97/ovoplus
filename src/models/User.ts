export interface User {
  uid: string;
  email: string;
  displayName: string;
  phoneNumber: string;
}

export interface UserLoginInputs {
  email: string;
  password: string;
}
export interface UserRegisterInputs {
  email: string;
  password: string;
}
