import styled from "styled-components";

export const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
`;

export const Header = styled.header`
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    position: relative;
`;

export const Loader = styled.div`
    text-align: center;
`;

export const Title = styled.h1`
    font-size: 48px;
    color: ${(props) => props.theme.accentColor};
`;
