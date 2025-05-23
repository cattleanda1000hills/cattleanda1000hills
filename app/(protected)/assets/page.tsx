import Header from "@/components/(protected)/assets/Header";
import Body from "@/components/(protected)/assets/Body";
type SearchParams = Promise<{ [key: string]: string }>;

const Page = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const query = await searchParams;
  const { asset } = query;
  
  return (
    <div className="flex h-screen items-center ">
      <main className="pb-[40px] md:rounded-3xl md:shadow-2xl bg-turquoise-50 h-full md:h-[700px] border md:border-gray-400/2 w-[400px] md:w-[350px] mx-auto overflow-scroll">
        <Header />
        <Body asset={asset} />
      </main>
    </div>
  );
};

export default Page;
