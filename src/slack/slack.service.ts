import { Injectable } from '@nestjs/common';

@Injectable()
export class SlackService {
  break(body: any) {
    console.log(body);
    return 'Tu dois choisir quelle équipe invoquer ! (dnum, inter)';
  }
}
