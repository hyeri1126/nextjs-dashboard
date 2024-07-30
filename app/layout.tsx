import "@/app/ui/global.css"

// #2-1-2. 폰트 불러오기(import)
import {inter} from './ui/fonts'

export default function RootLayout({children,}: {children: React.ReactNode;}) {
  return (
    <html lang="en">
      <body className={inter.className} >{children}</body>
    </html>
  );
}
