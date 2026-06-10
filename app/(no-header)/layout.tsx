import Footer from "@/components/Footer";

export default function NoHeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}
  <Footer />
  </>;
}