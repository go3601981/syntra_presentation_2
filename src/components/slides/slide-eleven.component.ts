import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-slide-eleven',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="relative w-full h-full bg-[#050505] flex flex-col p-6 md:p-12 lg:px-20 lg:py-10 overflow-hidden">
      
      <!-- Digital Noise Overlay -->
      <div class="absolute inset-0 z-0 opacity-[0.03] pointer-events-none noise-bg"></div>

      <!-- Background Blueprint Grid -->
      <div class="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
        <svg class="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" stroke-width="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          <!-- Interconnected Nodes -->
          <g class="blueprint-lines">
            <line x1="200" y1="200" x2="800" y2="800" stroke="#3EFFC4" stroke-width="0.2" stroke-dasharray="10 10" />
            <line x1="800" y1="200" x2="200" y2="800" stroke="#3EFFC4" stroke-width="0.2" stroke-dasharray="10 10" />
            <circle cx="500" cy="500" r="150" fill="none" stroke="#3EFFC4" stroke-width="0.1" />
            <circle cx="500" cy="500" r="250" fill="none" stroke="#3EFFC4" stroke-width="0.1" />
          </g>
        </svg>
      </div>

      <!-- Header Section -->
      <div class="relative z-10 mb-6 md:mb-10 animate-fade-in">
        <div class="flex items-center gap-4 mb-4">
          <div class="h-px w-12 bg-syntra-action-primary/50"></div>
          <h2 class="text-syntra-action-primary font-mono text-xs md:text-sm font-bold uppercase tracking-[0.4em]">
            {{ t.translate('slide11_deliverables.title') }}
          </h2>
        </div>
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[0.9] max-w-5xl">
          THE ASSETS OF<br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-syntra-action-primary to-emerald-400">
            AI AUTHORITY
          </span>
        </h1>
      </div>

      <!-- Deliverables - Dynamic Layout -->
      <div class="relative z-10 flex-1 flex items-center justify-center">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-6xl">
          
          @for (item of deliverables; track $index) {
            <div 
              class="deliverable-item group relative flex gap-6 p-6 bg-white/[0.02] border border-white/10 rounded-[2rem] transition-all duration-700 hover:bg-white/[0.05] hover:border-syntra-action-primary/40 overflow-hidden"
              [style.animation-delay.s]="$index * 0.2"
            >
              <!-- Animated Background Glow -->
              <div class="absolute -top-24 -right-24 w-48 h-48 bg-syntra-action-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <!-- Icon & Number -->
              <div class="flex flex-col items-center shrink-0">
                <div class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-syntra-action-primary/10 group-hover:border-syntra-action-primary/30 transition-all duration-500">
                  <mat-icon class="text-white/40 group-hover:text-syntra-action-primary transition-colors duration-500 !text-2xl !w-auto !h-auto">
                    {{ item.icon }}
                  </mat-icon>
                </div>
                <div class="mt-3 font-mono text-[10px] text-white/10 tracking-widest font-bold group-hover:text-syntra-action-primary/40 transition-colors">
                  0{{ $index + 1 }}
                </div>
              </div>

              <!-- Content -->
              <div class="flex-1 space-y-2">
                <h3 class="text-xl font-bold text-white tracking-tight group-hover:text-syntra-action-primary transition-colors duration-500">
                  {{ t.translate(item.titleKey) }}
                </h3>
                <p class="text-white/40 leading-relaxed font-light text-sm group-hover:text-white/60 transition-colors duration-500">
                  {{ t.translate(item.descKey) }}
                </p>
                
                <!-- Progress Line Accent -->
                <div class="pt-2">
                  <div class="w-full h-px bg-white/5 relative overflow-hidden">
                    <div class="absolute top-0 left-0 h-full w-full bg-syntra-action-primary/40 -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out"></div>
                  </div>
                </div>
              </div>
            </div>
          }

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

    .deliverable-item {
      opacity: 0;
      animation: itemFadeIn 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }

    @keyframes itemFadeIn {
      from { opacity: 0; transform: translateX(-30px); }
      to { opacity: 1; transform: translateX(0); }
    }

    .animate-fade-in {
      animation: fadeIn 1.2s ease-out forwards;
      opacity: 0;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .blueprint-lines {
      animation: blueprintPulse 10s ease-in-out infinite alternate;
    }

    @keyframes blueprintPulse {
      from { opacity: 0.3; transform: scale(1); }
      to { opacity: 0.7; transform: scale(1.05); }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideElevenComponent {
  deliverables = [
    { titleKey: 'slide11_deliverables.reports', descKey: 'slide11_deliverables.reports_desc', icon: 'analytics' },
    { titleKey: 'slide11_deliverables.roadmap', descKey: 'slide11_deliverables.roadmap_desc', icon: 'map' },
    { titleKey: 'slide11_deliverables.strategy', descKey: 'slide11_deliverables.strategy_desc', icon: 'psychology' },
    { titleKey: 'slide11_deliverables.optimization', descKey: 'slide11_deliverables.optimization_desc', icon: 'tune' }
  ];

  constructor(public t: TranslationService) {}
}
