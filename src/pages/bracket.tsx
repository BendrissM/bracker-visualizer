import RoundComponent from "@/components/bracketRound";
import { getGoogleSheetData } from "@/services/googleSheetService";
import { Comps } from "@/types";
import type { Round } from "@/types/Round";
import { SheetType } from "@/types/SheetType";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";
import { type InferGetServerSidePropsType } from "next";
import Head from "next/head";

// const intervalMs = 5 * 1000;

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["bracket"],
    queryFn: async () => await getGoogleSheetData({ type: SheetType.BRACKET, comp: Comps.MEATC }),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function Bracket({
  dehydratedState,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { data } = useQuery({
    queryKey: ["bracket"],
    queryFn: async () => {
      const response = await axios.get<Round<SheetType.BRACKET>[]>("/api/googleSheet", {
        params: {
          type: SheetType.BRACKET,
          comp: Comps.MEATC,
        },
      });
      return response.data;
    },
    // refetchInterval: intervalMs,
  });

  return (
    <HydrationBoundary state={dehydratedState}>
      <Head>
        <title>MEATC Payoffs</title>
        <meta name="description" content="created by benoxy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col justify-center bg-playoff-bracket bg-cover bg-repeat-round">
        <div className="flex flex-row gap-12 pt-10">
          <div className="flex w-full items-center justify-center gap-16 px-12">
            {data?.map((round, idx) => (
              <RoundComponent round={round} key={idx} />
            ))}
          </div>
        </div>
      </main>
    </HydrationBoundary>
  );
}
