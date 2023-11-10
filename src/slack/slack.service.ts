import { Injectable } from '@nestjs/common';
import { SlackCommandDto } from './dto/slack-command.dto';

@Injectable()
export class SlackService {
  break(slackCommandDto: SlackCommandDto) {
    console.log(slackCommandDto);
    const teams = slackCommandDto.text.split(' ');
    if (teams.length === 0) {
      return 'Tu dois choisir quelle équipe invoquer ! (dnum, inter)';
    }
    console.log(teams);
    return 'ok';
  }
}
