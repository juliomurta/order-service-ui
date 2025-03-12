import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CoreModule } from '../home/core.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CoreModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'murta-soft-ui';
}
