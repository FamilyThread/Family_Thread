import '../styles/importTemplate.css';
import UploadButton from "../assets/UploadButton.png"

type NuclearFamilyProps = {
    name: string

};

export function BlankImport({name}: NuclearFamilyProps) {
    return (
        <>
            <div className="box-container">
                <div className="templateTrees">
                    <div className="individual-tree">
                        <img src={UploadButton} alt="UploadButton"></img> </div>
                </div>
                <div className="lower-sub-box">
                        <div className="individual-tree"> {name} </div>
                    </div>
            </div>
        </>
);
}