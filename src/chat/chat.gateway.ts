import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect, ConnectedSocket } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { ChatService } from './chat.service';
import fetch from 'node-fetch';
import * as TelegramBot from "node-telegram-bot-api";
import { Client } from 'socket.io/dist/client';

const telegramBotToken = "6870198830:AAGd3ESP3tCuRURSgKImGLVYPdmsV8iNWPI";
const telegramChatId ="t.me/zizo1171152bot";

@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer() server;
  private bot: TelegramBot; 
  constructor ( private readonly chatService: ChatService){
    this.bot = new TelegramBot(telegramBotToken, {polling: true});
  }

  handleConnection(socket: Socket): void {

    console.log("Client is connected ${socket.io}")
    
  }
  handleDisconnect(socket:Socket): void {

    console.log(" Client Disconnected ${socket.io}")
    
  }
  @SubscribeMessage("sendMessage")
    handleMessage(@MessageBody() message: String, @ConnectedSocket() socket: Socket): void {

      const chatMessage = "${client.id}: ${message}"

       this.bot.sendMessage(telegramChatId,chatMessage);

       this.server.emit('message', {id: socket.id, message});
    }
  
  }
