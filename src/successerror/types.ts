export type SuccessCallback = () => void
export type ErrorCallback = (err: Error) => void
export type SuccessErrorCallback = SuccessCallback | ErrorCallback