import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: 'app/media-item.component.html',
  styleUrls: ['app/media-item.component.css']
})
export class MediaItemComponent { 
  @Input() mediaItem;
  // Output needs to set the property = to an event emitter object
  @Output() delete = new EventEmitter(); 
  // name = 'The Redemption';

  // wasWatched() {
  //   return true;
  // }

  onDelete() {
    // delete has an emit property attached to it
    // this.mediaItem returns what is to be deleted
    this.delete.emit(this.mediaItem);

  }
}























// import { Component, Input, Output, EventEmitter } from '@angular/core';

// @Component({
//   selector: 'mw-media-item',
//   templateUrl: 'app/media-item.component.html',
//   styleUrls: ['app/media-item.component.css']
// })
// export class MediaItemComponent {
//   @Input() mediaItem;
//   @Output() delete = new EventEmitter();

//   onDelete() {
//     this.delete.emit(this.mediaItem);
//   }
// }
