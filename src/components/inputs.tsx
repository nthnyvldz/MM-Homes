interface InputsProps {
  inputType:
    | "text"
    | "email"
    | "tel"
    | "password"
    | "number"
    | "selection"
    | "textarea";
  placeholder?: string;
  label: string;
  options?: string[];
}

export default function Inputs({
  inputType,
  placeholder,
  label,
  options,
}: InputsProps) {
  return (
    <div>
      <label
        htmlFor="first_name"
        className="block mb-2.5 text-[12px] lg:text-sm text-heading"
      >
        {label}
      </label>
      {inputType === "selection" ? (
        <select
          id="first_name"
          className="bg-neutral-secondary-medium border border-gray-400 text-heading text-[12px] lg:text-sm rounded-lg focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs"
        >
          <option value="" disabled selected>
            {placeholder}
          </option>
          {options?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : inputType === "textarea" ? (
        <textarea
          id="first_name"
          className="bg-neutral-secondary-medium border-b border-gray-400 text-heading text-sm rounded-lg focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
          placeholder={placeholder}
          rows={4}
        />
      ) : (
        <input
          type={inputType}
          id="first_name"
          className="bg-neutral-secondary-medium border-b border-gray-400 text-heading text-sm rounded-lg focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
          placeholder={placeholder}
        />
      )}
    </div>
  );
}
