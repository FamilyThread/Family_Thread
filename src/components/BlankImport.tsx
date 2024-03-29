import '../styles/importTemplate.css';
import UploadButton from "../assets/UploadButton.png";
import ThumbsUp from "../assets/ThumbsUp.png";
import PreviewFile from "../assets/PreviewPlaceHolder.png";

const images = {
    EmptyPage: UploadButton,
    ThumbsUp: ThumbsUp,
    PreviewFile: PreviewFile
};



type NuclearFamilyProps = {
    name: string;
    imgSrc: string;
};

export function BlankImport({ name, imgSrc }: NuclearFamilyProps) {
    const imageSrc = images[imgSrc];

    return (
        <div className="box-container">
            <div className="UploadTree">
                <div className="individual-tree">
                    {/*<img src={imageSrc} alt="Tree preview"/>*/}
                    <a className="treePreview" href="../pages/inside%20view%20trees/EditTree.tsx"> <img src={imageSrc} alt="Preview of tree"></img> </a>
                </div>
            </div>
            <div className="lower-sub-box">
                <div className="individual-tree">{name}</div>
            </div>
        </div>
    );
}