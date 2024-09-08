// External Dependencies
import { z } from "zod";

// Internal Dependencies
import { formSchema } from "../schema";
import { Gender } from "../types";

export const fetchGender = async () => {
  try {
    const initResponse = await fetch(
      "https://dummyjson.com/c/5233-a8c3-4a0a-a6c8",
      {
        method: "GET",
      },
    );

    const response: Gender[] = await initResponse.json();

    console.log("Fetched Gender :>> ");

    console.log("response :>> ", response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const submitFormData = async (formData: z.infer<typeof formSchema>) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  } catch (error) {
    console.error(error);
  }

  console.log("formData :>> ", formData);

  alert(`Username: ${formData.username} & GenderId: ${formData.gender}`);
};
