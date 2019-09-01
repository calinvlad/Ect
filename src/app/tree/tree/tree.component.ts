import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  constructor() { }

  @Input() info: any;
  data: any;


  ngOnInit() {
    this.data = JSON.stringify(this.info);
  }

}
