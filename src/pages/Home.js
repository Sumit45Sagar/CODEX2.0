// import React, { useState } from 'react';
// import { v4 as uuidV4 } from 'uuid';
// import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//     const navigate = useNavigate();

//     const [roomId, setRoomId] = useState('');
//     const [username, setUsername] = useState('');
//     const createNewRoom = (e) => {
//         e.preventDefault();
//         const id = uuidV4();
//         setRoomId(id);
//         toast.success('Created a new room');
//     };

//     const joinRoom = () => {
//         if (!roomId || !username) {
//             toast.error('ROOM ID & username is required');
//             return;
//         }

//         navigate(`/editor/${roomId}`, {
//             state: {
//                 username,
//             },
//         });
//     };

//     const handleInputEnter = (e) => {
//         if (e.code === 'Enter') {
//             joinRoom();
//         }
//     };
//     return (
//         <div className="homePageWrapper">
//             <div className="formWrapper">
//                 <img
//                     className="homePageLogo"
//                     src="/code-logo.png"
//                     alt="code-sync-logo"
//                 />
//                 <h4 className="mainLabel">Paste invitation ROOM ID</h4>
//                 <div className="inputGroup">
//                     <input
//                         type="text"
//                         className="inputBox"
//                         placeholder="ROOM ID"
//                         onChange={(e) => setRoomId(e.target.value)}
//                         value={roomId}
//                         onKeyUp={handleInputEnter}
//                     />
//                     <input
//                         type="text"
//                         className="inputBox"
//                         placeholder="USERNAME"
//                         onChange={(e) => setUsername(e.target.value)}
//                         value={username}
//                         onKeyUp={handleInputEnter}
//                     />
//                     <button className="btn joinBtn" onClick={joinRoom}>
//                         Join
//                     </button>
//                     <span className="createInfo">
//                         If you don't have an invite then create &nbsp;
//                         <a
//                             onClick={createNewRoom}
//                             href=""
//                             className="createNewBtn"
//                         >
//                             new room
//                         </a>
//                     </span>
//                 </div>
//             </div>
//             <footer>
//                 <h4>
//                     Built with 💛 &nbsp; by &nbsp;
//                     <a href="https://github.com/sumit45sagar">Team Codex</a>
//                 </h4>
//             </footer>
//         </div>
//     );
// };

// export default Home;























// import React, { useState } from 'react';
// import { v4 as uuidV4 } from 'uuid';
// import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import { LANGUAGE_VERSIONS } from '../constants';

// const Home = () => {
//     const navigate = useNavigate();
//     const [roomId, setRoomId] = useState('');
//     const [username, setUsername] = useState('');
//     const [selectedLanguage, setSelectedLanguage] = useState('');

//     const createNewRoom = (e) => {
//         e.preventDefault();
//         const id = uuidV4();
//         setRoomId(id);
//         toast.success('Created a new room');
//     };

//     const joinRoom = () => {
//         if (!roomId || !username || !selectedLanguage) {
//             toast.error('ROOM ID, username, and language are required');
//             return;
//         }

//         navigate(`/editor/${roomId}`, {
//             state: {
//                 username,
//                 language: selectedLanguage,
//             },
//         });
//     };

//     const handleInputEnter = (e) => {
//         if (e.code === 'Enter') {
//             joinRoom();
//         }
//     };

//     return (
//         <div className="homePageWrapper">
//             <div className="formWrapper">
//                 <img
//                     className="homePageLogo"
//                     src="/code-logo.png"
//                     alt="code-sync-logo"
//                 />
//                 <h4 className="mainLabel">Paste invitation ROOM ID</h4>
//                 <div className="inputGroup">
//                     <input
//                         type="text"
//                         className="inputBox"
//                         placeholder="ROOM ID"
//                         onChange={(e) => setRoomId(e.target.value)}
//                         value={roomId}
//                         onKeyUp={handleInputEnter}
//                     />
//                     <input
//                         type="text"
//                         className="inputBox"
//                         placeholder="USERNAME"
//                         onChange={(e) => setUsername(e.target.value)}
//                         value={username}
//                         onKeyUp={handleInputEnter}
//                     />
//                     <div className="buttonGroup">
//                         <button className="btn joinBtn" onClick={joinRoom}>
//                             Join
//                         </button>
//                         <select
//                             className="languageSelect"
//                             value={selectedLanguage}
//                             onChange={(e) => setSelectedLanguage(e.target.value)}
//                         >
//                             <option value="" disabled>
//                                 Select Language Version
//                             </option>
//                             {Object.entries(LANGUAGE_VERSIONS).map(([lang, version]) => (
//                                 <option key={lang} value={lang}>
//                                     {`${lang} (${version})`}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>
//                     <span className="createInfo">
//                         If you don't have an invite then create &nbsp;
//                         <a
//                             onClick={createNewRoom}
//                             href=""
//                             className="createNewBtn"
//                         >
//                             new room
//                         </a>
//                     </span>
//                 </div>
//             </div>
//             <footer>
//                 <h4>
//                     Built with 💛 &nbsp; by &nbsp;
//                     <a href="https://github.com/sumit45sagar">Team Codex</a>
//                 </h4>
//             </footer>
//         </div>
//     );
// };

// export default Home;

// 1 oct

import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { LANGUAGE_VERSIONS } from '../constants';

const Home = () => {
    const navigate = useNavigate();
    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('');

    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id);
        toast.success('Created a new room');
    };

    const joinRoom = () => {
        if (!roomId || !username || !selectedLanguage) {
            toast.error('ROOM ID, username, and language are required');
            return;
        }

        navigate(`/editor/${roomId}`, {
            state: {
                username,
                language: selectedLanguage, // Pass the selected language
            },
        });
    };

    const handleInputEnter = (e) => {
        if (e.code === 'Enter') {
            joinRoom();
        }
    };

    return (
        <div className="homePageWrapper">
            <div className="formWrapper">
                <img
                    className="homePageLogo"
                    src="/code-logo.png"
                    alt="code-sync-logo"
                />
                <h4 className="mainLabel">Paste invitation ROOM ID</h4>
                <div className="inputGroup">
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="ROOM ID"
                        onChange={(e) => setRoomId(e.target.value)}
                        value={roomId}
                        onKeyUp={handleInputEnter}
                    />
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="USERNAME"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        onKeyUp={handleInputEnter}
                    />
                    <div className="buttonGroup">
                        <button className="btn joinBtn" onClick={joinRoom}>
                            Join
                        </button>
                        <select
                            className="languageSelect"
                            value={selectedLanguage}
                            onChange={(e) => setSelectedLanguage(e.target.value)}
                        >
                            <option value="" disabled>
                                Select Language
                            </option>
                            {Object.entries(LANGUAGE_VERSIONS).map(([lang, version]) => (
                                <option key={lang} value={lang}>
                                    {`${lang} (${version})`}
                                </option>
                            ))}
                        </select>
                    </div>
                    <span className="createInfo">
                        If you don't have an invite then create &nbsp;
                        <button
                            onClick={createNewRoom}
                            href=""
                            className="createNewBtn"
                        >
                            new room
                        </button>
                    </span>
                </div>
            </div>
            <footer>
                <h4>
                    Built with 💛 &nbsp; by &nbsp;
                    <a href="https://github.com/sumit45sagar">Team Codex</a>
                </h4>
            </footer>
        </div>
    );
};

export default Home;
