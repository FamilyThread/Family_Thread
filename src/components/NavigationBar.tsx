function NavigationBar() {
    return (
        <>
        <nav className="nav">
            <a href="../pages/Home.js"> <img src={require("../images/logo.png")} alt="Family Thread Logo"></img> </a>
            <ul>
                <li><a href="../pages/MyAccount.js">My Account</a></li>
                <li><a href="../pages/Home.js">Home</a></li>
                <li><a href="../pages/ViewTrees.js" id="viewTrees">View Trees</a></li>
                <li><a href="../pages/CreateTrees.js" id="createTrees">Create Trees</a></li>
            </ul>
            <div className="search">
                <input type="search" placeholder="Search" aria-label="Search for trees..."/>
                <button type="submit">Search</button>
            </div>
        </nav>
        </>
    );
}

export default NavigationBar;