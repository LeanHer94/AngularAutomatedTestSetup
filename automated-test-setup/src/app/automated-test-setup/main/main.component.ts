import { Component, OnInit, ɵALLOW_MULTIPLE_PLATFORMS } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  classToTest = '';

  constructor() { }

  ngOnInit() {
  }

  createTest(){
    alert(this.classToTest);
  }
}
