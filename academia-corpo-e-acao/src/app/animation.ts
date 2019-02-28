import { trigger, transition, style, query, animate, group } from "@angular/animations";

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [

      query(':enter',
        [
          style({ opacity: 0 })
        ],
        { optional: true }
      ),
      query(':leave',
        [
          style({ opacity: 1 }),
          animate('0.3s 200ms', style({ opacity: 0 }))
        ],
        { optional: true }
      ),
      query(':enter',
        [
          style({ opacity: 0 }),
          animate('0.3s 200ms', style({ opacity: 1 }))
        ],
        { optional: true }
      )
    ])
  ]);