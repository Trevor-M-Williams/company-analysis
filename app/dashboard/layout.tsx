import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Header } from "@/components/header";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex h-full flex-col">
        <Header />
        <div className="flex grow flex-col">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
