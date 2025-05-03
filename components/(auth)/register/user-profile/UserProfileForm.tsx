"use client";
import { createProfile } from "@/actions/profile";
import { BackButton, SubmitButton } from "@/components/Buttons";
import InputValidated from "@/components/InputValidated";
import { profileInputFormData } from "@/constants/profile";
import {
  CreateProfileForm,
  createProfileFormSchema,
} from "@/definitions/profile";
import { zodResolver } from "@hookform/resolvers/zod";
import { startTransition, useActionState, useRef } from "react";
import { useForm } from "react-hook-form";

const UserProfileForm = () => {
  const initialState = {
    message: "",
    errors: {},
  };

  const [state, formAction, isPending] = useActionState(
    createProfile,
    initialState
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProfileForm>({
    resolver: zodResolver(createProfileFormSchema),
    defaultValues: {
      fullName: "",
      surname: "",
      idPassportNo: "",
      dateOfBirth: "",
      contactNumber: "",
      email: "",
      countryOfOrigin: "",
    },
  });
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      onSubmit={(evt) => {
        evt.preventDefault();
        handleSubmit(() => {
          const formData = new FormData(formRef.current!);
          startTransition(() => {
            formAction(formData);
          });
        })(evt);
      }}
      className="flex md:h-screen flex-col items-center bg-white rounded-t-[50px] pt-2 pb-8 px-7 md:overflow-scroll"
    >
      <div className="w-full mb-2">
        {profileInputFormData.map((data) => (
          <InputValidated
            key={data.name}
            {...data}
            register={register}
            errors={errors}
          />
        ))}
      </div>
      <div className="flex gap-3">
        <BackButton />
        <SubmitButton name="Submit" isPending={isPending} />
      </div>
    </form>
  );
};

export default UserProfileForm;
