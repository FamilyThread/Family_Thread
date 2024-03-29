import '../styles/importTemplate.css';

import PreviewFile from "../assets/PreviewPlaceHolder.png";

const images = {
    PreviewFile: PreviewFile
};



type NuclearFamilyProps = {
    name: string;
    imgSrc: string;
};

export function ViewTreesScroll({ name, imgSrc }: NuclearFamilyProps) {
    const imageSrc = images[imgSrc];

    return (
        <div className="box-container">
            <div className="UploadTree">
                <div className="individual-tree">
                    <a className="treePreview" href="../pages/inside%20view%20trees/EditTree.tsx"> <img src={imageSrc} alt="Preview of tree"></img> </a>
                </div>
            </div>
            <div className="lower-sub-box">
                <div className="individual-tree">{name}</div>
            </div>
        </div>
    );
}