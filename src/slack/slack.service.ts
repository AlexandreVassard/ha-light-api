import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config/dist';
import { SlackCommandDto } from './dto/slack-command.dto';
import axios from 'axios';

@Injectable()
export class SlackService {
  private homeAssistantUrl = '';
  private homeAssistantToken = '';

  constructor(configService: ConfigService) {
    this.homeAssistantUrl = configService.get('HOME_ASSISTANT_URL');
    this.homeAssistantToken = configService.get('HOME_ASSISTANT_TOKEN');
  }

  break(slackCommandDto: SlackCommandDto) {
    console.log(slackCommandDto);
    const teams = slackCommandDto.text.split(' ');
    if (teams.length === 0 || (teams.length === 1 && teams[0] === '')) {
      return 'Tu dois choisir quelle équipe invoquer ! (dnum, inter)';
    }
    for (const team of teams) {
      if (team === 'dnum') {
        axios.post(
          `${this.homeAssistantUrl}/api/services/automation/trigger`,
          {
            entity_id: 'automation.nouvelle_automatisation',
          },
          { headers: { Authorization: `Bearer ${this.homeAssistantToken}` } },
        );
      }
    }
    console.log(teams);
    return 'ok';
  }
}
