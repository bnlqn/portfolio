import { fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { Viewport } from 'next';
import './globals.css';

export const metadata = {
  title: 'Benjamin Lurquin',
  description:
    'Benjamin lurquin is an experienced .NET Developer with 10+ Years of Expertise on C#, .NET Core, Angular, React',
  keywords: [
    '.NET',
    'Developer',
    'Fullstack',
    'Full-Stack',
    'Angular',
    'React',
    'Microsoft',
    'Senior',
  ],
  authors: [
    {
      name: 'Benjamin Lurquin',
      url: 'https://bnlqn.com',
    },
  ],
  creator: 'Benjamin Lurquin',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          'bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900',
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
