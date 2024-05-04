import Match from "@/components/dorby/match";
import { getGoogleSheetData } from "@/services/googleSheetService";
import { Comps } from "@/types";
import type { Round } from "@/types";
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

const intervalMs = 6 * 1000;

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["bracket-dorby-r1"],
    queryFn: async () =>
      await getGoogleSheetData({ type: SheetType.BRACKET, comp: Comps.DORBY }),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function Home({
  dehydratedState,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { data } = useQuery({
    queryKey: ['bracket-dorby-r1'],
    queryFn: async () => {
      const response = await axios.get<Round[]>('/api/googleSheet', {
        params: {
          type: SheetType.BRACKET,
          comp: Comps.DORBY,
        },
      });
      return response.data;
    },
    refetchInterval: intervalMs,
  });

  if (!data) return null;

  const firstMatch = data[0]?.matchGroups[0]?.matches;

  return (
    <HydrationBoundary state={dehydratedState}>
      <Head>
        <title>DOBRY Swiss Bracket</title>
        <meta name="description" content="created by benoxy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen w-full bg-transparent">
        <div className="flex w-full flex-row gap-12">
          <div className="flex w-full items-center justify-center gap-[5.5rem]">
            <div className="flex flex-col gap-5">
              <h1 className="text-center text-5xl font-bold text-white">
                WB ROUND 1
              </h1>
              <div className="flex gap-14">
                <Match match={firstMatch?.[0]} group="wb-r1" />
                <Match match={firstMatch?.[1]} group="wb-r1" />
                <Match match={firstMatch?.[2]} group="wb-r1" />
                <Match match={firstMatch?.[3]} group="wb-r1" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </HydrationBoundary>
  );
}
