import Header from "@/components/(protected)/group-contribution/Header";
import Body from "@/components/(protected)/group-contribution/Body";
type SearchParams = Promise<{ [key: string]: string }>;

const ProfilePage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const query = await searchParams;
  const { assetId } = query;

  return (
    <div className="flex h-screen items-center ">
      <main className="pb-[40px] md:rounded-3xl md:shadow-2xl bg-turquoise-50 h-full md:h-[700px] border md:border-gray-400/2 w-[400px] md:w-[350px] mx-auto overflow-scroll">
        <Header />
        <Body {...{ assetId }} />
      </main>
    </div>
  );
};

export default ProfilePage;
