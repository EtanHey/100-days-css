import OuterLayout from "@/components/layouts/OuterLayout";
export const metadata = {
  title: "Day 39",
  description:
    "Menu Toggle: What looks like another simple menu icon turns out to be a full-fledged navigation.",
};
export default function Day39Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <OuterLayout>{children}</OuterLayout>;
}
