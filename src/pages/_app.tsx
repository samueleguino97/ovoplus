import Head from "next/head";
import { useEffect } from "react";
import DashboardLayout from "../components/layouts/DashboardLayout";
import { initializeFirebase } from "../config/firebase";
import "../styles/global.scss";

import { createClient, dedupExchange, fetchExchange, Provider } from "urql";
import { cacheExchange } from "@urql/exchange-graphcache";
import {
  ItemsDocument,
  ItemsQuery,
  CreateItemMutation,
} from "../generated/graphql";
import { sortBy } from "utils/sortBy";
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
  return (
    <Provider value={client}>
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    </Provider>
  );
}

export default MyApp;
