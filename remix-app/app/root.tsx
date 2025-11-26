import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { useFlyonUI } from "~/lib/use-flyonui";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  { rel: "icon", type: "image/x-icon", href: `${import.meta.env.BASE_URL}favicon.ico` },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
                // Default to dark theme since site was designed for dark
                const isDark = theme === 'dark' || (!theme && !prefersLight);
                const root = document.documentElement;
                if (isDark) {
                  root.classList.add('dark');
                  root.setAttribute('data-theme', 'dark');
                } else {
                  root.classList.remove('dark');
                  root.setAttribute('data-theme', 'light');
                }
              })();
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning={true}>
        {children}
        <ScrollRestoration />
        <Scripts />
        <script src={`${import.meta.env.BASE_URL}flyonui.js`}></script>
      </body>
    </html>
  );
}

export function HydrateFallback() {
  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center">
      <div className="text-center">
        <div className="loading loading-spinner loading-lg text-primary mb-4"></div>
        <p className="text-base-content/70">Loading...</p>
      </div>
    </div>
  );
}

export default function App() {
  useFlyonUI();
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404 - Page Not Found" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-4">😵</div>
        <h1 className="text-4xl font-bold mb-4 text-base-content">{message}</h1>
        <p className="text-lg text-base-content/70 mb-8">{details}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/" className="btn btn-primary">
            Go Home
          </a>
          <a href="/portfolio" className="btn btn-outline">
            View Portfolio
          </a>
        </div>
        {stack && (
          <details className="mt-8 text-left">
            <summary className="cursor-pointer text-sm text-base-content/50 hover:text-base-content/70">
              Show Error Details
            </summary>
            <pre className="mt-4 p-4 bg-base-200 rounded text-xs overflow-x-auto text-left">
              <code>{stack}</code>
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}
