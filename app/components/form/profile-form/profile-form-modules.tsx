// Internal Dependencies
import { Loader } from "~/components/loading-components";
import { Button } from "~/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Gender, ProfileFormType } from "~/utils/types";

interface SelectGenderProps {
  form: ProfileFormType;
  selectList: Gender[];
}

interface FormButtonLayoutProp {
  isFormSubmitting: boolean;
  handleReset: () => void;
}

const UserName = ({ form }: { form: ProfileFormType }) => {
  return (
    <FormField
      control={form.control}
      name="username"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input placeholder="Enter Username" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

const SelectGender = ({ form, selectList }: SelectGenderProps) => {
  return (
    <FormField
      control={form.control}
      name="gender"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Select Gender</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {selectList?.map((item) => (
                <SelectItem value={`${item.genderId}`} key={item.genderId}>
                  {item?.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

const FormButtonLayout = ({
  isFormSubmitting,
  handleReset,
}: FormButtonLayoutProp) => {
  return (
    <div className="flex items-center justify-center gap-x-3">
      <Button type="reset" onClick={handleReset}>
        Reset
      </Button>

      <Button type="submit" disabled={isFormSubmitting}>
        <div className="flex">
          {isFormSubmitting ? (
            <>
              <Loader />
              Submitting
            </>
          ) : (
            `Submit`
          )}
        </div>
      </Button>
    </div>
  );
};

export { SelectGender, UserName, FormButtonLayout };
