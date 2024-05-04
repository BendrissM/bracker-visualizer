import BracketStandings from '@/components/dorby/bracketStandings';
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
    queryKey: ['bracket-dorby-st'],
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
    queryKey: ['bracket-dorby-st'],
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

  const decider = data[6]?.matchGroups[0]?.matches;

  return (
    <HydrationBoundary state={dehydratedState}>
      <Head>
        <title>DOBRY Swiss Bracket</title>
        <meta name="description" content="created by benoxy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen w-full bg-green-600">
        <div className="flex w-full flex-row gap-12">
          <div className="flex w-full items-center justify-center gap-[12.5rem]">
            <div className="mt-10 flex flex-col">
              <h1 className="mb-5 text-center text-5xl font-bold text-white">
                FINAL STANDINGS
              </h1>
              <div className="flex">
                <BracketStandings match={decider?.[0]} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </HydrationBoundary>
  );
}
