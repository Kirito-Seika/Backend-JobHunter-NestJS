import { Module } from '@nestjs/common';
import { PermissionsService } from 'src/permissions/permissions.service';
import { PermissionsController } from 'src/permissions/permissions.controller';

@Module({
  controllers: [PermissionsController],
  providers: [PermissionsService],
})
export class PermissionsModule {}
