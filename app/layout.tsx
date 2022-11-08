/* eslint-disable @next/next/no-head-element */

import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous" />
      </head>
      <body>
        <nav>
          <Link className="mx-2" href={'/'}>Home</Link>
          <Link className="mx-2" href={'/todos'}>Todos</Link>
        </nav>
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  );
}
