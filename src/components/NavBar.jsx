import { Button } from '@chakra-ui/react';
import './NavBar.css';
import { Link as LinkReach} from 'react-router-dom'

const NavBar = (props) => {
  return (
    <nav>
      <Button variant="link" as={LinkReach} color="white" to="/geral">
        Geral
      </Button>
      <Button variant="link" as={LinkReach} color="white" to="/meu-perfil">
        Meu Perfil
      </Button>
      <Button variant="link" as={LinkReach} color="white" to="/favoritos">
        Favoritos
      </Button>
    </nav>
  )
}

export default NavBar;