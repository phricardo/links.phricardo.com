import { UmamiTracker } from "../components/umami";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <UmamiTracker />
      <body>{children}</body>
    </html>
  );
}
