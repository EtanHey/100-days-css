import OuterLayout from "@/components/layouts/OuterLayout";
export const metadata = {
  title: "Day 43",
  description: "Lightbulb: Light on, light off, light on, light off, light on.",
};
export default function Day43Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <OuterLayout>{children}</OuterLayout>;
}
