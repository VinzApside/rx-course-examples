import {
    add
} from './helpers';

import {} from "rxjs/operators";

import {
    interval
} from 'rxjs';

interval(1000).pipe(take(10)).subscribe(add.li)