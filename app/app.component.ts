// this file contains the first component
// component decorator
import { Component } from '@angular/core';

@Component({
  selector: 'mw-app',
  // template metadata property below
  // template: `
  //   <h1>My App</h1>
  //   <p>Keeping track of the media I want to watch.</p>
  // `

  // template url property below
  templateUrl: 'app/app.component.html',
// styles can be specified inline
//   styles: [`
//     h1 { color: white; }
//     .description {
//       font-style: italic,
//       color: green;
//     }
//   `]
// })

// styles can also be linked from another file
styleUrls: ['app/app.component.css']
})
// the component needs to be applied to a class
export class AppComponent {
  onMediaItemDelete(mediaItem) {

  }

  firstMediaItem = {
    id: 1,
    name: "Firebug",
    medium: "Series",
    category: "Science Fiction",
    year: 2010, 
    watchedOn: null,
    isFavorite: false
  };
}

































// import { Component } from '@angular/core';

// @Component({
//   selector: 'mw-app',
//   templateUrl: 'app/app.component.html',
//   styleUrls: ['app/app.component.css']
// })
// export class AppComponent { }
