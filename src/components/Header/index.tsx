import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import logo from '../../assets/Logo.png'

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logo} alt="" />
                <NewTransactionButton>Nova Transação</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}
