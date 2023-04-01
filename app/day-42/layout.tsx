import OuterLayout from "@/components/layouts/OuterLayout";
export const metadata = {
  title: "Day 42",
  description:
    "Stars: If you look closely, you can see the stars sparkling. And with a bit of luck, you might even spot a shooting star. Make a wish!",
};
export default function Day42Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <OuterLayout>{children}</OuterLayout>;
}
