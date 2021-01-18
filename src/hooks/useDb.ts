import { useState } from "react";
import Database from "../services/db";

const dbInstance = new Database();

export default function useDb() {
  return dbInstance;
}
