import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  siteStatus: string = 'loading';

  constructor(db: AngularFirestore, private translate: TranslateService) {
    db.collection('/management').valueChanges().subscribe(data => {
      this.siteStatus = data[0]['SiteStatus'];
    });
    if (navigator.languages[1] == 'tr')
      translate.setDefaultLang('tr');
    else
      translate.setDefaultLang('en');
  }
}
