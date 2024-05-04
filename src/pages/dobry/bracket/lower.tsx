import Match from '@/components/dorby/match';
import { getGoogleSheetData } from '@/services/googleSheetService';
import { Comps } from '@/types';
import type { Round } from '@/types';
import { SheetType } from '@/types/SheetType';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
  useQuery,
} from '@tanstack/react-query';
import axios from 'axios';
import { type InferGetServerSidePropsType } from 'next';
import Head from 'next/head';

const intervalMs = 6 * 1000;

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['bracket-dorby-lower'],
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
    queryKey: ['bracket-dorby-lower'],
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

  const firstMatch = data[1]?.matchGroups[0]?.matches;
  const quarter = data[2]?.matchGroups[1]?.matches;
  const semi = data[3]?.matchGroups[1]?.matches;
  const finals = data[4]?.matchGroups[0]?.matches;

  return (
    <HydrationBoundary state={dehydratedState}>
      <Head>
        <title>DOBRY Swiss Bracket</title>
        <meta name="description" content="created by benoxy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen w-full bg-transparent">
        <div className="flex w-full flex-row gap-12">
          <div className="flex w-full items-center justify-center gap-[8.5rem]">
            <div className="flex flex-col gap-8 items-center">
              <h1 className="mx-3 pt-5 text-3xl font-bold text-white">
                LB ROUND 1
              </h1>
              <Match match={firstMatch?.[2]} group="lb-r1" />
              <Match match={firstMatch?.[3]} group="lb-r1" />
            </div>
            <div className="flex flex-col gap-8 items-center">
              <h1 className="mx-3 pt-5 text-3xl font-bold text-white">
                LB QUARTER-FINALS
              </h1>
              <Match match={quarter?.[0]} group="lb-qf" />
              <Match match={quarter?.[1]} group="lb-qf" />
            </div>
            <div className="flex flex-col gap-8 items-center">
              <h1 className="mx-3 pt-5 text-3xl font-bold text-white">
                LB SEMI-FINALS
              </h1>
              <Match match={semi?.[0]} group="lb-sf" />
            </div>
            <div className="flex flex-col gap-8 items-center">
              <h1 className="mx-3 pt-5 text-3xl font-bold text-white">
                LB FINALS
              </h1>
              <Match match={finals?.[0]} group="lb-f" />
            </div>
          </div>
        </div>
      </main>
    </HydrationBoundary>
  );
}
