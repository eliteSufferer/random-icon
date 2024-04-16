import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RandomIconComponent} from "./components/random-icon/random-icon.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RandomIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'font-awesome-test';
}
