import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from 'src/components/App';
import store from 'src/store';

const rootReactElement = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

const target = document.getElementById('root');

ReactDom.render(rootReactElement, target);
