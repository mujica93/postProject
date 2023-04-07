import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from 'src/environments/environment';
import { TableComponent } from './components/table/table.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { SearchPostComponent } from './components/search-post/search-post.component';
import { ROOT_REDUCERS } from './state/app.state';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './state/effects/post.effect';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    NewPostComponent,
    SearchPostComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ name: 'TEST'}),
    EffectsModule.forRoot([PostEffects]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
