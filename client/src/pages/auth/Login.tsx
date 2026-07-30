import AuthLayout from "../../components/auth/AuthLayout";
import Input from "../../components/ui/Input";

export default function Login() {
  return (
    <AuthLayout
      title="Welcome Back 👋"
      subtitle="Login to continue your internship journey."
    >
      <form className="space-y-5">

        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
        />

        <button className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
          Login
        </button>

      </form>
    </AuthLayout>
  );
}