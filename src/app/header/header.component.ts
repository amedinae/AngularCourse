import { Component, EventEmitter, Output } from '@angular/core'

import { SectionEnum } from '../shared/section.enum';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    statusEnum: typeof SectionEnum = SectionEnum;
    @Output('onSectionChanged') sectionEmitter = new EventEmitter<SectionEnum>();
    sectionSelected: SectionEnum;

    updateSection(sectionClicked: SectionEnum) {
        this.sectionSelected = sectionClicked;
        this.sectionEmitter.emit(this.sectionSelected);
    }

    isSectionActive(section: SectionEnum) {
        return this.sectionSelected === section;
    }
}