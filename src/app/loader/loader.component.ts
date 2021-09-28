import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  //@Input('isLoading') isLoading:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  // ngOnChanges(changes:SimpleChanges):void{
  //   this.isLoading
  // }

  // ngDoCheck():void{
  //   this.isLoading
  // }


}
