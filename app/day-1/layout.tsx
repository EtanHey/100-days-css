import OuterLayout from "@/components/layouts/OuterLayout";
export const metadata = {
  title: "Day 1",
  description:
    "100 Days CSS: Day 1 - An easy start into the challenge with a custom build number with gradient.",
};
export default function Day1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <OuterLayout>{children}</OuterLayout>;
}
