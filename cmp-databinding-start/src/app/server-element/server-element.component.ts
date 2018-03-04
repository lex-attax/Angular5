import { Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  doCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  doCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked
  {
  // assign an alias inside ()
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;

  constructor() { 
    console.log('constroctor called!');
  }
  
  //only hook that receives arguments
  ngOnChanges(changes: SimpleChanges) {
      console.log('ngOnChanges called!');
      console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called!');
  }
  //gets calles whenever angualar checks for any changes
  ngDoCheck() {
    console.log('ngDoCheck called!')
  }
  
  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
  }
  
  ngAfterContentChecked() {
    console.log('AfterContentChecked called!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
  }
  
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

}
