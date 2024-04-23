import Group from "@/components/dorby/group";
import { getGoogleSheetData } from "@/services/googleSheetService";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
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
  //   const { data } = useQuery({
  //     queryKey: ["swiss-rounds"],
  //     queryFn: async () => {
  //       const response = await axios.get<Round[]>("/api/googleSheet");
  //       return response.data;
  //     },
  //     // refetchInterval: intervalMs,
  //   });

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
            <Group />
            <div className="flex">
              <div className="mt-20">
                <Group />
              </div>
              <h1 className="mx-3 pt-5 text-center text-5xl font-bold text-white">
                0-0
              </h1>
              <div className="mt-20">
                <Group />
              </div>
            </div>
            <Group />
          </div>
        </div>
      </main>
    </HydrationBoundary>
  );
}
