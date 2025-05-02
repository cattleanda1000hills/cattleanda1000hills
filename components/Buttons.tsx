"use client";
import { logout } from "@/actions/auth";
import { ArrowLeft, ChevronRight, FileUp, LogInIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";

export const RegisterButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/register/user-profile")}
      className="bg-turquoise-500 hover:bg-turquoise-700 text-white rounded-full w-[148px] h-[33px]"
    >
      Sign Up
    </button>
  );
};

export const LoginButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/dashboard")}
      className="bg-turquoise-500 hover:bg-turquoise-700 text-white rounded-full w-[148px] h-[33px]"
    >
      Sign In
    </button>
  );
};

export const NextButton = ({ url, name }: { url: string; name?: string }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(url)}
      className="bg-turquoise-500 hover:bg-turquoise-700 text-white rounded-full w-[148px] h-[33px]"
    >
      {name ? name : "Next"}
    </button>
  );
};

export const BookButton = ({ url }: { url: string }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(url)}
      className="bg-pinklet-500 w-full hover:bg-pinklet-700 text-white rounded-full h-[35px]"
    >
      Book
    </button>
  );
};

export const BackButtonWrapper = ({
  url,
  children,
}: {
  url?: string;
  children: React.ReactNode;
}) => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        if (url) router.push(url);
        else router.back();
      }}
      className={`flex justify-center items-center bg-turquoise-200 w-[65px] h-[40px] rounded-full`}
    >
      {children}
    </button>
  );
};

export const MedicalHistoryButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/book-appointment?type=book")}
      className="bg-turquoise-500 hover:bg-turquoise-700 text-white rounded-full w-[148px] h-[33px]"
    >
      Submit
    </button>
  );
};

export const SkipButton = ({ url }: { url: string }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(url)}
      className="bg-pinklet-100 hover:bg-pinklet-200 shadow-md hover:bg-white text-turquoise-950 rounded-3xl px-4 h-[35px]"
    >
      Skip
    </button>
  );
};

export const BackButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="bg-pinklet-100 hover:bg-pinklet-200 text-turquoise-950 shadow-md rounded-full w-[110px] h-[33px]"
    >
      Back
    </button>
  );
};

export const BackArrowButton = () => {
  const router = useRouter();
  return (
    <ArrowLeft
      className="text-pinklet-500"
      size={23}
      strokeWidth={3}
      onClick={() => router.back()}
    />
  );
};

export const BackArrowUrlButton = ({ url }: { url: string }) => {
  const router = useRouter();
  return (
    <ArrowLeft
      className="text-pinklet-500"
      size={22}
      strokeWidth={3}
      onClick={() => router.push(url)}
    />
  );
};

export const ConditionButton = ({
  name,
  addToCancelList,
}: {
  name: string;
  addToCancelList: () => void;
}) => {
  return (
    <button
      onClick={addToCancelList}
      className="bg-pinklet-50 shadow-md hover:bg-pinklet-500 hover:text-white text-turquoise-900 rounded-full px-4 h-[33px]"
    >
      {name}
    </button>
  );
};

export const ConditionCancelButton = ({
  name,
  addToList,
}: {
  name: string;
  addToList: () => void;
}) => {
  return (
    <button
      onClick={addToList}
      className="flex flex-row gap-2 items-center bg-pinklet-500 shadow-md hover:bg-pinklet-600 text-white rounded-full px-3 h-[33px]"
    >
      <span>{name}</span>
      <X className="text-torquoise-900" size={23} strokeWidth={2} />
    </button>
  );
};

type Item = { name: string; url: string; Icon: any; bgColor: string };

export const LogOutButton = ({ item }: { item: Item }) => {
  return (
    <div onClick={logout} className="w-full flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div
          className={`flex justify-center items-center bg-${item.bgColor}-100 w-[40px] h-[40px] rounded-full`}
        >
          <LogInIcon size={23} />
        </div>
        <p>{item.name}</p>
      </div>
      <div>
        <ChevronRight />
      </div>
    </div>
  );
};
export const UploadPaymentDashboard = () => {
  const [isUpload, setIsUpload] = useState(true);

  return (
    <>
      {isUpload ? (
        <div
          onClick={() => setIsUpload(false)}
          className={`flex items-center mx-auto justify-center gap-3 bg-turquoise-500 hover:bg-turquoise-700 text-white rounded-full w-full h-[35px]`}
        >
          <FileUp size={20} />
          <p className="text-center">Upload Payment</p>
        </div>
      ) : (
        <Link
          className={`flex items-center mx-auto justify-center gap-3 bg-turquoise-500 hover:bg-turquoise-700 text-white rounded-full w-full h-[35px]`}
          href="/dashboard"
        >
          <FileUp size={20} />
          <p className="text-center">Back to Dashboard</p>
        </Link>
      )}
    </>
  );
};

export const TermsAndConditions = ({ asset }: { asset: string }) => {
  const [isCheckBox, setIsCheckBox] = useState(false);
  const router = useRouter();

  return (
    <div className="w-full px-7 ">
      <div className="flex gap-3 mb-3 items-center underline">
        <input
          onClick={() => setIsCheckBox(!isCheckBox)}
          type="checkbox"
          className="rounded-md border border-turquiose-200"
        />
        <Link href={`/asset-groups/terms-and-conditions?asset=${asset}`}>
          Agree to Terms & Conditions
        </Link>
      </div>

      {isCheckBox ? (
        <button
          className={`flex items-center mx-auto justify-center gap-3 bg-turquoise-500 hover:bg-turquoise-700 text-white rounded-full w-full h-[35px]`}
          onClick={() => router.push(`/assets?asset=${asset}`)}
        >
          <p className="text-center">Add Asset</p>
        </button>
      ) : (
        <button
          className="flex items-center mx-auto justify-center gap-3 bg-gray-400 hover:bg-gray-600 text-white rounded-full w-full h-[35px]"
          onClick={() => router.push("#")}
        >
          <p className="text-center">Add Asset</p>
        </button>
      )}
    </div>
  );
};
