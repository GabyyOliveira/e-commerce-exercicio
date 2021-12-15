import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bindings',
  templateUrl: './data-bindings.component.html',
  styleUrls: ['./data-bindings.component.css']
})
export class DataBindingsComponent implements OnInit {

  corL: string
  corG: string
  corS: string
  corB: string

  constructor() { 
    this.corL = ""
    this.corG = ""
    this.corS = ""
    this.corB = ""

  }

  ngOnInit(): void {
  }

}
