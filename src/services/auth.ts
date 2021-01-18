import { auth } from "../config/firebase";
import { User, UserRegisterInputs } from "../models/User";

class Auth {
  isLoggedIn() {
    return new Promise((resolve) => {
      let unsubscribe;
      unsubscribe = auth().onAuthStateChanged((user) => {
        unsubscribe();
        resolve(!!user);
      });
    });
  }

  static async login(email: string, password: string): Promise<User | null> {
    try {
      const loggedUser = await auth().signInWithEmailAndPassword(
        email,
        password
      );
      return loggedUser.user as User;
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        return null;
      }
      throw error;
    }
  }
  static async register(userData: UserRegisterInputs) {
    try {
      await auth().createUserWithEmailAndPassword(
        userData.email,
        userData.password
      );
      return true;
    } catch (error) {
      return false;
    }
  }
}
export default Auth;
