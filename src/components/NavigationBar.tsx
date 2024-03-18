import "../styles/nav.css";
import logo from "../assets/logo.png"
export function NavigationBar() {
    return (
        <>
            <nav className="nav">
                <a className="logo" href="/Home"> <img src={logo} alt="Family Thread Logo"></img> </a>
                <ul>
                    <li><a href="/MyAccount">My Account</a></li>
                    <li><a href="/Home">Home</a></li>
                    <li><a href="/ViewTrees">View Trees</a></li>
                    <li><a href="/CreateTrees">Create Trees</a></li>
                </ul>
                <div className="search-container">
                    <input className="search" type="search"  placeholder="Search For Tree"
                           aria-label="Search for trees..."/>
                    {/*<img src={search} alt=""> </img>*/}
                    <button className="search-btn" type="submit">
                        Search
                    </button>
                </div>
            </nav>
        </>
    );
}