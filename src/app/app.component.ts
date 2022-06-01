import { Component } from '@angular/core'
@Component({
  selector: 'pm-root',
  template: `
    <div>
      <h1 class="mb-3 ms-3">{{ title }}</h1>
      <pm-products></pm-products>
    </div>
  `,
  styleUrls:['./app.component.css']
})
export class AppComponent{
  title: string = 'Products Management'
}