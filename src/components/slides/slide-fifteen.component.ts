import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-slide-fifteen',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="relative w-full h-full bg-[#050505] flex flex-col items-center justify-center p-4 md:p-8 lg:p-12 pb-24 lg:pb-24 overflow-hidden">
      
      <!-- Digital Noise Overlay -->
      <div class="absolute inset-0 z-0 opacity-[0.03] pointer-events-none noise-bg"></div>

      <!-- Animated Neural Gateway Background -->
      <div class="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div class="relative w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px]">
          <!-- Concentric Rings -->
          <div class="absolute inset-0 border border-syntra-action-primary/10 rounded-full animate-ping-slow"></div>
          <div class="absolute inset-8 border border-syntra-action-primary/20 rounded-full animate-ping-slow" style="animation-delay: 1s"></div>
          <div class="absolute inset-16 border border-syntra-action-primary/30 rounded-full animate-ping-slow" style="animation-delay: 2s"></div>
          
          <!-- Rotating Data Particles -->
          <div class="absolute inset-0 animate-spin-slow">
            @for (i of [1,2,3,4,5,6,7,8]; track i) {
              <div 
                class="absolute w-1 h-1 bg-syntra-action-primary rounded-full blur-[1px]"
                [style.top.%]="50 + 45 * Math.cos(i * Math.PI / 4)"
                [style.left.%]="50 + 45 * Math.sin(i * Math.PI / 4)"
              ></div>
            }
          </div>
        </div>
      </div>

      <!-- Content Container -->
      <div class="relative z-10 w-full max-w-6xl flex flex-col items-center text-center h-full justify-center">
        
        <!-- Header -->
        <div class="mb-4 md:mb-6 lg:mb-8 animate-fade-in shrink-0">
          <h2 class="text-syntra-action-primary font-mono text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] mb-1">
            {{ t.translate('slide15_cta.title') }}
          </h2>
          <h1 class="text-3xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[0.85] mb-2 md:mb-4">
            {{ t.translate('slide15.own_your') }}<br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-syntra-action-primary via-white to-syntra-action-primary bg-[length:200%_auto] animate-gradient-text">
              {{ t.translate('slide15.ai_future') }}
            </span>
          </h1>
          <p class="text-white/40 text-xs md:text-sm lg:text-base font-light max-w-xl mx-auto leading-relaxed">
            {{ t.translate('slide15_cta.subtitle') }}
          </p>
        </div>

        <!-- Impactful CTA Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 w-full max-w-4xl mb-4 md:mb-6 lg:mb-8 flex-1 min-h-0 items-center">
          
          @for (cta of ctas; track $index) {
            <button 
              class="cta-button group relative p-4 md:p-6 lg:p-8 bg-white/[0.03] border border-white/10 rounded-[1.5rem] md:rounded-[2rem] transition-all duration-700 hover:bg-white/[0.07] hover:border-syntra-action-primary/40 hover:-translate-y-1 overflow-hidden h-full flex flex-col justify-center"
              [style.animation-delay.s]="$index * 0.2"
            >
              <!-- Hover Glow -->
              <div class="absolute inset-0 bg-gradient-to-br from-syntra-action-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div class="relative z-10 flex flex-col items-center">
                <div class="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-3 md:mb-4 lg:mb-6 group-hover:scale-110 group-hover:bg-syntra-action-primary/10 group-hover:border-syntra-action-primary/40 transition-all duration-500 relative">
                  
                  @if ($index === 0) {
                    <!-- Target (Lucide) -->
                    <svg class="w-[55%] h-[55%] text-syntra-action-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <circle cx="12" cy="12" r="6"/>
                      <circle cx="12" cy="12" r="2"/>
                    </svg>
                  } @else {
                    <!-- Infinity (Lucide) -->
                    <svg class="w-[55%] h-[55%] text-syntra-action-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z"/>
                    </svg>
                  }
                </div>
                
                <h3 class="text-lg md:text-xl lg:text-2xl font-bold text-white mb-1 group-hover:text-syntra-action-primary transition-colors">
                  {{ t.translate(cta.labelKey) }}
                </h3>
                <p class="text-white/30 text-[10px] md:text-xs lg:text-sm font-light leading-relaxed group-hover:text-white/60 transition-colors max-w-[280px]">
                  {{ t.translate(cta.descKey) }}
                </p>

                <div class="mt-3 md:mt-4 lg:mt-6 flex items-center gap-2 text-syntra-action-primary font-mono text-[8px] md:text-[10px] uppercase tracking-[0.3em] font-bold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <span>{{ t.translate('slide15.initialize') }}</span>
                  <mat-icon class="!text-xs !w-auto !h-auto">arrow_forward</mat-icon>
                </div>
              </div>
            </button>
          }

        </div>

        <!-- Secondary Action -->
        <div class="animate-fade-in shrink-0" style="animation-delay: 1.2s">
          <button class="group relative px-6 py-2 md:px-8 md:py-3 bg-syntra-action-primary rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(62,255,196,0.4)]">
            <div class="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
            <span class="relative z-10 text-black font-black uppercase tracking-[0.2em] text-[8px] md:text-[10px] lg:text-xs">
              {{ t.translate('slide15_cta.cta') }}
            </span>
          </button>
        </div>

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

    .cta-button {
      opacity: 0;
      animation: ctaFadeUp 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }

    @keyframes ctaFadeUp {
      from { opacity: 0; transform: translateY(50px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .animate-fade-in {
      animation: fadeIn 1.5s ease-out forwards;
      opacity: 0;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }

    .animate-ping-slow {
      animation: ping 4s cubic-bezier(0, 0, 0.2, 1) infinite;
    }

    .animate-spin-slow {
      animation: spin 20s linear infinite;
    }

    @keyframes gradient-text {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideFifteenComponent {
  Math = Math;
  
  ctas = [
    { 
      labelKey: 'slide15_cta.brief', 
      descKey: 'slide15_cta.brief_desc'
    },
    { 
      labelKey: 'slide15_cta.ongoing', 
      descKey: 'slide15_cta.ongoing_desc'
    }
  ];

  constructor(public t: TranslationService) {}
}
