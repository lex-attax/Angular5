import { Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges
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

  constructor() { 
    console.log('constroctor called!');
  }
  
  ngOnChanges() {
    
  }

  ngOnInit() {
    console.log('ngOnInit called!');
  }

}
