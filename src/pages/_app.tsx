import Head from "next/head";
import { useEffect, useState } from "react";
import DashboardLayout from "../components/layouts/DashboardLayout";
import { auth, initializeFirebase } from "../config/firebase";
import "../styles/global.scss";

import { createClient, dedupExchange, fetchExchange, Provider } from "urql";
import { cacheExchange } from "@urql/exchange-graphcache";
import {
  ItemsDocument,
  ItemsQuery,
  CreateItemMutation,
} from "../generated/graphql";
import { sortBy } from "utils/sortBy";
import AuthenticationPage from "./auth";
initializeFirebase();

const client = createClient({
  url: "https://ovoplus.hasura.app/v1/graphql",
  exchanges: [
    dedupExchange,
    cacheExchange({
      updates: {
        Mutation: {
          insert_delivery_items_one: (result: any, args, cache, info) => {
            cache.updateQuery({ query: ItemsDocument }, (data: ItemsQuery) => {
              data.delivery_items.push(result.insert_delivery_items_one);
              return data;
            });
          },
          delete_delivery_items: (result: any, args, cache, info) => {
            cache.updateQuery({ query: ItemsDocument }, (data: ItemsQuery) => {
              data.delivery_items.splice(
                data.delivery_items.findIndex(
                  (i) => i.id === result.delete_delivery_items.returning[0].id
                ),
                1
              );
              return data;
            });
          },
        },
      },
    }),
    fetchExchange,
  ],
});

function MyApp({ Component, pageProps }) {
  const [is, setIs] = useState<boolean | undefined>(undefined);
  function isLoggedIn(): Promise<boolean> {
    return new Promise((resolve) => {
      let unsub;
      unsub = auth().onAuthStateChanged((user) => {
        resolve(!!user);
        unsub();
      });
    });
  }

  useEffect(() => {
    (async () => {
      setIs(await isLoggedIn());
    })();
  }, []);
  if (typeof is === "undefined") {
    return null;
  }
  return (
    <Provider value={client}>
      {is ? (
        <DashboardLayout onLogout={() => setIs(false)}>
          <Component {...pageProps} />
        </DashboardLayout>
      ) : (
        <AuthenticationPage onSignIn={() => setIs(true)} />
      )}
    </Provider>
  );
}

export default MyApp;
