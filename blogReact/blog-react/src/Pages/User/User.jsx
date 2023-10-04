import "./User.css"
import Sidebar from "../../Components/Sidebar/Sidebar"

export default function User() {
    return (
        <div className="user">
            <div className="userWrapper">
                <div className="userTitle">
                    <span className="userUpdateTitle">Update Your Account</span>
                    <span className="userDeleteTitle">Delete Account</span>
                </div>
                <form className="userForm">
                    <label></label>
                    <div className="userPP">
                        <img src="https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/f/8a/f8a60740-d6f8-5108-ba79-a0bbc38c512b/6308222013b5d.image.jpg?resize=750%2C500" alt="" />
                        <label htmlFor="fileInput">
                            <i className="userIcon fa-solid fa-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }}></input>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Oussama"></input>
                    <label>Email</label>
                    <input type="text" placeholder="haddouguioussama@gmail.com"></input>
                    <label>Password</label>
                    <input type="password"></input>
                    <button className="userSubmit">Update</button>
                </form>
            </div>
            <Sidebar />


        </div>
    )
}
