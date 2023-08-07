import { FieldValues } from "react-hook-form";

export const useUsers = () => {
  function sendCreate(data: FieldValues) {
    console.log(data);
  }

  return {
    sendCreate,
  };
};
