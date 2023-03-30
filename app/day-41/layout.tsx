import OuterLayout from "@/components/layouts/OuterLayout";
export const metadata = {
  title: "Day 41",
  description:
    "Error Modal: Don't worry, it's not a real error, this is part of the challenge.",
};
export default function Day41Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <OuterLayout>{children}</OuterLayout>;
}
