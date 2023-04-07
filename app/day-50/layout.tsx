import OuterLayout from "@/components/layouts/OuterLayout";
export const metadata = {
  title: "Day 50",
  description:
    "Easter Egg: Are you familiar with the 12 Basic Principles of Animation? This is an example for squash and stretch.",
};
export default function Day50Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <OuterLayout>{children}</OuterLayout>;
}
