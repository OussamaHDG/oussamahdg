import "./SinglePost.css"

export default function SinglePost() {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img src="https://a.espncdn.com/photo/2023/0525/r1178051_720x405_16-9.jpg" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">
                    Roberto De Zerbi's Brighton: The Modern Leicester City
                <div className="singlePostEdit">
                    <i class="fa-solid fa-plus"></i>
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid fa-trash"></i>
                </div></h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Oussama</b></span>
                    <span className="singlePostDate">Date: <b>03/10/2023</b></span>
                </div>
                <p>
                    Roberto De Zerbi's influence at Brighton is reminiscent of Leicester's title-winning season. Youth development, team cohesion, and shrewd tactics are propelling Brighton's underdog story in the Premier League.<br>
                    </br>
                    <b>Managerial Impact:
                    </b><br></br>
                    Roberto De Zerbi's arrival at Brighton in the summer of 2022 marked a significant turning point for the club. Known for his tactical acumen and ability to get the best out of young talents, De Zerbi has injected new life into the team. His tactical approach, which combines a possession-based game with high pressing, has drawn parallels to Leicester's counter-attacking style under Claudio Ranieri during their title-winning campaign. De Zerbi's influence on the team's identity and performance cannot be overstated.

                </p>

            </div>
        </div>
    )
}
