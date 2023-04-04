import OuterLayout from "@/components/layouts/OuterLayout";
export const metadata = {
  title: "Day 46",
  description:
    "Iris Circles: What do you see? Camera shutter, tornado, flower or dancing people from above?",
};
export default function Day46Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <OuterLayout>{children}</OuterLayout>;
}
