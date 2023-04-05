import OuterLayout from "@/components/layouts/OuterLayout";
export const metadata = {
  title: "Day 47",
  description:
    "Pixel Art: You don't like Space Invaders? No problem, click on the pixels to create your own piece of art.",
};
export default function Day47Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <OuterLayout>{children}</OuterLayout>;
}
