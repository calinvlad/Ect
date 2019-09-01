import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  input = '';
  output = '';
  vm: any = Array

  ngOnInit(): void {
    this.vm.data = [{ name: 'A', children: [{ name: 'B', children: [{ name: 'C' }] }, { name: 'B2'
      }] }, { name: 'D', children: [{ name: 'E' }] }];
  }

  submit(data) {
    this.output = data;
  }
  reset() {
    this.output = '';
    this.input = '';
  }
}
