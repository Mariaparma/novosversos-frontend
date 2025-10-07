import "./globals.css";

export const metadata = {
    title: "Novos Versos",
    description: "Projeto Final Individual ",
    icons: {
        icon: "/icons/novosversos.png",
    },
};

export default function RootLayout({ children }) {
    return ( 
        <html>
            <body>{children}</body>
        </html>
    );
}