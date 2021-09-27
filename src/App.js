import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginVision from './routes/Login/LoginVision';
import GeralView from './routes/Tweets/GeralView';
import MeuPerfilView from './routes/Tweets/MeuPerfilView';
import FavoritosView from './routes/Tweets/FavoritosView';
import RegistroVision from './routes/Login/RegistroVision';
import { ChakraProvider } from "@chakra-ui/react"
import { createContext, useState } from 'react';

export const UserContext = createContext();

function App() {

  const [ allTweets, setAllTweets ] = useState([]);

  return (
    <UserContext.Provider value={{allTweets, setAllTweets}}>
      <div className="App">
          <ChakraProvider>
            <BrowserRouter>
              <Switch>
                  <Route exact path="/">
                    <LoginVision />
                  </Route>
                  <Route path="/login">
                    <LoginVision />
                  </Route>
                  <Route path="/cadastrar">
                    <RegistroVision />
                  </Route>
                  <Route path="/geral">
                    <GeralView />
                  </Route>
                  <Route path="/meu-perfil">
                    <MeuPerfilView />
                  </Route>
                  <Route path="/favoritos">
                    <FavoritosView />
                  </Route>
                </Switch>
            </BrowserRouter>
          </ChakraProvider>
      </div>
    </UserContext.Provider>
  );
}

export default App;
