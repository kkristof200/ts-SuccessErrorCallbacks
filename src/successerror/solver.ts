import { SuccessErrorCallback, SuccessCallback, ErrorCallback } from './types';

export class Solver {
    readonly callbacks?: SuccessErrorCallback[]

    constructor(callbacks?: SuccessErrorCallback[]) { this.callbacks = callbacks }
    static with(callbacks?: SuccessErrorCallback[]): Solver { return new Solver(callbacks) }

    solve = (err: Error) => {
        if (!this.callbacks || this.callbacks.length == 0) return

        for (const callback of this.callbacks) {
            if (!err && callback.length == 0) { (<SuccessCallback>callback)() }
            else if (err && callback.length == 1) { (<ErrorCallback>callback)(err) }
        }
    }
}