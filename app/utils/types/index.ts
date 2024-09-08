// External Dependencies
import { UseFormReturn } from "react-hook-form";

// Internal Dependencies
import { FormSchemaType } from "../schema";

export interface Gender {
  label: string;
  genderId: number;
}

export type ProfileFormType = UseFormReturn<FormSchemaType, any, undefined>;
