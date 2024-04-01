import '../styles/importTemplate.css';
<<<<<<< Updated upstream

import image from "../assets/ViewTreesPlaceholder.png";



=======
import image from "../assets/ViewTreesPlaceholder.png";

>>>>>>> Stashed changes
type NuclearFamilyProps = {
    name: string;
};

export function ViewTreesScroll({ name }: NuclearFamilyProps) {

    return (
        <div className="box-container">
            <div className="UploadTree">
                <div className="individual-tree">
<<<<<<< Updated upstream
                    <a className="treePreview" href="../pages/insideViewTrees/EditTree"> <img src={image} alt="Preview of tree"></img> </a>
=======
                    <a className="treePreview" href="../EditTree"> <img src={image} alt="Preview of tree"></img> </a>
>>>>>>> Stashed changes
                </div>
            </div>
            <div className="lower-sub-box">
                <div className="individual-tree">{name}</div>
            </div>
        </div>
    );
<<<<<<< Updated upstream
}
=======
}
>>>>>>> Stashed changes
