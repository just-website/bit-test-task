import {trigger, transition, style, animate, state} from "@angular/animations";

export const  toggleHideAnimation = (triggerName) => {
    return trigger(triggerName, [
        state(':enter', style({
          opacity: '1',
          margin: '*'
        })),
        state(':leave', style({
          opacity: '0',
          height: '0',
          margin: '0'
        })),
        transition(':leave', [
          animate( '0.25s ease-in', style({opacity: '0'})),
          animate('0.25s  ease-in', style({ height: '0', margin: '0' }))
        ]),
    ])
}

export const toggleHideTrAnimation = (triggerName) => {
    return trigger(triggerName, [
        state(':enter', style({
          opacity: '1',
          margin: '*'
        })),
        state(':leave', style({
          opacity: '0',
          height: '0',
        })),
        transition(':leave', [
          animate( '0.25s ease-in', style({opacity: '0'})),
          animate('0.25s  ease-in', style({ height: '0' }))
        ]),
        transition(':enter', [
            animate( '0.25s ease-in', style({opacity: '*'})),
            animate('0.25s  ease-in', style({ height: '*' }))
          ]),
    ])
}

export const modalShowAnimation = (triggerName) => {
    return trigger(triggerName, [
        state(':leave', style({
            opacity: '1',
            height: '*'
        })),
        state('void', style({
            opacity: '0',
            height: '*',
            top: '*',
            left: '*'
        })),
        transition('* => void', [
            style({
                opacity: '1',
                height: '*'
            }),
            animate( '0.25s ease-in', style({opacity: '0'})),
        ]),
        transition('void => *', [
            animate( '0.25s ease-in', style({opacity: '1'})),
          ]),
    ])
}