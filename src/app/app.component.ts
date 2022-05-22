import { Component } from '@angular/core'
@Component({
  selector: 'pm-root',
  template: `
    <div>
      <h1>{{ title }}</h1>
      <p> My First Project </p>
      <pm-products></pm-products>
    </div>
  `
})
export class AppComponent{
  title: string = 'ACME Project Management'
}