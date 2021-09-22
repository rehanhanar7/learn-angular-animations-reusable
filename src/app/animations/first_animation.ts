import {
  trigger,
  state,
  style,
  transition,
  animate,
  AnimationTriggerMetadata
} from '@angular/animations';

export const firstanimation: AnimationTriggerMetadata = trigger(
  'firstanimation',
  [
    state(
      'start',
      style({
        backgroundColor: 'green',
        transform: 'translateX(0vw)'
      })
    ),
    state(
      'end',
      style({
        backgroundColor: 'yellow',
        transform: 'translateX(10vw)'
      })
    ),
    transition('start => end', [animate(1000)]),
    transition('end => start', animate(1000))
  ]
);
