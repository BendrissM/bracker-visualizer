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
    queryKey: ['bracket-dorby-winner'],
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
    queryKey: ['bracket-dorby-winner'],
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

  const semi = data[1]?.matchGroups[0]?.matches;
  const finals = data[2]?.matchGroups[0]?.matches;
  const grand = data[5]?.matchGroups[0]?.matches;

  return (
    <HydrationBoundary state={dehydratedState}>
      <Head>
        <title>DOBRY Swiss Bracket</title>
        <meta name="description" content="created by benoxy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen w-full bg-green-600">
        <div className="flex w-full flex-row gap-12">
          <div className="flex w-full items-center justify-center gap-[11.5rem]">
            <div className="flex flex-col gap-8 items-center">
              <h1 className="mx-3 pt-5 text-5xl font-bold text-white">
                WB SEMI-FINALS
              </h1>
              <Match match={semi?.[0]} group="wb-sf" />
              <Match match={semi?.[1]} group="wb-sf" />
            </div>
            <div className="flex flex-col gap-8 items-center">
              <h1 className="mx-3 pt-5 text-5xl font-bold text-white">
                WB FINALS
              </h1>
              <Match match={finals?.[0]} group="wb-f" />
            </div>
            <div className="flex flex-col gap-8 items-center">
              <h1 className="mx-3 pt-5 text-5xl font-bold text-white">
                GRAND FINALS
              </h1>
              <Match match={grand?.[0]} group="wb-gf" />
            </div>
          </div>
        </div>
      </main>
    </HydrationBoundary>
  );
}
