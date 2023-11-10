import { Controller, Post, Body } from '@nestjs/common';
import { SlackService } from './slack.service';

@Controller('slack')
export class SlackController {
  constructor(private readonly slackService: SlackService) {}

  @Post('break')
  create(@Body() body: any) {
    return this.slackService.break(body);
  }
}
