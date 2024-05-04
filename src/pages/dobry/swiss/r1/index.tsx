import Match from "@/components/dorby/match";
import { getGoogleSheetData } from "@/services/googleSheetService";
import { Comps} from "@/types";
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

// const intervalMs = 6 * 1000;

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["swiss-dorby-rounds-r1"],
    queryFn: async () =>
      await getGoogleSheetData({ type: SheetType.SWISS, comp: Comps.DORBY }),
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
      queryKey: ["swiss-dorby-rounds-r1"],
      queryFn: async () => {
        const response = await axios.get<Round[]>("/api/googleSheet", {
          params: {
            type: SheetType.SWISS,
            comp: Comps.DORBY,
          },
        });
        return response.data;
      },
      // refetchInterval: intervalMs,
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
            <div className="flex flex-col gap-8">
              <Match match={firstMatch?.[0]} group="swiss" />
              <Match match={firstMatch?.[1]} group="swiss" />
            </div>
            <div className="flex">
              <div className="mt-20">
                <div className="flex flex-col gap-8">
                  <Match match={firstMatch?.[2]} group="swiss" />
                  <Match match={firstMatch?.[3]} group="swiss" />
                </div>
              </div>
              <h1 className="mx-3 pt-5 text-center text-5xl font-bold text-white">
                0-0
              </h1>
              <div className="mt-20">
                <div className="flex flex-col gap-8">
                  <Match match={firstMatch?.[4]} group="swiss" />
                  <Match match={firstMatch?.[5]} group="swiss" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <Match match={firstMatch?.[6]} group="swiss" />
              <Match match={firstMatch?.[7]} group="swiss" />
            </div>
          </div>
        </div>
      </main>
    </HydrationBoundary>
  );
}
