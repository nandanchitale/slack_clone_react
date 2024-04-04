import { Timestamp } from "@firebase/firestore";

export class RoomMessage {
    id?: string;
    timestamp?: Timestamp;
    user?: string;
    userImage?: string;
    message?: string;

    constructor(id?: string, timestamp?: Timestamp, user?: string, userImage?: string, message?: string) {
        this.id = id;
        this.timestamp = timestamp;
        this.user = user;
        this.userImage = userImage;
        this.message = message
    }
}