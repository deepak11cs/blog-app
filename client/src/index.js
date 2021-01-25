import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider} from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import theme from './theme';
import store from './store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserProfile from './components/UserProfile';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path='/user/:name' component={UserProfile}/>
            <Route path='/' component={App}/>
          </Switch>
        </BrowserRouter>
        
      </Provider>
      
    </ThemeProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

