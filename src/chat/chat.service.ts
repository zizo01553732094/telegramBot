import { Injectable } from "@nestjs/common";
import { Socket } from "engine.io";

@Injectable()

export class ChatService {
    private messages: String[] =[];

    sendMessage(socket: Socket, message: String): void {
 

        this.messages.push(message);
        socket.emit('message', message);
    }
    getMessage(): String[]{
        return this.messages;
    }
}