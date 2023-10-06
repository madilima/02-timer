import {HeaderContainer} from './styles';
import Logo from '../../Logo.svg';
import { Timer, Scroll} from 'phosphor-react';
import { Link } from 'react-router-dom';


export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
        <nav>
          <Link to="/"> <Timer size= {24} /> </Link>
          <Link to="/history"> <Scroll size= {24} /> </Link>
        </nav>
    </HeaderContainer>
  )
}
