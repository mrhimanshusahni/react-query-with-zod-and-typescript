// External Dependencies
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Internal Dependencies
import { fetchGender, submitFormData } from "~/utils/api";
import { formSchema } from "~/utils/schema";

const useProfileFormHooks = () => {
  const { data } = useQuery({
    queryFn: () => fetchGender(),
    queryKey: ["gender"],
    refetchOnWindowFocus: false,
  });

  // Form Definition with useForm
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      gender: "",
    },
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: submitFormData,
  });

  const handleReset = () => {
    form.reset();
  };

  return {
    form,
    genderData: data,
    handleReset,
    isFormSubmitting: isPending,
    mutateAsync,
  };
};

export { useProfileFormHooks };
