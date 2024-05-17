export async function generateMetadata(){
    let res = await fetch('https://agency.teamrabbil.com/api/SiteMeta/testimonials')
    let response = await res.json()
    console.log(response[0].description)
    // SEO DATA FETCH
    return{
        title:response[0].title,
        description:response[0].description
        
    }
}
const Layout = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;