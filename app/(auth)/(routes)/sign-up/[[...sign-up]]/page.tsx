import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-full pt-64">
      <SignUp
        appearance={{
          elements: {
            formButtonPrimary: {
              backgroundColor: "#f43f5e",
              "&:hover, &:focus, &:active": {
                backgroundColor: "#E11D48",
              },
            },
          },
        }}
      />
    </div>
  );
}
