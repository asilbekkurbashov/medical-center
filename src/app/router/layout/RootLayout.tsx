import Footer from "../../../components/Footer"
import Header from "../../../components/Header"
import Main from "../../../components/Main"

const RootLayout = () => {
  return (
    <div className="h-screen flex flex-col">
        <Header/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default RootLayout