import { Component } from '@angular/core';
import { TestModule } from './test/test.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TestModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
