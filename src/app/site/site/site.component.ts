import {Component, Input, HostListener, ElementRef} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {MatDialog} from '@angular/material';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {GeneralService} from '../../general.service';
import {LoginComponent} from '../auth/login/login.component';
import {RegisterComponent} from '../auth/register/register.component';


@Component({
    selector: 'app-site',
    templateUrl: './site.component.html',
    styleUrls: ['./site.component.scss']
})

export class SiteComponent {

    isOpen = false;

    title = 'ao Site da CGC Tecnologia Ltda';

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches)
        );


    @Input() currentUser = null;

    @HostListener('document:click', ['$event', '$event.target'])
    onClick(event: MouseEvent, targetElement: HTMLElement) {
        if (!targetElement) {
            return;
        }

        const clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.currentUser = targetElement.id;
            this.geralService.setUserLoged(this.currentUser);
        }
    }

    constructor(private breakpointObserver: BreakpointObserver,
                private elementRef: ElementRef,
                private geralService: GeneralService,
                public dialog: MatDialog) {
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(LoginComponent, {
            // width: '400px'
        });

        dialogRef.afterClosed().subscribe(result => {
            // console.log('The dialog was closed');
        });
    }

    openRegister(): void {
        const dialogRef = this.dialog.open(RegisterComponent, {
            // width: '400px'
        });

        dialogRef.afterClosed().subscribe(result => {
            // console.log('The dialog was closed');
        });
    }

}
