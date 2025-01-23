import { Controller } from '@nestjs/common';
import { DatabasesService } from 'src/databases/databases.service';

@Controller('databases')
export class DatabasesController {
  constructor(private readonly databasesService: DatabasesService) {}
}
