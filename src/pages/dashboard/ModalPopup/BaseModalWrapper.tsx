import React from "react";
import Modal from "./Modal";
import { DesktopModalContainer, Header } from "./ModalPopup.styles";

interface AddBaseModalWrapperProps {
    isModal: boolean;
    onBackdropClick: () => void;
    content?: React.ReactNode;
}
interface EditBaseModalWrapperProps {
    isEditModal: boolean;
    onBackdropClick: () => void;
    content?: React.ReactNode;
}
const AddBaseModalWrapper: React.FC<AddBaseModalWrapperProps> = ({ onBackdropClick, isModal, content }) => {
    if (!isModal) {
        return null;
    }
    return (<Modal onBackdropClick={onBackdropClick}>
        <DesktopModalContainer>
            <Header> Lead Details </Header>
            {content}
        </DesktopModalContainer>
    </Modal>);
}

const EditBaseModalWrapper: React.FC<EditBaseModalWrapperProps> = ({ onBackdropClick, isEditModal, content }) => {
    if (!isEditModal) {
        return null;
    }
    return (<Modal onBackdropClick={onBackdropClick}>
        <DesktopModalContainer>
            <Header> Edit Lead Details </Header>
            {content}
        </DesktopModalContainer>
    </Modal>);
}

export { AddBaseModalWrapper, EditBaseModalWrapper };