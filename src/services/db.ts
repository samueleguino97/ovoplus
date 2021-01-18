import { firestore, initializeFirebase } from "../config/firebase";

class Database {
  static init() {
    initializeFirebase();
    return new Database();
  }

  async query<T = any>(collection: string, queryParams: [string, any, any]) {
    const ref = firestore()
      .collection(collection)
      .where(...queryParams);

    const queryResult = await ref.get();
    return queryResult.docs.map(
      (doc: any) => ({ ...doc.data(), id: doc.id } as T)
    );
  }

  async get<T = any>(collection: string, id?: string): Promise<T[]> {
    const ref = firestore().collection(collection);
    if (id) {
      ref.doc(id.toString());
    }
    const queryResult = await ref.get();
    return queryResult.docs.map(
      (doc: any) => ({ ...doc.data(), id: doc.id } as T)
    );
  }

  async create<T = any>(colection: string, data: Partial<T>): Promise<T> {
    const createdDataRef = await firestore().collection(colection).add(data);
    const createdData: T = { ...data, id: createdDataRef.id } as any;
    return createdData;
  }

  async update<T = any>(
    colection: string,
    id: string,
    data: Partial<T>
  ): Promise<boolean> {
    await firestore().collection(colection).doc(id).update(data);

    return true;
  }
  async delete<T = any>(colection: string, id: string): Promise<boolean> {
    await firestore().collection(colection).doc(id).delete();

    return true;
  }
}
export default Database;
