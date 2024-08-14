
export const metadata = {
 title: 'SEO Title',
 description: 'SEO Title',
};
export default function DashboardLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main className="">
      {children}
    </main>
  );
}