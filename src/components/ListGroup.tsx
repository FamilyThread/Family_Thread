import {Fragment, useState} from "react";
// import { MouseEvent } from "react";

// items = [];

function ListGroup() {
    let items = ["New York", "LA", "Tokyo", "San Diego"];
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h1>List</h1>
            {items.length === 0 && <p>Items Not Found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                        key={item}
                        onClick={() =>  { setSelectedIndex(index);}}
                    >{item}</li>))}
            </ul>
        </>
    );
}

export default ListGroup;