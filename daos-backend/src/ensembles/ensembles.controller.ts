import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { AddEnsembleDTO } from './dtos/add-ensemble.dto'; 
import { EditEnsembleDTO } from './dtos/edit-ensemble.dto'; 
import { PostEnsembleDTO } from './dtos/post-ensemble.dto';
import { EnsemblesService } from './ensembles.service';
import { Ensemble } from './schemas/ensemble.schema';

@Controller('ensembles')
export class EnsemblesController {
    // Dependency injection = imports data for use
    // Dependency injection - ensembles service
    constructor(private readonly ensemblesService: EnsemblesService) {}

    // URL = /ensembles
    @Get()
    findAllByStatus(): Promise<Ensemble[]> {
        return this.ensemblesService.findAllByStatus().then((result) => {
            if(!(result.length === 0)) {
                return result;
            } else {
                throw new HttpException('Ensembles not found', HttpStatus.NOT_FOUND);
            }
        }).catch(() => {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        });
    }

    @Post()
    create(@Body() createEnsemble: AddEnsembleDTO): Promise<Ensemble> {
        return this.ensemblesService.create(createEnsemble);
    }

    // URL = /ensembles/:id
    @Get(':id')
    findSpecific(@Param('id') id): Promise<Ensemble> {
        return this.ensemblesService.findSpecific(id).then((result) => {
            if(result) {
                return result;
            } else {
                throw new HttpException('Ensemble not found', HttpStatus.NOT_FOUND);
            }
        }).catch(() => {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        });
    }

    @Put(':id')
    edit(@Param('id') id, @Body() editEnsemble: EditEnsembleDTO): Promise<Ensemble> {
        return this.ensemblesService.update(id, editEnsemble).then((result) => {
            if(result) {
                return result;
            } else {
                throw new HttpException('Ensemble not found', HttpStatus.NOT_FOUND);
            }
        }).catch(() => {
            throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
        })
    }

    @Delete(':id')
    remove(@Param('id') id): Promise<Ensemble> {
        return this.ensemblesService.delete(id).then((result) => {
            if(result) {
                return result;
            } else {
                throw new HttpException('Ensemble not found', HttpStatus.NOT_FOUND);
            }
        }).catch(() => {
            throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
        })
    }

    // URL = /ensembles/profiles/:id
    @Get("/profiles/:id")
    findAllByAdmin(@Param('id') id): Promise<Ensemble[]> {
        return this.ensemblesService.findAllByAdmin(id).then((result) => {
            if(!(result.length === 0)) {
                return result;
            } else {
                throw new HttpException('Ensembles not found', HttpStatus.NOT_FOUND);
            }
        }).catch(() => {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        });
    }

    // URL = /ensembles/:id/post
    @Post(':id/post')
    addPost(@Param('id') id, @Body() addPost: PostEnsembleDTO): Promise<Ensemble> {
        return this.ensemblesService.addPost(id, addPost).then((result) => {
            if(result) {
                return result;
            } else {
                throw new HttpException('Ensemble not found', HttpStatus.NOT_FOUND);
            }
        }).catch(() => {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        })
    }

    // URL = /ensembles/:id/post/:postId
    @Put(':id/post/:postId')
    editPost(@Param() params, @Body() editPost: PostEnsembleDTO): Promise<Ensemble> {
        return this.ensemblesService.editPost(params.id, params.postId, editPost).then((result) => {
            if(result) {
                return result;
            } else {
                throw new HttpException('Ensemble or Post not found', HttpStatus.NOT_FOUND);
            }
        }).catch(() => {
            throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
        })
    }

    @Delete(':id/post/:postId')
    removePost(@Param() params): Promise<Ensemble> {
        return this.ensemblesService.removePost(params.id, params.postId).then((result) => {
            if(result) {
                return result;
            } else {
                throw new HttpException('Ensemble or Post not found', HttpStatus.NOT_FOUND);
            }
        }).catch(() => {
            throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
        })
    }
}