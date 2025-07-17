import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { get } from 'http';

// this string is a root path
@Controller('episodes')
export class EpisodesController {

    @Get()
    findAll(@Query('sort') sort: 'asc' | 'desc' = 'desc') 
    {
        console.log(sort)
        return "all controllers"
    }

    // episodes/featured
    @Get("featured")
    findFeatured() {
        return "featured episodes"
    }

    @Get(':id')
    findOne(@Param() id: string) 
    {
        return 'one episode'
    }

    // string can be used in post decorator. which indicates the url parameters
    @Post()
    create(@Body() input: any) {
        return "new episode"
    }
}
