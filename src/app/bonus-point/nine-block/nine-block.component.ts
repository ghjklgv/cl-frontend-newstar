import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nine-block',
  templateUrl: './nine-block.component.html',
  styleUrls: ['./nine-block.component.css']
})
export class NineBlockComponent implements OnInit {

  constructor() { }
  nineBlockName = [1,2,3,4,5,6,7,8,9]
  ngOnInit(): void {
  }

}
