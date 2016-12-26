import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiService } from '../shared/api.service';

import { IMovies } from './movie';

@Component({
    templateUrl: './movie-top.component.html',
    styleUrls: ['./movie-list.component.scss']
})

export class MovieTopComponent implements OnInit{ 
    pageTitle: string = 'Top 10';
    movies: IMovies[];

    constructor(private api: ApiService) {

    }

    ngOnInit() {
        this.api.getMoviesTop10()
            .subscribe(data => this.movies = data);
    }
}