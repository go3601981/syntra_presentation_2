import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-slide-ten',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="relative w-full h-full bg-[#050505] flex flex-col items-center justify-center p-8 md:p-16 overflow-hidden">
      
      <!-- Digital Noise Overlay -->
      <div class="absolute inset-0 z-0 opacity-[0.05] pointer-events-none noise-bg"></div>

      <!-- Neural Network Background SVG -->
      <div class="absolute inset-0 z-0 opacity-[0.08] pointer-events-none">
        <svg class="w-full h-full" viewBox="0 0 1000 1000">
          <g class="neural-nodes">
            <circle cx="200" cy="300" r="4" fill="#3EFFC4" class="animate-pulse" />
            <circle cx="500" cy="200" r="4" fill="#3EFFC4" class="animate-pulse" style="animation-delay: 1s" />
            <circle cx="800" cy="300" r="4" fill="#3EFFC4" class="animate-pulse" style="animation-delay: 2s" />
            <circle cx="500" cy="800" r="4" fill="#3EFFC4" class="animate-pulse" style="animation-delay: 3s" />
            <line x1="200" y1="300" x2="500" y2="200" stroke="#3EFFC4" stroke-width="0.8" stroke-dasharray="6 6" />
            <line x1="500" y1="200" x2="800" y2="300" stroke="#3EFFC4" stroke-width="0.8" stroke-dasharray="6 6" />
          </g>
        </svg>
      </div>

      <!-- Background Ambient Glow -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-syntra-action-primary/5 blur-[150px] rounded-full pointer-events-none"></div>

      <!-- Header -->
      <div class="absolute top-24 left-0 right-0 text-center animate-fade-in">
        <h2 class="text-syntra-action-primary font-mono text-xl md:text-3xl font-black tracking-[0.6em] uppercase mb-6">
          {{ t.translate('slide10_flow.title') }}
        </h2>
        <div class="h-1.5 w-48 bg-gradient-to-r from-syntra-action-primary to-transparent mx-auto rounded-full shadow-[0_0_20px_rgba(62,255,196,0.4)]"></div>
      </div>

      <!-- Process Flow Container -->
      <div class="relative w-full max-w-7xl flex items-center justify-between px-12">
        
        <!-- Animated Flow Line -->
        <div class="absolute top-1/2 left-0 w-full h-[3px] bg-white/10 -translate-y-1/2 overflow-hidden">
          <div class="data-stream absolute top-0 left-0 h-full w-64 bg-gradient-to-r from-transparent via-syntra-action-primary to-transparent opacity-80"></div>
        </div>

        <!-- Steps -->
        @for (step of steps; track $index) {
          <div class="relative flex flex-col items-center z-10 group cursor-help animate-slide-up" [style.animation-delay.s]="$index * 0.2">
            <!-- Node -->
            <div 
              class="w-6 h-6 rounded-full border-2 border-white/30 bg-[#050505] transition-all duration-700 ease-out mb-8 group-hover:scale-150 group-hover:bg-syntra-action-primary group-hover:border-transparent group-hover:shadow-[0_0_30px_rgba(62,255,196,0.8)]"
            >
              <div class="absolute inset-0 rounded-full bg-syntra-action-primary opacity-0 blur-md transition-opacity duration-700 group-hover:opacity-40"></div>
            </div>

            <!-- Label -->
            <div 
              class="text-white/40 font-black tracking-widest uppercase text-sm md:text-base transition-all duration-700 group-hover:text-white group-hover:-translate-y-2"
            >
              {{ t.translate(step.key) }}
            </div>

            <!-- Hover Explanation Tooltip -->
            <div class="absolute -bottom-24 left-1/2 -translate-x-1/2 w-64 p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 pointer-events-none z-50 text-center">
              <p class="text-xs text-white/90 leading-relaxed font-light">
                {{ t.translate(step.descKey) }}
              </p>
              <div class="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/5 rotate-45 border-l border-t border-white/10"></div>
            </div>

            <!-- Step Number -->
            <div class="absolute -top-16 text-xs font-mono text-white/20 tracking-[0.4em] font-bold">
              PHASE_0{{ $index + 1 }}
            </div>
          </div>
        }

      </div>

      <!-- Footer Branding -->
      <div class="absolute bottom-12 left-0 right-0 text-center opacity-60 animate-fade-in" style="animation-delay: 1.5s">
        <span class="text-white font-mono text-sm md:text-base uppercase tracking-[0.8em] font-bold">
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

    .data-stream {
      animation: stream 4s linear infinite;
    }

    @keyframes stream {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(600%); }
    }

    .animate-fade-in {
      animation: fadeIn 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      opacity: 0;
    }

    .animate-slide-up {
      animation: slideUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      opacity: 0;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes slideUp {
      from { opacity: 0; transform: translateY(40px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideTenComponent {
  steps = [
    { key: 'slide10_flow.step1', descKey: 'slide10_flow.step1_desc', icon: 'analytics' },
    { key: 'slide10_flow.step2', descKey: 'slide10_flow.step2_desc', icon: 'architecture' },
    { key: 'slide10_flow.step3', descKey: 'slide10_flow.step3_desc', icon: 'auto_fix_high' },
    { key: 'slide10_flow.step4', descKey: 'slide10_flow.step4_desc', icon: 'visibility' }
  ];

  constructor(public t: TranslationService) {}
}
