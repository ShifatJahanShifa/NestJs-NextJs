import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';

@Module({
  providers: [ConfigService],  // amr nijer controller e use hbe
  exports: [ConfigService]  // need to check
})
export class ConfigModule {}
