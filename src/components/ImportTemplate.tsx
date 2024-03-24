import '../styles/importTemplate.css';
import DownloadButton from "../assets/DownloadButton.png"

type NuclearFamilyProps = {
    name: string

};

export function ImportTemplate({name}: NuclearFamilyProps) {
    return (
        <>
            <div className="box-container">
                <div className="templateTrees">
                    <div className="individual-tree">
                        <img src={DownloadButton} alt="Download Button"></img> </div>
                </div>
                <div className="lower-sub-box">
                        <div className="individual-tree"> {name} </div>
                    </div>
            </div>
        </>
);
}