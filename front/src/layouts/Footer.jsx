import styled from "styled-components";

const FooterContainer = styled.footer`
    background: #eae9e7;
    width:100%;
    display: flex;
    justify-content: center;
    padding: 35px 0;
`;

const Container = styled.div`
    width: 1120px;
    text-align:left;

    & p {
        font-size: 1em;
    }
`;

const Footer = () => {
    return (
        <FooterContainer className="footer">
            <Container>
                <p>도토리몰</p>
                <p>회사주소 : 도토리시 도토리구 다람쥐40  전화번호 : 00-000-0000</p>
                <p>사업자등록번호 : 000-0000-0000</p>
            </Container>
        </FooterContainer>
    )
}

export default Footer