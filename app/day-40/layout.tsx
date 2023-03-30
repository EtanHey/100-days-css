import OuterLayout from "@/components/layouts/OuterLayout";
export const metadata = {
  title: "Day 40",
  description:
    "Gallery: Take a closer look by clicking on the images. The animations are CSS only and precalculated.",
};
export default function Day40Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <OuterLayout>{children}</OuterLayout>;
}
