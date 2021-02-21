import {MenuWrapper} from '../Menu/styles/MenuWrapper.js';
import Logo from '../../../theme/Logo';
import { Button } from '../Button/index.js';
import Text from '../../foundation/Text';

export default function Menu()
{
    const links = [
        {
            texto: 'Home',
            url: '/'
        },
        {
            texto: 'Perguntas Frequentes',
            url: '/faq'
        },
        {
            texto: 'Sobre',
            url: '/sobre'
        },
    ];
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo/>
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
          {links.map((link) => {
            return (
              <li key={link.url}>
                <Text variant="smallestException" tag="a" href={link.url}>{link.texto}</Text>
              </li>
            );
          })}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
          <Button ghost variant="secondary.main">
            <Text></Text>
            Entrar
          </Button>
          <Button variant="primary.main">
            Cadastrar
          </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}