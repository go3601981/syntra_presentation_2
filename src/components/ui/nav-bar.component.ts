import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationService } from '../../services/presentation.service';
import { TranslationService, Language } from '../../services/translation.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed bottom-0 left-0 right-0 z-50 bg-syntra-bg-page/90 backdrop-blur-md border-t border-syntra-border-default px-6 py-4">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        
        <!-- Progress Info -->
        <div class="flex flex-col gap-1 w-1/3">
          <span class="text-xs font-semibold text-syntra-text-muted tracking-caps uppercase">
            {{ t.translate('nav.slide') }} {{ presentation.currentSlideIndex() + 1 }} {{ t.translate('nav.of') }} {{ presentation.totalSlides }}
          </span>
          <div class="h-[4px] w-full bg-syntra-bg-subtle rounded-full overflow-hidden">
            <div 
              class="h-full bg-syntra-action-primary transition-all duration-500 ease-easing"
              [style.width.%]="presentation.progress()"
            ></div>
          </div>
        </div>

        <!-- Controls -->
        <div class="flex items-center gap-3">
          <button 
            (click)="presentation.prevSlide()"
            [disabled]="presentation.isFirstSlide()"
            class="p-2 rounded-full hover:bg-syntra-bg-subtle disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-fast text-syntra-text-primary"
            [attr.aria-label]="t.translate('nav.prev')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          
          <button 
            (click)="presentation.nextSlide()"
            [disabled]="presentation.isLastSlide()"
            class="p-2 rounded-full hover:bg-syntra-bg-subtle disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-fast text-syntra-text-primary"
            [attr.aria-label]="t.translate('nav.next')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>

        <!-- Language Selector -->
        <div class="flex items-center gap-2">
          @for (lang of languages; track lang.code) {
            <button 
              (click)="t.setLanguage(lang.code)"
              class="px-3 py-1 text-xs font-bold rounded-md transition-all border"
              [class.bg-syntra-action-primary]="t.currentLang() === lang.code"
              [class.text-syntra-action-primaryText]="t.currentLang() === lang.code"
              [class.border-syntra-action-primary]="t.currentLang() === lang.code"
              [class.bg-syntra-bg-page]="t.currentLang() !== lang.code"
              [class.text-syntra-text-secondary]="t.currentLang() !== lang.code"
              [class.border-syntra-border-default]="t.currentLang() !== lang.code"
              [class.hover:border-syntra-action-primary]="t.currentLang() !== lang.code"
            >
              {{ lang.label }}
            </button>
          }
        </div>

      </div>
    </div>
  `
})
export class NavBarComponent {
  presentation = inject(PresentationService);
  t = inject(TranslationService);

  readonly languages: { code: Language, label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' },
    { code: 'pt', label: 'PT-BR' },
    { code: 'es', label: 'ES' }
  ];
}
