import { Component } from '@angular/core';

import { SectionEnum } from './shared/section.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  statusEnum: typeof SectionEnum = SectionEnum;
  sectionSelected: SectionEnum = SectionEnum.Recipes;

  updateSection(section: SectionEnum) {
    this.sectionSelected = section;
  }

  isSectionActive(section: SectionEnum) {
    return this.sectionSelected === section;
  }
}
