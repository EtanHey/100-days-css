import OuterLayout from "@/components/layouts/OuterLayout";
export const metadata = {
  title: "Day 44",
  description:
    "Twisted Pyramid: Impressive how quickly squares can become a spiral.",
};
export default function Day44Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <OuterLayout>{children}</OuterLayout>;
}
