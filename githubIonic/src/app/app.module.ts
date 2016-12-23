import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {UsersPage} from '../pages/users/users';
import {ReposPage} from '../pages/repos/repos';
import {OrganisationsPage} from '../pages/organisations/organisations';
import {GithubUsers} from '../providers/github-users';
import {UserDetailsPage} from '../pages/user-details/user-details';

const declarations = [
    MyApp,
    UsersPage,
    ReposPage,
    OrganisationsPage,
    UserDetailsPage
];

@NgModule({
    declarations: [...declarations],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [...declarations],
    providers: [GithubUsers, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {
}
