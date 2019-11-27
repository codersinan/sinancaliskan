import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  constructor(private translate: TranslateService) {
    if (translate.getBrowserLang() === 'tr') {
      translate.setDefaultLang('tr');
    } else {
      translate.setDefaultLang('en');
    }
  }
  ngOnInit() {
  }
  switchLanguage(language: string) {
    this.translate.use(language);
  }
  scroll(id) {
    const el = document.getElementById(id);
    if (el != null) {
      document.getElementsByClassName('nav-item active')[0].classList.remove('active');
      const active = document.getElementById(id + 'Active');
      active.classList.add('active');
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
