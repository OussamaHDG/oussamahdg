import "./HomeStyle.css"
import Header from "../../Header/Header"
import Sidebar from "../../Components/Sidebar/Sidebar"
import Posts from "../../Components/Posts/Posts"

export default function Home() {
    return (
        <>
            <Header />
            <div className="Home">
                <Posts />
                <Sidebar />



            </div >
        </>
    )
}
