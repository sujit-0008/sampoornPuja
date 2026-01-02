

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      
      <main className="flex-1">{children}</main>
      
    </div>
  );
}
