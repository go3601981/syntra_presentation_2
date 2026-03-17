import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-slide-six',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="relative w-full h-full bg-[#050505] flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden">
      
      <!-- Digital Noise Overlay -->
      <div class="absolute inset-0 z-0 opacity-[0.08] pointer-events-none noise-bg"></div>

      <!-- Background Glitch Elements -->
      <div class="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div class="absolute top-1/4 left-0 w-full h-px bg-red-500/50 animate-glitch-scan"></div>
        <div class="absolute top-3/4 left-0 w-full h-px bg-red-500/50 animate-glitch-scan" style="animation-delay: 1.5s"></div>
        <div class="absolute left-1/4 top-0 w-px h-full bg-red-500/20"></div>
        <div class="absolute right-1/4 top-0 w-px h-full bg-red-500/20"></div>
      </div>

      <!-- Neural Network Background SVG -->
      <div class="absolute inset-0 z-0 opacity-[0.15] pointer-events-none">
        <svg class="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#ff4444" />
              <stop offset="100%" stop-color="#000" />
            </radialGradient>
          </defs>
          <g class="neural-nodes">
            <circle cx="150" cy="150" r="5" fill="url(#nodeGradient)" class="animate-pulse" />
            <circle cx="350" cy="250" r="8" fill="url(#nodeGradient)" class="animate-pulse" style="animation-delay: 0.5s" />
            <circle cx="550" cy="180" r="4" fill="url(#nodeGradient)" class="animate-pulse" style="animation-delay: 1s" />
            <circle cx="850" cy="350" r="6" fill="url(#nodeGradient)" class="animate-pulse" style="animation-delay: 1.5s" />
            <circle cx="250" cy="550" r="5" fill="url(#nodeGradient)" class="animate-pulse" style="animation-delay: 2s" />
            <circle cx="650" cy="750" r="9" fill="url(#nodeGradient)" class="animate-pulse" style="animation-delay: 2.5s" />
            
            <line x1="150" y1="150" x2="350" y2="250" stroke="#ff4444" stroke-width="1.5" stroke-dasharray="5 5" opacity="0.4" />
            <line x1="350" y2="250" x2="550" y2="180" stroke="#ff4444" stroke-width="1.5" stroke-dasharray="5 5" opacity="0.4" />
            <line x1="550" y1="180" x2="850" y2="350" stroke="#ff4444" stroke-width="1.5" stroke-dasharray="5 5" opacity="0.4" />
          </g>
        </svg>
      </div>

      <!-- Header Section -->
      <div class="max-w-4xl w-full mb-4 md:mb-6 relative z-10 animate-slide-down">
        <div class="flex items-center gap-4 mb-2 md:mb-4">
          <div class="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
          <h2 class="text-red-500 font-mono text-xs md:text-sm uppercase tracking-[0.5em] font-bold">
            {{ t.translate('slide6_problem.title') }}
          </h2>
        </div>
        <h1 class="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[0.85] mb-4">
          {{ t.translate('slide6_problem.main_title') }}
        </h1>
        <div class="h-1.5 w-32 bg-gradient-to-r from-red-600 to-transparent rounded-full shadow-[0_0_20px_rgba(255,68,68,0.4)]"></div>
      </div>

      <!-- Problem Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl w-full relative z-10">
        
        @for (prob of problems; track $index) {
          <div 
            class="group relative bg-white/[0.02] border border-white/10 rounded-[2rem] p-6 transition-all duration-700 hover:bg-white/[0.05] hover:border-red-500/40 hover:-translate-y-2 animate-slide-up overflow-hidden"
            [style.animation-delay.s]="$index * 0.2"
          >
            <!-- Warning Glow -->
            <div class="absolute -top-24 -right-24 w-48 h-48 bg-red-500/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div class="relative z-10">
              <div class="w-24 h-24 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-500/10 group-hover:scale-110 transition-all duration-500 border border-white/10 relative">
                @if ($index === 0) {
                  <!-- Visibility Gap (EyeOff) -->
                  <svg class="w-[55%] h-[55%] text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/>
                    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/>
                    <path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/>
                    <line x1="2" y1="2" x2="22" y2="22"/>
                  </svg>
                } @else if ($index === 1) {
                  <!-- Inconsistent Presence (Activity) -->
                  <svg class="w-[55%] h-[55%] text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                } @else {
                  <!-- Slow Response (Clock) -->
                  <svg class="w-[55%] h-[55%] text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                }
              </div>
              <h3 class="text-2xl font-black text-white mb-3 tracking-tight group-hover:text-red-500 transition-colors">
                {{ t.translate(prob.titleKey) }}
              </h3>
              <p class="text-white/50 leading-relaxed text-base font-light group-hover:text-white/80 transition-colors">
                {{ t.translate(prob.descKey) }}
              </p>
            </div>

            <!-- Glitch Accent -->
            <div class="absolute bottom-0 left-0 w-full h-1 bg-red-500/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700"></div>
          </div>
        }

      </div>

      <!-- Footer Branding -->
      <div class="absolute bottom-6 left-0 right-0 text-center opacity-60 animate-fade-in" style="animation-delay: 1.2s">
        <span class="text-white font-mono text-xs md:text-sm uppercase tracking-[0.8em] font-bold">
          Syntra Advisory &copy; 2026
        </span>
      </div>

    </div>
  `,
  styles: [`
    .noise-bg {
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    }

    .animate-glitch-scan {
      animation: glitchScan 3s linear infinite;
    }

    @keyframes glitchScan {
      0% { transform: translateY(-100vh); }
      100% { transform: translateY(100vh); }
    }

    .animate-fade-in {
      animation: fadeIn 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      opacity: 0;
    }

    .animate-slide-down {
      animation: slideDown 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      opacity: 0;
    }

    .animate-slide-up {
      animation: slideUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      opacity: 0;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-40px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes slideUp {
      from { opacity: 0; transform: translateY(60px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideSixComponent {
  problems = [
    { 
      titleKey: 'slide6_problem.prob1_title', 
      descKey: 'slide6_problem.prob1_desc'
    },
    { 
      titleKey: 'slide6_problem.prob2_title', 
      descKey: 'slide6_problem.prob2_desc'
    },
    { 
      titleKey: 'slide6_problem.prob3_title', 
      descKey: 'slide6_problem.prob3_desc'
    }
  ];

  constructor(public t: TranslationService) {}
}
