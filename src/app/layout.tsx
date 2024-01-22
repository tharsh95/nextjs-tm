// import '@/app/ui/global.css';
// import { inter } from '@/app/ui/fonts';
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>

    </html>
  );
}
