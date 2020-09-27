# successerror

simplified optional success/error callbacks

## Install

```bash
npm i successerror
```

## Usage

```typescript
import fs from 'fs'
import { SuccessErrorCallback, Solver } from './successErrorCallbacks';

// With these callbacks, functions like this can be created with optional callbacks
function remove(path: string, ...callbacks: SuccessErrorCallback[]) {
    fs.unlink(path, Solver.with(callbacks).solve)
}

// So the functions can be called like this

const dummyPath = 'dummyPath'

// Order doesn't matter
remove(dummyPath, 
    (() => { console.log('success') }),                // successCallback
    (err => console.log(err))                          // errorCallback
)
remove(dummyPath, 
    (err => console.log(err)),                         // errorCallback
    (() => { console.log('success') })                 // successCallback
)

// Use only success or only error callback
remove(dummyPath, (err => console.log(err)))           // only errorCallback
remove(dummyPath, (() => { console.log('success') }))  // only successCallback

// Use no callback
remove(dummyPath)                                      // no callback
```
