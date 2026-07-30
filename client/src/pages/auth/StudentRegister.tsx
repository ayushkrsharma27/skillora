import AuthLayout from "../../components/auth/AuthLayout";
import Input from "../../components/ui/Input";

export default function StudentRegister() {
  return (
    <AuthLayout
      title="Create Student Account"
      subtitle="Start your internship journey."
    >
      <form className="space-y-5">

        <Input
          label="Full Name"
          placeholder="John Doe"
        />

        <Input
          label="Email"
          type="email"
        />

        <Input
          label="College"
        />

        <Input
          label="Password"
          type="password"
        />

        <button className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white">
          Create Account
        </button>

      </form>
    </AuthLayout>
  );
}