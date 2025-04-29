import Header from "@/components/(protected)/my-acquisitions/Header";
import Body from "@/components/(protected)/my-acquisitions/Body";

const MyAcquisitions = () => {
  return (
    <div className="flex h-screen items-center ">
      <main className="pb-[40px] md:rounded-3xl md:shadow-2xl bg-turquoise-50 h-full md:h-[700px] border md:border-gray-400/2 w-[400px] md:w-[350px] mx-auto overflow-scroll">
        <Header />
        <Body />
      </main>
    </div>
  );
};

export default MyAcquisitions;
