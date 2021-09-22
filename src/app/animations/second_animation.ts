import {
  trigger,
  state,
  style,
  transition,
  animate,
  AnimationTriggerMetadata
} from '@angular/animations';

export const secondanimation: AnimationTriggerMetadata = trigger(
  'secondanimation',
  [
    state(
      'start',
      style({
        transform: 'translateX(0vw)'
      })
    ),
    state(
      'end',
      style({
        transform: 'translateX(10vw)'
      })
    ),
    state(
      'shrink',
      style({
        transform: 'scale(0.5)'
      })
    ),
    state(
      'expand',
      style({
        transform: 'scale(1)'
      })
    ),
    transition('start <=> end', animate(1000)),
    transition('* <=> shrink', animate(2000))
  ]
);
