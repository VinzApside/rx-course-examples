import {
    add,
    sampleData
} from './helpers';

import {
    pluck,
    switchMap
} from "rxjs/operators"


// sampleData.pipe(pluck('name')).subscribe(add.li)
sampleData.pipe(pluck('company', 'name')).subscribe(add.li)