import { Controller, Get, Render } from '@nestjs/common';

@Controller('chat')
export class ChatController {
    @Get()

    @Render('chat, index')

    getIndex(){}
}
