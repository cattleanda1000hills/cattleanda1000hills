import Header from "@/components/(auth)/register/user-profile/Header";
import UserProfileForm from "@/components/(auth)/register/user-profile/UserProfileForm";

export default async function HomePage() {
  return (
    <div className="flex h-screen items-center">
      <main className="md:rounded-3xl md:shadow-2xl bg-white h-full md:h-[700px] border md:border-gray-400/2 w-[400px] md:w-[350px] mx-auto overflow-scroll">
        <Header />
        <UserProfileForm />
      </main>
    </div>
  );
}
