import Nav from "../src/components/Navigation.jsx";

export const metadata = {
  title: "Oasis",
  description: "A Next JS project",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
