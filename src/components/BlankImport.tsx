import '../styles/importTemplate.css';
import UploadButton from "../assets/uploadButton.png";
import ThumbsUp from "../assets/thumbsUp.png";
import PreviewFile from "../assets/previewPlaceHolder.png";

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
                    <img src={imageSrc} alt="Picture" />
                </div>
            </div>
            <div className="lower-sub-box">
                <div className="individual-tree">{name}</div>
            </div>
        </div>
    );
}
