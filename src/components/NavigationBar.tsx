import "../styles/nav.css";
export function NavigationBar() {
    return (
        <>
            <nav className="nav">
                <a href="/Home"> <img src="../assets/logo.png" alt="Family Thread Logo"></img> </a>
                <ul>
                    <li><a href="/MyAccount">My Account</a></li>
                    <li><a href="/Home">Home</a></li>
                    <li><a href="/ViewTrees">View Trees</a></li>
                    <li><a href="/CreateTrees">Create Trees</a></li>
                </ul>
                <div className="search">
                    <input type="search" placeholder="Search" aria-label="Search for trees..."/>
                    <button type="submit">Search</button>
                </div>
            </nav>
        </>
    );
}