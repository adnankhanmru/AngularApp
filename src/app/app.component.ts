import { Component } from '@angular/core';
import { Customer } from './Customer/customer';
import { RouterOutlet } from '@angular/router';
import { CustomerComponent } from './Customer/customer.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TemplateFormComponent } from './template-form/template-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CustomerComponent,CalculatorComponent,TemplateFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularApp1';
}
