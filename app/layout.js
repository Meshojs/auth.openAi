import { Roboto } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const font = Roboto({ subsets: ['greek'] , style:'normal' , weight:'400' })



export const metadata = {
  title: 'auth0.openai.com/u/login/identifier?',
  description: 'OpenAi Login Clone',
}
// children is the content of the page

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
          {children}
        </body>
    </html>
  )
}
