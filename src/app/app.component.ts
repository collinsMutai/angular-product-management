import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template:   `
  <div><h1>Welcome to {{ title }}!!</h1>
  <pm-products></pm-products>>

</div>`

})
// interpolation from class to the template
export class AppComponent {
  title : string = 'Angular: Getting Started';
}
