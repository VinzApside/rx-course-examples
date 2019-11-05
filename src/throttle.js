import {
    add
} from './helpers';

import {
    throttle,
    take
} from "rxjs/operators";

import {
    interval,
    animationFrameScheduler
} from 'rxjs';

interval(10).pipe(
    throttle(() => interval(1000)),
    take(10)).subscribe(add.li);

// interval(0, animationFrameScheduler).pipe(
//     throttle(() => interval(1000)),
//     take(10)).subscribe(add.li);