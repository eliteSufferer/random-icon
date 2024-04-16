import { Component } from '@angular/core';
import {fas, IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-random-icon',
  standalone: true,
  imports: [
    FaIconComponent,
    FontAwesomeModule,
    NgIf
  ],
  templateUrl: './random-icon.component.html',
  styleUrl: './random-icon.component.css'
})
export class RandomIconComponent {
  icons: IconDefinition[] = Object.values(fas);
  currentIcon: IconDefinition | undefined;
  isLoading: boolean = false;

  getRandomIcon() {
    this.isLoading = true;
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * this.icons.length);
      this.currentIcon = this.icons[randomIndex];
      this.isLoading = false;
    }, 3000);
  }
}
