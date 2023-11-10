import { Controller, Post, Body } from '@nestjs/common';
import { SlackService } from './slack.service';
import { SlackCommandDto } from './dto/slack-command.dto';

@Controller('slack')
export class SlackController {
  constructor(private readonly slackService: SlackService) {}

  @Post('break')
  create(@Body() slackCommandDto: SlackCommandDto) {
    return this.slackService.break(slackCommandDto);
  }
}
