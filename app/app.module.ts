// this is the root module for the application
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// FormsModule used for template driven forms
// import { FormsModule } from '@angular/forms';
// ReactiveFormsModule used for model-driven forms
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { MediaItemFormComponent } from './media-item-form.component';

@NgModule({
  imports: [
    BrowserModule,
    // FormsModule
    ReactiveFormsModule
  ],
  // declarations array is for:
  // directives, components, and pipes you want to make available in your module
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective, 
    CategoryListPipe,
    MediaItemFormComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
































// ------------------------------------------------------------------------------------
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { ReactiveFormsModule } from '@angular/forms';
// import { HttpModule, XHRBackend } from '@angular/http';

// import { AppComponent } from './app.component';
// import { MediaItemComponent } from './media-item.component';
// import { MediaItemListComponent } from './media-item-list.component';
// import { FavoriteDirective } from './favorite.directive';
// import { CategoryListPipe } from './category-list.pipe';
// import { MediaItemFormComponent } from './media-item-form.component';
// import { MediaItemService } from './media-item.service';
// import { lookupListToken, lookupLists } from './providers';
// import { MockXHRBackend } from './mock-xhr-backend';
// import { routing } from './app.routing';

// @NgModule({
//   imports: [
//     BrowserModule,
//     ReactiveFormsModule,
//     HttpModule,
//     routing
//   ],
//   declarations: [
//     AppComponent,
//     MediaItemComponent,
//     MediaItemListComponent,
//     FavoriteDirective,
//     CategoryListPipe,
//     MediaItemFormComponent
//   ],
//   providers: [
//     MediaItemService,
//     { provide: lookupListToken, useValue: lookupLists },
//     { provide: XHRBackend, useClass: MockXHRBackend }
//   ],
//   bootstrap: [
//     AppComponent
//   ]
// })
// export class AppModule {}