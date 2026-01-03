import { AuthProvider } from "../Context/AuthContext";

export default function RootLayout({ children,}: {children: React.ReactNode;}){
  return (
    <html>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}

