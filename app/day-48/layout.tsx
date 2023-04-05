import OuterLayout from "@/components/layouts/OuterLayout";
export const metadata = {
  title: "Day 48",
  description:
    "3D Cube: With CSS you can work not only two-dimensional but also three-dimensional. Simple objects and animation are no problem.",
};
export default function Day48Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <OuterLayout>{children}</OuterLayout>;
}
