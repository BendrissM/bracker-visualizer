import RoundComponent from "@/components/round";
import { getGoogleSheetData } from "@/services/googleSheetService";
import type { Round } from "@/types/Round";
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
    queryKey: ["swiss-rounds"],
    queryFn: async () => await getGoogleSheetData(),
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
    queryKey: ["swiss-rounds"],
    queryFn: async () => {
      const response = await axios.get<Round[]>("/api/googleSheet");
      return response.data;
    },
    // refetchInterval: intervalMs,
  });

  return (
    <HydrationBoundary state={dehydratedState}>
      <Head>
        <title>MEATC Swiss Bracket</title>
        <meta name="description" content="created by benoxy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col justify-end bg-transparent bg-cover bg-repeat-round">
        <div className="flex flex-row gap-12 pb-12 pt-3">
          <div className="flex w-full items-center justify-center gap-32 px-28">
            {data?.map((round, idx) => (
              <RoundComponent round={round} key={idx} />
            ))}
          </div>
        </div>
      </main>
    </HydrationBoundary>
  );
}
