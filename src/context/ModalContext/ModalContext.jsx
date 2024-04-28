// import {createContext, useContext, useState} from "react";
// import {AuthContext} from "../AuthContext/AuthContext.jsx";
// import {useRegister} from "../../hooks/useRegister.js";
// import {useLogin} from "../../hooks/useLogin.js";
//
//
// export const ModalContext = createContext(null);
//
//
// // eslint-disable-next-line react/prop-types
// function ModalContextProvider({children}) {
//     const {auth} = useContext(AuthContext);
//     const {handleLogin} = useLogin
//     const {handleRegister} = useRegister
//     const [isAuthFormModalOpen, setIsAuthFormModalOpen] = useState(false);
//     const [register, setRegister] = useState(true);
//     console.log("auth in header", auth)
//
// // two different options to open the AuthFormModal, one to register and one to login.
//     const handleOpenModalRegister = () => {
//         setIsAuthFormModalOpen(true);
//         setRegister(true)
//     }
//     const handleOpenModalLogin = () => {
//         setIsAuthFormModalOpen(true);
//         setRegister(false)
//     }
//
//     const handleCloseAuthFormModal = () => {
//         setIsAuthFormModalOpen(false);
//     }
//
//     const handleAuthFormModalSubmit = async () => {
//         try {
//             if (register) {
//                 await handleRegister();
//             } else {
//                 await handleLogin();
//             }
//             handleCloseAuthFormModal()
//         } catch (err) {
//             console.error(err);
//         }
//     }
//
//     const handleTabChange = (event) => {
//         if (event.target.id === 'tab-register') {
//             setRegister(true);
//         } else {
//             setRegister(false);
//         }
//     };
//
//     const modalData = {
//         isAuthFormModalOpen,
//         register,
//         handleTabChange,
//         handleAuthFormModalSubmit,
//         handleCloseAuthFormModal,
//         handleOpenModalRegister,
//         handleOpenModalLogin
//
//     }
//     return (
//         <ModalContext.Provider value={modalData}>
//             {children}
//         </ModalContext.Provider>
//     );
// }
//     export default ModalContextProvider;
