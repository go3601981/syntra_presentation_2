import { Component, ChangeDetectionStrategy, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-slide-twelve',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="relative w-full h-full bg-[#050505] flex flex-col p-6 md:p-12 lg:px-20 lg:py-10 overflow-hidden">
      
      <!-- Digital Noise Overlay -->
      <div class="absolute inset-0 z-0 opacity-[0.03] pointer-events-none noise-bg"></div>

      <!-- Header Section -->
      <div class="relative z-10 mb-6 animate-fade-in">
        <h2 class="text-syntra-action-primary font-mono text-sm md:text-base font-bold uppercase tracking-[0.4em] mb-2">
          {{ t.translate('slide12_impact.title') }}
        </h2>
        <div class="flex items-center gap-4 text-white/40 font-mono text-xs uppercase tracking-widest">
          <mat-icon class="!w-4 !h-4 !text-sm text-syntra-action-primary">search</mat-icon>
          {{ t.translate('slide12_impact.query') }}
        </div>
      </div>

      <!-- Comparison Container -->
      <div class="relative flex-1 w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-center">
        
        <!-- Before Side -->
        <div class="flex-1 w-full h-full flex flex-col animate-slide-left">
          <div class="mb-4 flex items-center gap-3">
            <div class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
            <span class="text-red-500 font-mono text-xs uppercase tracking-widest font-bold">
              {{ t.translate('slide12_impact.before') }}
            </span>
          </div>
          
          <div class="relative flex-1 bg-white/5 backdrop-blur-sm rounded-[1.5rem] border border-red-500/20 p-6 md:p-8 overflow-hidden group">
            <!-- Messy Background Pattern -->
            <div class="absolute inset-0 opacity-[0.05] pointer-events-none">
              <div class="absolute top-10 left-10 w-32 h-32 border-4 border-red-500 rounded-full rotate-12"></div>
              <div class="absolute bottom-20 right-10 w-48 h-48 border-2 border-red-500 rotate-45"></div>
            </div>

            <div class="relative z-10 font-mono text-base md:text-lg leading-relaxed text-white/30 italic">
              @for (word of messyWords(); track $index) {
                <span 
                  [class.text-red-500]="$index % 7 === 0 || $index % 11 === 0"
                  [class.font-bold]="$index % 7 === 0 || $index % 11 === 0"
                  class="inline-block mr-1"
                >
                  {{ word }}
                </span>
              }
            </div>

            <!-- Error Indicators -->
            <div class="absolute bottom-6 right-6 flex gap-2">
              <mat-icon class="text-red-500/20 !text-3xl !w-auto !h-auto">error_outline</mat-icon>
              <mat-icon class="text-red-500/10 !text-3xl !w-auto !h-auto animate-bounce">warning</mat-icon>
            </div>
          </div>
        </div>

        <!-- Divider / Swipe Indicator -->
        <div class="hidden md:flex flex-col items-center justify-center gap-4 px-2">
          <div class="w-px h-24 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
          <div class="w-10 h-10 rounded-full bg-syntra-action-primary flex items-center justify-center shadow-[0_0_20px_rgba(62,255,196,0.4)]">
            <mat-icon class="text-black font-bold !text-lg !w-auto !h-auto">trending_flat</mat-icon>
          </div>
          <div class="w-px h-24 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        </div>

        <!-- After Side -->
        <div class="flex-1 w-full h-full flex flex-col animate-slide-right">
          <div class="mb-4 flex items-center gap-3">
            <div class="w-2 h-2 rounded-full bg-syntra-action-primary shadow-[0_0_8px_#3EFFC4]"></div>
            <span class="text-syntra-action-primary font-mono text-xs uppercase tracking-widest font-bold">
              {{ t.translate('slide12_impact.after') }}
            </span>
          </div>
          
          <div class="relative flex-1 bg-white/10 backdrop-blur-md rounded-[1.5rem] border border-syntra-action-primary/30 p-6 md:p-8 shadow-2xl shadow-syntra-action-primary/10 overflow-hidden group">
            <!-- Clean Background Pattern -->
            <div class="absolute inset-0 opacity-[0.1] pointer-events-none">
              <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-syntra-action-primary/20 via-transparent to-transparent"></div>
            </div>

            <div class="relative z-10 font-sans text-base md:text-lg leading-relaxed text-white/80">
              @for (word of cleanWords(); track $index) {
                <span 
                  [class.text-syntra-action-primary]="$index % 5 === 0"
                  [class.font-bold]="$index % 5 === 0"
                  class="inline-block mr-1"
                >
                  {{ word }}
                </span>
              }
            </div>

            <!-- Success Indicators -->
            <div class="absolute bottom-6 right-6 flex gap-2">
              <mat-icon class="text-syntra-action-primary/40 !text-3xl !w-auto !h-auto">verified</mat-icon>
              <mat-icon class="text-syntra-action-primary/20 !text-3xl !w-auto !h-auto animate-pulse">check_circle</mat-icon>
            </div>
          </div>
        </div>

      </div>

      <!-- Footer Branding -->
      <div class="absolute bottom-6 left-16 opacity-40 animate-fade-in" style="animation-delay: 1s">
        <span class="text-white font-mono text-xs md:text-sm uppercase tracking-[0.6em] font-bold">
          Syntra Advisory &copy; 2026
        </span>
      </div>

    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }

    .noise-bg {
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    }

    .animate-fade-in {
      animation: fadeIn 1.2s ease-out forwards;
    }

    .animate-slide-left {
      opacity: 0;
      animation: slideLeft 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      animation-delay: 0.2s;
    }

    .animate-slide-right {
      opacity: 0;
      animation: slideRight 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      animation-delay: 0.4s;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes slideLeft {
      from { opacity: 0; transform: translateX(-30px); }
      to { opacity: 1; transform: translateX(0); }
    }

    @keyframes slideRight {
      from { opacity: 0; transform: translateX(30px); }
      to { opacity: 1; transform: translateX(0); }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideTwelveComponent {
  messyWords = computed(() => this.t.translate('slide12_impact.messy_text').split(' '));
  cleanWords = computed(() => this.t.translate('slide12_impact.clean_text').split(' '));

  constructor(public t: TranslationService) {}
}
