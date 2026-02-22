import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface BookingSubmission {
    name: string;
    email: string;
    numParticipants: bigint;
    preferredTime: string;
}
export interface backendInterface {
    getAllSubmissions(): Promise<Array<BookingSubmission>>;
}
