import { cn } from '@/lib/utils';
import './globals.css';
import { Poppins } from 'next/font/google';
import Providers from '@/components/providers';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Benjamin Lurquin - Full-Stack .NET Developer',
  description:
    'Experienced .NET Developer | 10+ Years of Expertise | C#, .NET Core, Angular, React | Delivering Outstanding Software | Seeking to Make a Positive Impact',
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
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        id="home"
        className={cn(
          'text-slate-900 antialiased dark:text-slate-300',
          poppins.className
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
