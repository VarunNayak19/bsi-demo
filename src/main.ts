import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';  // Import the animations provider

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations()  // Enable animations here
  ]
}).catch(err => console.error(err));

