import styled from "styled-components";

const ModalContainer = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

export const DesktopModalContainer = styled(ModalContainer)`
    border-radius: 10px;
    box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.5);
    padding: 40px;
    width: 600px;
    font-size: 16px;
`;

export const Header = styled.h3`
    font-size: 24px;
    font-weight: 600;
    color: #000;
    margin: 5px 0 20px;
    text-align: center;
`;