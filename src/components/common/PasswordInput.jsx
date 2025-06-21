import { useState } from "react";
import PasswordVisibilityToggle from "./PasswordVisibilityToggle";

const PasswordInput = ({ onChange, error }) => {
  const [visible, setVisible] = useState(false);

  const onToggle = () => {
    setVisible(!visible);
  };

  return (
    <div className="relative w-full">
      <input
        type={visible ? "text" : "password"}
        onChange={onChange}
        placeholder="Enter your Password"
        className="text-zinc-800 p-2 font-semibold rounded-md text-lg w-full"
      />
      {/* importing for password visibility*/}
      <PasswordVisibilityToggle
        visible={visible}
        onToggle={(e) => onToggle(e)}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default PasswordInput;
