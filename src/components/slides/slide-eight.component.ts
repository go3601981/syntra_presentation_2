import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-slide-eight',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative w-full h-full bg-white flex flex-col items-center justify-center p-8 md:p-16 overflow-hidden">
      
      <!-- Subtle Particle Background -->
      <div class="absolute inset-0 pointer-events-none">
        @for (p of particles; track $index) {
          <div 
            class="particle absolute bg-slate-200 rounded-full"
            [style.left.%]="p.x"
            [style.top.%]="p.y"
            [style.width.px]="p.size"
            [style.height.px]="p.size"
            [style.animation-delay.s]="p.delay"
            [style.animation-duration.s]="p.duration"
          ></div>
        }
      </div>

      <!-- Main Content -->
      <div class="relative z-10 max-w-4xl w-full text-center animate-content-reveal">
        <h1 
          class="text-3xl md:text-5xl lg:text-6xl font-light text-slate-800 tracking-tight leading-relaxed"
          [innerHTML]="t.translate('slide8_definition.text')"
        ></h1>
      </div>

      <!-- Footer Branding -->
      <div class="absolute bottom-12 left-0 right-0 text-center opacity-60">
        <span class="text-slate-500 font-mono text-sm md:text-base uppercase tracking-[0.8em] font-bold">
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

    .particle {
      animation: drift linear infinite;
      opacity: 0.4;
    }

    @keyframes drift {
      0% { transform: translate(0, 0); opacity: 0; }
      20% { opacity: 0.4; }
      80% { opacity: 0.4; }
      100% { transform: translate(100px, -100px); opacity: 0; }
    }

    .animate-content-reveal {
      animation: contentReveal 2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    @keyframes contentReveal {
      from { opacity: 0; letter-spacing: 0.1em; filter: blur(10px); }
      to { opacity: 1; letter-spacing: -0.01em; filter: blur(0); }
    }

    .animate-line-draw {
      animation: lineDraw 1.5s cubic-bezier(0.16, 1, 0.3, 1) 1s forwards;
      width: 0;
    }

    @keyframes lineDraw {
      from { width: 0; }
      to { width: 100%; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideEightComponent {
  particles = Array.from({ length: 25 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 2 + Math.random() * 4,
    delay: Math.random() * 10,
    duration: 15 + Math.random() * 20
  }));

  constructor(public t: TranslationService) {}
}
