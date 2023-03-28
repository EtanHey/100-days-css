import OuterLayout from "@/components/layouts/OuterLayout";
export const metadata = {
  title: "Day 38",
  description:
    "Logo Transition: Logos don't always have to be static, as a transition or stylistic element they can have animations.",
};
export default function Day38Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <OuterLayout>{children}</OuterLayout>;
}
