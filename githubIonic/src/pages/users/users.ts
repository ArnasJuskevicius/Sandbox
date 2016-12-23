import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {GithubUsers} from '../../providers/github-users';
import {User} from '../../models/users';
import {UserDetailsPage} from '../user-details/user-details';

@Component({
    selector: 'page-users',
    templateUrl: 'users.html'
})
export class UsersPage {

    public users: User[];
    private originalUsers: User[];


    constructor(
        public navCtrl:NavController,
        public navParams:NavParams,
        private githubUsers: GithubUsers
    ) {
        githubUsers.load()
            .subscribe(users => {
                this.users = users;
                this.originalUsers = users;
            });
    }

    ionViewDidLoad() {
        console.log('Users page QQ');
    }

    search(searchEvent) {
        let term = searchEvent.target.value
        // We will only perform the search if we have 3 or more characters
        if (term.trim() === '' || term.trim().length < 3) {
            // Load cached users
            this.users = this.originalUsers;
        } else {
            // Get the searched users from github
            this.githubUsers.searchUsers(term).subscribe(users => {
                this.users = users
            });
        }
    }

    goToDetails(login: string) {
        this.navCtrl.push(UserDetailsPage, {login});
    }
    
}
