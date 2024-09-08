// Internal Dependencies
import { Form } from "~/components/ui/form";
import {
  FormButtonLayout,
  SelectGender,
  UserName,
} from "./profile-form-modules";
import { useProfileFormHooks } from "./profile-form.hooks";
import { Gender } from "~/utils/types";

const ProfileForm = () => {
  const { genderData, form, isFormSubmitting, mutateAsync, handleReset } =
    useProfileFormHooks();

  console.log("genderData :>> ", genderData);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => mutateAsync(data))}
        className="mx-auto max-w-2xl space-y-8 rounded-xl border border-black p-3"
      >
        <UserName form={form} />

        <SelectGender form={form} selectList={genderData as Gender[]} />

        <FormButtonLayout
          isFormSubmitting={isFormSubmitting}
          handleReset={handleReset}
        />
      </form>
    </Form>
  );
};

export { ProfileForm };
