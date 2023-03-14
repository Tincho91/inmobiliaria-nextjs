import Navigation from "../modules/Navigation"
import Footer from "../modules/Footer/Footer"


const DefaultLayout = ({children}) => {
  return (
    <>
        <Navigation />
            {children}
        <Footer />
    </>
  )
}

export default DefaultLayout