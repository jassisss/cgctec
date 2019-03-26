import {Injectable} from '@angular/core';
import {GeneralService} from '../../general.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private generalService: GeneralService) {
    }
}
