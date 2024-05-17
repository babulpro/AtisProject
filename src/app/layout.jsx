  
  
import SideNavBar from '@/components/SideNavbar'
import './globals.css'
import SideFooter from '@/components/SideFooter'
import NextTopLoader from 'nextjs-toploader';
 
 
 

export async function generateMetadata(){
    // SEO DATA FETCH
    return{
        title:"Home",
    }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <NextTopLoader color="#2299DD" initialPosition={0.08}  crawlSpeed={200}  height={3} />
        <SideNavBar/>
    
      {children}
      <SideFooter/>
  
       
      </body>
    </html>
  )
}
