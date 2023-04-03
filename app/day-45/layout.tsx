import OuterLayout from "@/components/layouts/OuterLayout";
export const metadata = {
  title: "Day 45",
  description:
    "Button: If normal hover effects aren't enough for you anymore, try this.",
};
export default function Day45Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <OuterLayout>{children}</OuterLayout>;
}
