import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnChanges {

  /**
   * Icon's name defined by iconicons library, by default no value
   */
  @Input() name: string = '';

  /**
   * Icon's style, by default false
   */
  @Input() isOutlined: boolean = false;

  /**
   * Final icon's identifier, includes icon's style
   */
  identifier: string = '';

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    // Detect isOutlined changes and update identifier value
    if (changes['isOutlined']) {
      this.identifier = `${this.name}${this.isOutlined ? '-outline' : ''}`;
    }
  }
}
