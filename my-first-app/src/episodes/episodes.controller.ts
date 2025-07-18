import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { get } from 'http';
import { EpisodesService } from './episodes.service';
import { CreateEpisodeDTO } from './dto/create-episode.dto';
import { ConfigService } from 'src/config/config.service';

// this string is a root path
@Controller('episodes')
export class EpisodesController {

    constructor(private episodeService: EpisodesService, 
        private configService: ConfigService,
    ) {}

    @Get()
    findAll(@Query('sort') sort: 'asc' | 'desc' = 'desc') 
    {
        console.log(sort)
        return this.episodeService.findAll(sort)
    }

    // episodes/featured
    @Get("featured")
    findFeatured() {
        return this.episodeService.findFeatured()
    }

    @Get(':id')
    findOne(@Param() id: string) 
    {
        return this.episodeService.findOne(id)
    }

    // string can be used in post decorator. which indicates the url parameters
    @Post()
    create(@Body() input: CreateEpisodeDTO) {
        return this.episodeService.create(input)
    }
}
