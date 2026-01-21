import type { ChangeEvent } from "react";

function FileInput({
  id,
  label,
  accessibleLabel,
  onChange,
  type = "file",
  hideLabel = true,
}: {
  id: string;
  label: string;
  hideLabel: boolean;
  accessibleLabel: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type: string;
}) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label
          htmlFor={id}
          className={`${hideLabel ? "hidden" : ""} text-sm text-gray-300`}
        >
          {label}
        </label>
        <input
          aria-label={accessibleLabel}
          placeholder={accessibleLabel}
          type={type}
          id={id}
          className="w-full pl-11 px-2 py-4 
            rounded-xl  
            bg-black text-(--coolor-blue-light)
            hover-glow
            cursor-pointer
          "
          onChange={onChange}
        />
      </div>
    </>
  );
}

export default FileInput;
