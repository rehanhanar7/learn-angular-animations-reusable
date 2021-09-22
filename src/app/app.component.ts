import { Component, DoCheck } from '@angular/core';
import { firstanimation } from './animations/first_animation';
import { secondanimation } from './animations/second_animation';
import { ngif_animation } from './animations/ngif_animation';
import { transitionphases } from './animations/third_animation';
import { keyframe_animation } from './animations/keyframe_animation';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    firstanimation,
    secondanimation,
    ngif_animation,
    transitionphases,
    keyframe_animation
  ]
})
export class AppComponent implements DoCheck {
  myelementstate: string;
  myelementsecondstate: string;
  transitionphases_state: string;
  keyframe_animation_state: string;

  showflag: boolean;

  ngDoCheck() {
    console.log(
      this.myelementstate,
      this.myelementsecondstate,
      this.transitionphases_state,
      this.keyframe_animation_state
    );
  }

  constructor() {
    this.myelementstate = 'start';
    this.transitionphases_state = 'startbaby';
    this.myelementsecondstate = 'expand';
    this.showflag = false;
    this.keyframe_animation_state = 'start';
  }

  enablefirstanimation() {
    this.myelementstate == 'start'
      ? (this.myelementstate = 'end')
      : (this.myelementstate = 'start');
    this.myelementsecondstate == 'start'
      ? (this.myelementsecondstate = 'end')
      : (this.myelementsecondstate = 'start');
  }

  shrinksecondanimation() {
    this.myelementsecondstate == 'shrink'
      ? (this.myelementsecondstate = 'expand')
      : (this.myelementsecondstate = 'shrink');
  }

  showDiv() {
    this.showflag = !this.showflag;
  }

  transitionphases() {
    this.transitionphases_state == 'startbaby'
      ? (this.transitionphases_state = 'endbaby')
      : (this.transitionphases_state = 'startbaby');
  }

  start_keyframe_animation() {
    this.keyframe_animation_state == 'start'
      ? (this.keyframe_animation_state = 'end')
      : (this.keyframe_animation_state = 'start');
  }

  startevent(event: any) {
    console.log(event);
  }

  endevent(event: any) {
    console.log(event);
  }
}
