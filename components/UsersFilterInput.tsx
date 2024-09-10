import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useDebounce from "@/app/hooks/useDebounce";
import { RootState } from "@/lib/store";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface NameFilterProps {
  selector: (state: RootState) => string;
  updateFilter: (value: string) => any;
  type: "text" | "email";
  id: string;
  placeholder: string;
  className?: string;
}

const UsersFilterInput = ({
  selector,
  updateFilter,
  type,
  id,
  placeholder,
  className = "",
}: NameFilterProps) => {
  const dispatch = useDispatch();

  const currentFilterValue = useSelector(selector);

  const [inputValue, setInputValue] = useState(currentFilterValue);

  const debouncedValue = useDebounce(inputValue, 500);

  useEffect(() => {
    dispatch(updateFilter(debouncedValue));
  }, [debouncedValue, dispatch, updateFilter]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={className}>
      <Label className="pl-1" htmlFor={id}>
        {placeholder}
      </Label>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default UsersFilterInput;
