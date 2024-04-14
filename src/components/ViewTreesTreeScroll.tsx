import '../styles/importTemplate.css';
import image from "../assets/ViewTreesPlaceholder.png";

type NuclearFamilyProps = {
    name: string;
};

export function ViewTreesScroll({}: NuclearFamilyProps) {

    return (
        <div className="box-container">
            <div className="UploadTree">
                <div className="individual-tree">
                    <a className="treePreview" href="../EditTree"> <img src={image} alt="Preview of tree"></img> </a>
                </div>
            </div>
        </div>
    );
}