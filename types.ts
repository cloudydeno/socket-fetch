/**
 * API to help satisfy HTTP requests by providing network connections.
 */
export interface Dialer {
  dial(target: URL): Promise<DialedSocket>;
}

/**
 * Reference to a bidirectional network connection.
 */
export type DialedSocket = {
  readable: ReadableStream<Uint8Array>;
  writable: WritableStream<Uint8Array>;
}
