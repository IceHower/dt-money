import Logo from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
    onOpenNewTransaction: () => void;
}

export function Header(props: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={Logo} alt="Logo dtmoney"/>
                <button type="button" onClick={props.onOpenNewTransaction}>Nova transação</button>
            </Content>
                
        </Container>
    )
}