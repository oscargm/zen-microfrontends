import { App } from './app';
import { globalStore } from 'global-store';
App.render(
  { customTitle: 'customTitle', globalStore },
  document.getElementById('root')
);
