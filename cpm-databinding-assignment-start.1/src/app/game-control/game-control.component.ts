import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFrired: EventEmitter<number> = new EventEmitter<number>();
  interval;
  lastNumber = 0;

  constructor() { }

  ngOnInit() {
  }
  
  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFrired.emit(this.lastNumber +1);
      this.lastNumber++;
      },1000) 
  }
  
}
