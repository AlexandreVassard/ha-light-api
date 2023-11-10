import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeAssistantModule } from './home-assistant/home-assistant.module';
import { SlackModule } from './slack/slack.module';

@Module({
  imports: [HomeAssistantModule, SlackModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
