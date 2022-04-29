import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path: 'users',
          loadChildren: () =>
            import('users/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'posts',
          loadChildren: () =>
            import('posts/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'comments',
          loadChildren: () =>
            import('comments/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'todos',
          loadChildren: () =>
            import('todos/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'photos',
          loadChildren: () =>
            import('photos/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'albums',
          loadChildren: () =>
            import('albums/Module').then((m) => m.RemoteEntryModule),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
