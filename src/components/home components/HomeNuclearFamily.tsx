import '../../styles/HomeNuclearFamily.css';


type NuclearFamilyProps = {
    id: number
    name: string
    famMem: number
};

export function HomeNuclearFamily({ id, name, famMem }: NuclearFamilyProps) {
    return (
        <>
            <div className="trees">
                <div className="individual-tree"> {id + name + famMem} </div>
            </div>
        </>
    );
}