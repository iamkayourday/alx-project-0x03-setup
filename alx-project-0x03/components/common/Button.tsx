import { ButtonProps } from "@/interface"; // Updated import

export default function Button({ action, buttonLabel, buttonBackgroundColor }: ButtonProps) {
  return (
    <button
      onClick={action}
      className={`py-2 px-4 rounded text-white bg-${buttonBackgroundColor}-500`}
    >
      {buttonLabel}
    </button>
  );
}
