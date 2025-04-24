import Body from "@/components/(public)/landing-page/Body";
import Header from "@/components/(public)/landing-page/Header";

const LandingPage = () => {
  return (
    <div className="flex h-screen items-center ">
      <main className="pb-[40px] md:rounded-3xl md:shadow-2xl bg-white h-full md:h-[700px] border md:border-gray-400/2 w-[400px] md:w-[350px] mx-auto overflow-x-hidden">
        <Header />
        <Body />
      </main>
    </div>
  );
};

export default LandingPage;
