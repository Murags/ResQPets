import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";


const Modal = ({ children }) => {
    const elRef = useRef(null);

    if(!elRef.current){
        elRef.current = document.createElement("div");
    }

    useEffect(()=>{
        const modalRef = document.getElementById("modal");
        modalRef.appendChild(elRef.current);

        return () => { modalRef.removeChild(elRef.current) };
    }, []);

    return (
        createPortal(<div>{children}</div>, elRef.current)
    )
}

export default Modal;
