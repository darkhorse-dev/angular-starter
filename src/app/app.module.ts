import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from './shared';
import { AuthenticatedHttp } from './shared';
import { ConfigService } from './shared';
import { FooterComponent } from 'angular-portbase-layout/components';
import { HeaderComponent } from './header';
import { UsermenuComponent } from './header';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ROUTES } from './app.routes';
// App is our top level component
import { App } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { NoContent } from './no-content';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS
];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ App ],
  declarations: [
    App,
    NoContent,
    HeaderComponent,
    FooterComponent,
    UsermenuComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    APP_PROVIDERS,    AuthenticationService,
    ConfigService,
    AuthenticatedHttp

  ]
})
export class AppModule {
}

