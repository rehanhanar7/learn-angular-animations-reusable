import {
  trigger,
  state,
  style,
  transition,
  animate,
  AnimationTriggerMetadata
} from '@angular/animations';

export const ngif_animation: AnimationTriggerMetadata = trigger(
  'ngif_animation',
  [
    state(
      'in',
      style({
        opacity: 1,
        transform: 'translateX(0vw)'
      })
    ),
    transition('void => *', [
      style({
        opacity: 0,
        transform: 'translateX(-10vw)'
      }),
      animate(300)
    ]),
    transition('* => void', [
      animate(
        300,
        style({
          opacity: 0,
          transform: 'translateX(-10vw)'
        })
      )
    ])
  ]
);
