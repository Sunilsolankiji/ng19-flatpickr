import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Ng2Flatpickr } from 'ng2-flatpickr';

@Component({
  selector: 'app-root',
  imports: [Ng2Flatpickr],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng19-flatpickr';
}
