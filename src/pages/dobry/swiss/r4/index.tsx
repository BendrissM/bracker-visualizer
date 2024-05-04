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

// const intervalMs = 6 * 1000;

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["swiss-dorby-rounds-r4"],
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
    queryKey: ["swiss-dorby-rounds-r4"],
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

  const decider = data[3]?.matchGroups[0]?.matches;
  const secondMatch = data[3]?.matchGroups[1]?.matches;
  const thirdMatch = data[3]?.matchGroups[2]?.matches;

  return (
    <HydrationBoundary state={dehydratedState}>
      <Head>
        <title>DOBRY Swiss Bracket</title>
        <meta name="description" content="created by benoxy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen w-full bg-transparent">
        <div className="flex w-full flex-row gap-12">
          <div className="flex w-full items-end justify-center gap-[12.5rem]">
            <div className="flex flex-col gap-5">
              <div className="flex gap-40">
                <div className="flex flex-col">
                  <h1 className="mb-2 text-center text-5xl font-bold text-white">
                    2-1
                  </h1>
                  <div className="flex gap-8">
                    <Match match={secondMatch?.[0]} group="swiss" big />
                    <Match match={secondMatch?.[1]} group="swiss" big />
                  </div>
                </div>
                <div className="flex flex-col">
                  <h1 className="mb-2 text-center text-5xl font-bold text-white">
                    1-2
                  </h1>
                  <div className="flex gap-8">
                    <Match match={thirdMatch?.[0]} group="swiss" big />
                    <Match match={thirdMatch?.[1]} group="swiss" big />
                  </div>
                </div>
              </div>
              <div className="mb-5 flex flex-col items-center gap-4">
                <h1 className="text-center text-5xl font-bold text-white">
                  3-0 DECIDER
                </h1>
                <Match match={decider?.[0]} group="swiss" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </HydrationBoundary>
  );
}
