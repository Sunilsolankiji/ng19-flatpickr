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
  date: any = '1988-09-19';

  ngOnInit(){
    setTimeout(() => {
      this.date = '1989-09-19';
    }, 3000);
  }

  pickerChange(event: any){
    console.log('pickerChange', event);
  }
}
