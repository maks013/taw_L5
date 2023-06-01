import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
})
export class NewpostComponent {
  constructor(private dataService: DataService) { }

  onSubmit(data: any) {
    this.dataService.createPost(data).subscribe(
      response => {
        console.log(response);

      },
      error => {
        console.log(error);

      }
    );
  }
}
