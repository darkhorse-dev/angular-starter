/*
 * Angular bootstraping
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
/*
 * App Module
 * our top level module that holds all of our components
 */
import { AppModule } from './app';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
