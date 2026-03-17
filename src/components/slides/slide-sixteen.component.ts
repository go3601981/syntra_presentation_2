import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-slide-sixteen',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative w-full h-full bg-black flex items-center justify-center p-8 md:p-16 overflow-hidden">
      
      <!-- Cinematic Glow Pulse -->
      <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div class="w-[40vw] h-[40vw] bg-syntra-action-primary/10 rounded-full blur-[120px] animate-glow-pulse"></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 text-center max-w-5xl">
        <h1 class="text-3xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight animate-cinematic-fade">
          {{ t.translate('slide16_closing.phrase') }}
        </h1>
        
        <!-- Final Branding -->
        <div class="mt-24 animate-fade-in-slow">
          <div class="flex flex-col items-center gap-6">
            <div class="w-12 h-px bg-syntra-action-primary/40"></div>
            <span class="text-slate-500 font-mono text-[10px] md:text-xs uppercase tracking-[0.8em]">
              Syntra Advisory
            </span>
          </div>
        </div>
      </div>

      <!-- Subtle Vignette -->
      <div class="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]"></div>

    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }

    .animate-cinematic-fade {
      opacity: 0;
      animation: cinematicFade 3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      animation-delay: 0.5s;
    }

    @keyframes cinematicFade {
      0% { opacity: 0; transform: scale(0.98) translateY(10px); filter: blur(10px); }
      100% { opacity: 1; transform: scale(1) translateY(0); filter: blur(0); }
    }

    .animate-glow-pulse {
      animation: glowPulse 8s ease-in-out infinite;
    }

    @keyframes glowPulse {
      0%, 100% { transform: scale(1); opacity: 0.1; }
      50% { transform: scale(1.2); opacity: 0.2; }
    }

    .animate-fade-in-slow {
      opacity: 0;
      animation: fadeInSlow 2s ease-out forwards;
      animation-delay: 2.5s;
    }

    @keyframes fadeInSlow {
      from { opacity: 0; }
      to { opacity: 0.4; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideSixteenComponent {
  constructor(public t: TranslationService) {}
}
