import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main className="flex flex-1 items-center justify-center px-6 py-24">
        <div className="max-w-md text-center">
          <h1 className="text-7xl">404</h1>
          <h2 className="mt-4">Page not found</h2>
          <p className="mt-3 text-[13px]">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-8">
            <Link to="/" className="btn-navy">
              Go home
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dr. A. S. Suresh Iyer" },
      { name: "description", content: "Academic profile of Dr. A. S. Suresh Iyer — teaching, mentorship, research, talks and recognition." },
      { name: "author", content: "Dr. A. S. Suresh Iyer" },
      { property: "og:title", content: "Dr. A. S. Suresh Iyer" },
      { property: "og:description", content: "Academic profile of Dr. A. S. Suresh Iyer — teaching, mentorship, research, talks and recognition." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Dr. A. S. Suresh Iyer" },
      { name: "twitter:description", content: "Academic profile of Dr. A. S. Suresh Iyer — teaching, mentorship, research, talks and recognition." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/52e6a3e0-c851-49ee-a389-b3ad5f6b9c64/id-preview-506d9c25--27daa31b-6ce3-45c3-ba38-8e83d78cc358.lovable.app-1777204567955.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/52e6a3e0-c851-49ee-a389-b3ad5f6b9c64/id-preview-506d9c25--27daa31b-6ce3-45c3-ba38-8e83d78cc358.lovable.app-1777204567955.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
