import {
  trigger,
  state,
  style,
  transition,
  animate,
  AnimationTriggerMetadata
} from '@angular/animations';

//need to learn more

export const transitionphases: AnimationTriggerMetadata = trigger(
  'transitionphaseanimation',
  [
    state(
      'startbaby',
      style({
        transform: 'scale(1)'
      })
    ),
    state(
      'endbaby',
      style({
        transform: 'scale(0.5)'
      })
    ),
    transition('startbaby <=> endbaby', [
      animate(1000),
      style({ backgroundColor: 'red' }),
      animate(1000, style({ borderRadius: '100px' })),
      animate(1000)
    ])
  ]
);
