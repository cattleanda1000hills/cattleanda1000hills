import Image from "next/image";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="flex h-[98vh] md:h-screen items-center ">
      <main className="relative md:rounded-3xl md:shadow-2xl bg- bg-gradient-to-r from-turquoise-100 to-turquoise-50 h-full md:h-[700px] border md:border-gray-400/2 w-[400px] md:w-[350px] mx-auto md:p-6 md:overflow-hidden">
        <div className="absolute left-0 bottom-0 flex flex-col w-full">
          <div className="bg-transparent flex w-100 justify-center">
            <div className="flex flex-col w-100 items-center justify-center">
              <div className="p-6 rounded-full border-8 border-turquoise-300 mb-4">
                <Image
                  className=""
                  src="/cow_logo.png"
                  height={4}
                  width={120}
                  alt="BlissfulLogo"
                />
              </div>
              <h3 className="font-mono font-semibold mb-6 md:text-3xl text-center text-4xl text-turquoise-900 w-100">
                Cattle & 1000 Hills
              </h3>
            </div>
          </div>
          <div className="rounded-t-[50px] h-[400px] bg-white py-16 px-7 flex flex-col justify-center">
            <h3 className="font-mono leading-none mb-4 text-xl text-turquoise-900 font-medium">
              Sign In
            </h3>
            <LoginForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
