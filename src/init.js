import './style.scss';
import app from './application';
import body from './body-inner.html'


export default () => {
  document.title = 'ToDo task manager';
  document.body.outerHTML = body;
};
