import { Item } from "models/Item";
import { useState, useEffect } from "react";
import db from "services/db";
import useDb from "./useDb";

export default function useItems() {
  const [items, setItems] = useState<Item[]>([]);
  const db = useDb();
  useEffect(() => {
    db.get<Item>("items").then(setItems);
  }, []);
  return items;
}
