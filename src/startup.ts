import { Aurelia, StandardConfiguration } from '@aurelia/runtime-html';
import { App as component } from './app';

(async function () {
  const host = document.querySelector<HTMLElement>('app');
  const au = new Aurelia()
    .register(
      StandardConfiguration,
    );
  au.app({ host, component });

  await au.start();
})().catch(console.error);
