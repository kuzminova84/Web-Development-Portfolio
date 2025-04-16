import { Injectable } from '@angular/core';
import { Kuzminoo } from './kuzminoo';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    getData() {
        return new Kuzminoo();
    }
}
