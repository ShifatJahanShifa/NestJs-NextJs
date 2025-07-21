import { Body, Controller, DefaultValuePipe, Get, HttpCode, HttpException, HttpStatus, NotFoundException, Param, ParseIntPipe, Post, Query, UseGuards, ValidationPipe } from '@nestjs/common';
import { get } from 'http';
import { EpisodesService } from './episodes.service';
import { CreateEpisodeDTO } from './dto/create-episode.dto';
import { ConfigService } from 'src/config/config.service';
import { IsPositivePipe } from 'src/pipes/is-positive.pipe';
import { ApiKeyGuard } from 'src/guards/guards.guard';
// this string is a root path

@UseGuards(ApiKeyGuard)
@Controller('episodes')
export class EpisodesController {

    constructor(private episodeService: EpisodesService, 
        private configService: ConfigService,
    ) {}

    @Get()
    findAll(@Query('sort') sort: 'asc' | 'desc' = 'desc', @Query('limit', new DefaultValuePipe(100), ParseIntPipe, IsPositivePipe) limit: number) 
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
    async findOne(@Param() id: string) 
    {
        const episode = await this.episodeService.findOne(id)
        if(!episode) 
        {
            // throw new HttpException('episode is not found', HttpStatus.NOT_FOUND) 
            throw new NotFoundException('episode is not found')
        }
    }

    // string can be used in post decorator. which indicates the url parameters
    @Post()
    @HttpCode(204)
    create(@Body(ValidationPipe) input: CreateEpisodeDTO) {
        return this.episodeService.create(input)
    }
}
