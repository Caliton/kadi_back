import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Response,
  Put,
  Query,
  StreamableFile,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { createReadStream } from 'fs';
import { join } from 'path';
import { readXlsx } from 'src/shared/utils/read-xlsx';
import { Collaborator } from './collaborator.entity';
import { CollaboratorService } from './collaborator.service';
import { BulkCollaboratorsDto } from './dto/collaboratorBulkDto';
import { FilterCollaboratorDto } from './dto/filter-collaborator.dto';

@Controller('collaborator')
export class CollaboratorController {
  constructor(private readonly collaboratorService: CollaboratorService) {}

  @ApiTags('collaborator')
  @Get()
  async index(@Query() query: FilterCollaboratorDto): Promise<any> {
    return await this.collaboratorService.findAll(query);
  }

  @ApiTags('collaborator')
  @Get('export')
  getFile(@Response({ passthrough: true }) res): StreamableFile {
    const file = createReadStream(
      join(process.cwd(), 'collaborators_model.xlsx'),
    );
    res.set({
      'Content-Type':
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'Content-Disposition':
        'attachment; filename="Modelo de Colaboradores.xlsx"',
    });
    return new StreamableFile(file);
  }

  @ApiTags('collaborator')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        comment: { type: 'string' },
        outletId: { type: 'integer' },
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    try {
      const response =
        await this.collaboratorService.createManyCollaboratorsXlsx(file.buffer);

      return {
        message: `${response.length} ${
          response.length === 1
            ? 'Colaborador cadastrado'
            : 'Colaboradores cadastrados'
        }`,
      };
    } catch (e) {
      console.log(e);

      return { message: 'Deu merda' };
    }
  }

  @ApiTags('collaborator')
  @Get('all')
  async getHello(@Query() query: FilterCollaboratorDto): Promise<any> {
    return await this.collaboratorService.findAllCollaborators(query);
  }

  // // @Role(UserRole.ADMIN, UserRole.SUPERVISOR)
  // @ApiTags('collaborator')
  // @Post('import')
  // async createMany(@Body() collaborators: BulkCollaboratorsDto) {
  //   console.log(collaborators);

  //   const response = await this.collaboratorService.createManyCollaborators(
  //     collaborators.data,
  //   );

  //   if (!response.length)
  //     return {
  //       message: 'Os colaboradores desta lista já encontram-se cadastrados!',
  //     };

  //   return {
  //     message: `${response.length} ${
  //       response.length === 1
  //         ? 'Colaborador cadastrado'
  //         : 'Colaboradores cadastrados'
  //     }`,
  //   };
  // }

  @ApiTags('collaborator')
  @Post()
  async create(@Body() body: Collaborator) {
    return await this.collaboratorService.create(body);
  }

  @ApiTags('collaborator')
  @Put(':id')
  async update(@Param('id') id: string, @Body() body: Collaborator) {
    return await this.collaboratorService.update(id, body);
  }

  @ApiTags('collaborator')
  @Get(':id/vacationrequests')
  async getRequests(@Param('id') id: string) {
    return await this.collaboratorService.findRequests(id);
  }

  @ApiTags('collaborator')
  @Delete(':id')
  async destroy(@Param('id') id: string) {
    await this.collaboratorService.deleteById(id);
  }
}
