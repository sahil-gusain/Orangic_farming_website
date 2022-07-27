import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src='/public/images/cover2.jpg' alt="" />
                <p className="para">
                    Hlo my name is Sahil Gusain
                </p>
             </div>
                <div className="sidebarItem">
                    <span className="sidebarTitle">MORE CITIES</span>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">Almora</li>
                        <li className="sidebarListItem">Dehradun</li>
                        <li className="sidebarListItem">Chamoli</li>
    
                    </ul>
                </div>
                <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
      
            </div>
        </div>
    )
}