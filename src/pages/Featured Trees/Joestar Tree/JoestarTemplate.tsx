import { NavigationBar } from "../../../components/NavigationBar.tsx";
import FamilyTreeChart from "../../../components/FamilyTreeChart.tsx";
export function JoestarTemplate() {
    // Family tree data
    const nodes = [
        { id: 1, pids: [2], name: 'George Joestar', gender: 'male', img: 'https://static.jojowiki.com/images/thumb/8/8d/latest/20210905151625/George_Infobox_Anime.png/400px-George_Infobox_Anime.png'},
        { id: 2, pids: [1], name: 'Mary Joestar', gender: 'female', img: 'https://static.jojowiki.com/images/thumb/c/ca/latest/20221115210024/Mary_Joestar_Infobox_Manga.png/400px-Mary_Joestar_Infobox_Manga.png' },
        { id: 3, mid: 1, pids: [4], fid: 2, name: 'Jonathan Joestar', gender: 'male', img: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/04/jonathan-joestar.jpg' },
        { id: 4, pids: [5], name: 'Erica Pendleton Joestar', gender: 'female', img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f517c51c-715b-4ede-a7b0-d1e0be101753/dev2r5v-0175dda3-1fd0-42a7-a571-fa012efb9ec0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y1MTdjNTFjLTcxNWItNGVkZS1hN2IwLWQxZTBiZTEwMTc1M1wvZGV2MnI1di0wMTc1ZGRhMy0xZmQwLTQyYTctYTU3MS1mYTAxMmVmYjllYzAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.uXX_dpbr9ExAPfq5_bMO_h4aiLHOsRpLNOlSk1CM3ao' },
        { id: 5, mid: 3, fid: 4,pids:[6], name: 'George Joestar II', gender: 'male', img: 'https://static.jojowiki.com/images/a/a4/latest/20211016200609/George_II_Infobox_Manga.png'  },
        { id: 6, pids: [5], name: 'Elizabeth "Lisa Lisa" Joestar', gender: 'female', img: 'https://i.pinimg.com/originals/77/9b/9d/779b9d17a0ab5fb96455eaf96f4a4991.jpg'  },
        { id: 7, mid:5, fid:6, pids: [8,9], name: 'Joseph Joestar', gender: 'male', img: 'https://static.jojowiki.com/images/thumb/6/6e/latest/20210313174003/Joseph_young_BT_Infobox_Anime.png/400px-Joseph_young_BT_Infobox_Anime.png'  },
        { id: 8, pids: [7], name: 'Suzi Q Joestar', gender: 'female', img: 'https://static.jojowiki.com/images/thumb/c/cf/latest/20221231140151/Suzi_Q_BT_Infobox_Anime.png/400px-Suzi_Q_BT_Infobox_Anime.png'  },
        { id: 9, pids: [7], name: 'Tomoko Higashikata', gender: 'female', img: 'https://static.jojowiki.com/images/thumb/e/e8/latest/20210620023948/Tomoko_Higashikata_Infobox_Anime.png/400px-Tomoko_Higashikata_Infobox_Anime.png'  },
        { id: 10, mid:8, fid: 7, pids:[11], name: 'Holy Kujo', gender: 'female', img: 'https://pm1.aminoapps.com/6714/4d9354b742c487f782168158dd5633d14732797c_00.jpg'  },
        { id: 11, pids: [10], name: "Sadao Kujo", gender: 'male', img: 'https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0='  },
        { id: 12, mid:9, fid: 7, name: 'Josuke Higashikata', gender: 'male', img: 'https://static.jojowiki.com/images/thumb/4/49/latest/20211117015857/Josuke_DU_Infobox_Anime.png/400px-Josuke_DU_Infobox_Anime.png'  },
        { id: 13, mid:10, fid: 11,pids:[14], name: 'Jotaro Kujo', gender: 'male', img: 'https://static.jojowiki.com/images/thumb/6/69/latest/20201130220440/Jotaro_SC_Infobox_Manga.png/400px-Jotaro_SC_Infobox_Manga.png'  },
        { id: 14, pids:[13], name: "Jolyne's Mother", gender: 'female', img: 'https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0='  },
        { id: 15, mid:14, fid: 13, name: 'Jolyne Kujo', gender: 'female', img: 'https://static.jojowiki.com/images/thumb/0/03/latest/20220905170256/Jolyne_Cujoh_Infobox_Anime.png/400px-Jolyne_Cujoh_Infobox_Anime.png '  },
        { id: 16, pids:[17], fid:19, name: 'Dio', gender: 'male', img: 'https://static.jojowiki.com/images/thumb/b/b5/latest/20220116051744/DIO_Normal_SC_Infobox_Manga.png/400px-DIO_Normal_SC_Infobox_Manga.png'  },
        { id: 17, pids:[16], name: "Giorno's Mother", gender: 'female', img: 'https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0='  },
        { id: 18, mid:17, fid: 16, name: 'Giorno Giovanna', gender: 'male', img: 'https://static.jojowiki.com/images/thumb/4/4a/latest/20210422070411/Giorno_Giovanna_Infobox_Anime.png/400px-Giorno_Giovanna_Infobox_Anime.png'  },
        { id: 19,  name: 'Dario Brando', gender: 'male', img: 'https://static.jojowiki.com/images/thumb/d/d3/latest/20191015220017/Dario_bring_ill.png/400px-Dario_bring_ill.png'  },



    ];

    // Function to download the data as JSON
    const downloadTsx = () => {
        // Assuming nodes is an array of objects, prepare it as a TSX component
        const tsxContent = `import React from 'react';

const nodes = ${JSON.stringify(nodes, null, 2)};

const FamilyTreeData = () => (
    <div>
        {JSON.stringify(nodes, null, 2)}
    </div>
);

export default FamilyTreeData;`;

        // Encode the TSX content for the download link
        const dataStr = "data:text/plain;charset=utf-8," + encodeURIComponent(tsxContent);

        // Create an anchor element for downloading the file
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);

        // Get the current file name and use it as the download file name
        const currentFileName = window.location.pathname.split('/').pop().replace(/\.[^/.]+$/, "") + ".tsx";
        downloadAnchorNode.setAttribute("download", currentFileName);

        // Append to the document, trigger the download, then remove the element
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }



    return (
        <>
            <NavigationBar />

            <div style={{ height: "100%" }}>
                <button onClick={downloadTsx} style={{ margin: '10px' }}>Download File</button>
                <FamilyTreeChart nodes={nodes} />
            </div>
        </>
    );
}
