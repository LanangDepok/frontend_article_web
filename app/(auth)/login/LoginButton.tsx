import { useFormStatus } from "react-dom";

const LoginButton = () => {
  const status = useFormStatus();
  console.log(status);

  return (
    <button
      type="submit"
      className="w-24 h-12 bg-accent rounded-2xl"
      disabled={status.pending}
    >
      {status.pending ? "Loading..." : "Login"}
    </button>
  );
};

export default LoginButton;
