import { Component, inject } from '@angular/core';
import { PresentationService } from '../../services/presentation.service';

@Component({
  selector: 'app-logo',
  standalone: true,
  template: `
    <div class="fixed top-6 right-6 z-50">
      <img 
        [src]="presentation.isCurrentSlideDark() ? 'https://www.syntraadvisory.com/logo_pr_w.png?v=3' : 'https://www.syntraadvisory.com/logo_pr.png?v=3'" 
        alt="Syntra Advisory Logo" 
        class="h-8 md:h-10 w-auto object-contain drop-shadow-sm transition-all duration-500 hover:scale-105"
        referrerpolicy="no-referrer"
      />
    </div>
  `
})
export class LogoComponent {
  presentation = inject(PresentationService);
}
