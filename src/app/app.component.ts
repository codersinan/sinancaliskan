import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  siteStatus = 'loading';

  constructor(db: AngularFirestore, private translate: TranslateService) {
    db.collection('management').doc('site').valueChanges().subscribe((data: any) => {
      if (data.status) {
        this.siteStatus = 'online';
      } else {
        this.siteStatus = 'offline';
      }
    });
    if (navigator.languages[1] === 'tr') {
      translate.setDefaultLang('tr');
    } else {
      translate.setDefaultLang('en');
    }
  }
}
