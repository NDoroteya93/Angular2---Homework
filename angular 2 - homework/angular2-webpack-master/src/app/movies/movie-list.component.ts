import { Component } from '@angular/core';
import { IMovies } from './movie';
import { ApiService } from '../shared';


@Component({
    selector: `my-list`,
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.scss'],
    providers: [ApiService]
})

export class MovieListComponent {
    pageTitle: string = 'Movie List';
    errorMessage: string;
    movies: IMovies[];
    private startPage: any = 1;
    private endPage: any = 5;

    constructor(private api: ApiService) {

    }

    ngOnInit() {
        this.api.getMovies(this.startPage, this.endPage)
            .subscribe(movies => this.movies = movies,
            error => this.errorMessage = <any>error);
             console.log(this.movies);
    }

    onScrollDown() {
        this.startPage = this.endPage + 1;
        this.endPage = this.endPage + 6;
        this.api.getMovies(this.startPage, this.endPage)
            .subscribe(data => { this.movies = this.movies.concat(data) });
        console.log('scroll');
    }

}