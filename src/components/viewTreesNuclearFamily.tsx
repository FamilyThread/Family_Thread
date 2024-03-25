import '../styles/viewTreeTreesScroll.css';


type NuclearFamilyProps = {
    id: number
    name: string
    famMem: number
};

export function ViewTreeTreesScroll({ id, name, famMem }: NuclearFamilyProps) {
    return (
        <>
            <div className="trees">
                <div className="individual-tree"> {id + name + famMem} </div>
            </div>
        </>
    );
}