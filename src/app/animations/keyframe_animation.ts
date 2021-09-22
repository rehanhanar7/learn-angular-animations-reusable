import {
  trigger,
  state,
  style,
  transition,
  animate,
  AnimationTriggerMetadata,
  keyframes
} from '@angular/animations';

export const keyframe_animation: AnimationTriggerMetadata = trigger(
  'keyframe_animation_trig',
  [
    state(
      'start',
      style({
        transform: 'translateX(-5vw)'
      })
    ),
    state(
      'end',
      style({
        transform: 'translateX(10vw)'
      })
    ),
    transition('start <=> end', [
      animate(
        1000,
        keyframes([
          style({
            transform: 'translateX(-4vw)',
            opacity: 0
          }),
          style({
            transform: 'translateX(0vw)',
            opacity: 0.5
          }),
          style({
            transform: 'translateX(5vw)',
            opacity: 1
          })
        ])
      )
    ])
  ]
);
