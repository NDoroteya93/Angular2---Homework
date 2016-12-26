import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiService } from '../shared/api.service';

import { IMovies } from './movie';

@Component({
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-list.component.scss']
})

export class MovieDetailComponent implements OnInit {
    pageTitle: string = 'Movie Details';
    movie: IMovies;

    constructor(private api: ApiService, private _route: ActivatedRoute, private _router: Router) {

    }

    ngOnInit() {
        let id = this._route.snapshot.params['idIMDB'];
        this.api.getMovieById(id)
            .subscribe(data => this.movie = data);
    }

    getMovieDetails() {

    }

    onBack(): void {
        this._router.navigate(['']);
    }
}
