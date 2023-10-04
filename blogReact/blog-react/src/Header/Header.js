import "./HeaderStyle.css";


function Header() {
    return (
        <div className="Header">
            <div className="HeaderTitle">
                <span className="HeaderTitleSm">React Pro</span>
                <span className="HeaderTitleLg">Footies' Domain</span>
            </div>
            <img src="https://as2.ftcdn.net/v2/jpg/02/06/98/15/1000_F_206981558_asAxvc21OdzzVOF6JkgAOYK8Ub1xsTWJ.jpg" alt="" />
        </div>
    )
}

export default Header