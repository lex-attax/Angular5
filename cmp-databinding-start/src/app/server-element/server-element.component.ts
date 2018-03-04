import { Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements OnInit, OnChanges {
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

}
