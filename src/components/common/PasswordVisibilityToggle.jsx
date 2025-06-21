import { Eye, EyeOff } from "lucide-react";

const PasswordVisibilityToggle = ({ visible, onToggle }) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="absolute top-2 right-3 text-black"
    >
        {visible?<Eye/>:<EyeOff/>}
    </button>
  );
};

export default PasswordVisibilityToggle;
