import '../styles/nuclearFamily.css';


type NuclearFamilyProps = {
    id: number
    name: string
    famMem: number
};

export function templateTree({ id, name, famMem }: NuclearFamilyProps) {
    return (
        <>
            <div className="createNewTree">
                <div className="individual-tree"> {id + name + famMem} </div>
            </div>
        </>
    );
}