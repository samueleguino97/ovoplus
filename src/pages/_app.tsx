import Head from "next/head";
import { useEffect } from "react";
import DashboardLayout from "../components/layouts/DashboardLayout";
import { initializeFirebase } from "../config/firebase";
import "../styles/global.scss";
initializeFirebase();
function MyApp({ Component, pageProps }) {
  return (
    <DashboardLayout>
      <Component {...pageProps} />
    </DashboardLayout>
  );
}

export default MyApp;
