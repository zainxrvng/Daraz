import { useState } from "react";
import { useForm } from "react-hook-form";
import { Google, Facebook } from "@mui/icons-material";
import { useAuth } from "../contexts/AuthContext";
import toast from "react-hot-toast";

export default function AuthSheet({ startMode = "login", close }) {
  const { login, register: saveReg } = useAuth();
  const [mode, setMode] = useState(startMode);
  const [emailMode, setEmailMode] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    if (mode === "login") {
      const ok = login(data);
      if (!ok) return toast.error("Invalid credentials");
      toast.success("Welcome back!");
      close();
    } else {
      saveReg(data);
      toast.success("Account created!");
      close();
    }
  };

  return (
    <div className="w-full max-h-[90vh] overflow-y-auto max-w-md bg-white rounded-xl shadow-lg">
      {/* yellow banner */}
      <div className="bg-yellow-100 text-xs p-3 text-center flex items-center justify-center gap-2">
        <img src="/src/assets/smalllogo.png" alt="Daraz" className="h-4" />
        <span>
          Try Daraz App & get <b>Lowest Prices</b> every day!
        </span>
      </div>

      {/* orange header */}
      <div className="bg-[#F85606] text-white p-4 flex items-center justify-between">
        <img src="/src/assets/whitelogo.png" alt="Daraz" className="h-8" />
        <button onClick={close} className="text-sm underline">
          ✕
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
        <h2 className="text-xl font-bold text-center">
          {mode === "login" ? "Login" : "Sign Up"}
        </h2>

        {/* phone / email toggle */}
        <div className="flex border rounded overflow-hidden text-sm">
          <button
            type="button"
            onClick={() => setEmailMode(false)}
            className={`flex-1 py-2 ${
              !emailMode ? "bg-orange-100 text-orange-600" : "bg-gray-100"
            }`}
          >
            Phone
          </button>
          <button
            type="button"
            onClick={() => setEmailMode(true)}
            className={`flex-1 py-2 ${
              emailMode ? "bg-orange-100 text-orange-600" : "bg-gray-100"
            }`}
          >
            Email
          </button>
        </div>

        {/* inputs */}
        {emailMode ? (
          <input
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#F85606]"
          />
        ) : (
          <div className="flex gap-2">
            <select
              defaultValue="+92"
              className="px-3 border rounded-l bg-gray-100 text-sm"
            >
              <option>+92</option>
            </select>
            <input
              {...register("phone", { required: true, pattern: /^[0-9]{10}$/ })}
              type="tel"
              placeholder="3xx xxxxxxx"
              className="flex-1 px-4 py-3 border rounded-r focus:outline-none focus:ring-2 focus:ring-[#F85606]"
            />
          </div>
        )}
        {errors.phone && (
          <span className="text-xs text-red-500">10 digits required</span>
        )}
        {errors.email && (
          <span className="text-xs text-red-500">Valid email required</span>
        )}

        <input
          {...register("password", { required: true, minLength: 6 })}
          type="password"
          placeholder="Password (min 6 chars)"
          className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#F85606]"
        />
        {errors.password && (
          <span className="text-xs text-red-500">Min 6 characters</span>
        )}

        {/* submit */}
        <button
          type="submit"
          className="w-full bg-[#F85606] text-white py-3 rounded font-semibold hover:bg-[#d04905] transition"
        >
          {mode === "login" ? "LOGIN" : "SIGN UP"}
        </button>

        {/* social */}
        <div className="text-center text-xs text-gray-500">
          Or, {mode === "login" ? "login" : "sign up"} with
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            className="flex-1 flex items-center justify-center gap-2 border py-2 rounded hover:bg-gray-50"
          >
            <Google color="primary" /> Google
          </button>
          <button
            type="button"
            className="flex-1 flex items-center justify-center gap-2 border py-2 rounded hover:bg-gray-50"
          >
            <Facebook color="primary" /> Facebook
          </button>
        </div>

        {/* footer link */}
        <p className="text-center text-sm">
          {mode === "login" ? "New to Daraz? " : "Already a member? "}
          <button
            type="button"
            onClick={() => setMode(mode === "login" ? "register" : "login")}
            className="text-[#F85606] underline"
          >
            {mode === "login" ? "Sign up" : "Log in Now"}
          </button>
        </p>

        {/* TOS */}
        <p className="text-xs text-gray-400 text-center">
          By continuing, you agree to our{" "}
          <span className="underline">Terms of Use</span> &{" "}
          <span className="underline">Privacy Policy</span>.
        </p>
      </form>
    </div>
  );
}
