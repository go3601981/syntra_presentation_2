import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-slide-seven',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative w-full h-full bg-black overflow-hidden flex flex-col items-center justify-center">
      
      <!-- Background Particles Layer -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        @for (p of particles; track $index) {
          <div 
            class="particle absolute bg-white rounded-full opacity-20"
            [style.left.%]="p.x"
            [style.top.%]="p.y"
            [style.width.px]="p.size"
            [style.height.px]="p.size"
            [style.animation-delay.s]="p.delay"
            [style.animation-duration.s]="p.duration"
          ></div>
        }
      </div>

      <!-- Main Content with Zoom Effect -->
      <div class="relative z-10 flex flex-col items-center justify-center animate-camera-zoom">
        
        <!-- Glow Effect Container -->
        <div class="relative group">
          <!-- Background Glow -->
          <div class="absolute -inset-8 bg-syntra-action-primary/20 blur-3xl rounded-full animate-pulse-slow"></div>
          
          <div class="flex flex-col items-center gap-4 md:gap-8">
            <!-- AI Visibility -->
            <div class="overflow-hidden">
              <h1 class="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase animate-particle-form">
                {{ t.translate('slide7_category.visibility') }}
              </h1>
            </div>

            <!-- Divider Line -->
            <div class="w-24 h-1 bg-syntra-action-primary rounded-full animate-line-grow shadow-[0_0_15px_rgba(242,125,38,0.8)]"></div>

            <!-- AI Representation -->
            <div class="overflow-hidden">
              <h1 class="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase animate-particle-form-delayed">
                {{ t.translate('slide7_category.representation') }}
              </h1>
            </div>
          </div>
        </div>

        <!-- Subtext / Category Label -->
        <div class="mt-12 md:mt-16 animate-fade-in-up">
          <span class="px-6 py-2 border border-white/20 rounded-full text-white/60 font-mono text-xs md:text-sm uppercase tracking-[0.4em]">
            New Category Defined
          </span>
        </div>
      </div>

      <!-- Corner Accents -->
      <div class="absolute top-12 left-12 w-12 h-12 border-t-2 border-l-2 border-white/10"></div>
      <div class="absolute bottom-12 right-12 w-12 h-12 border-b-2 border-r-2 border-white/10"></div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }

    .particle {
      animation: float linear infinite;
    }

    @keyframes float {
      0% { transform: translateY(0) translateX(0); opacity: 0; }
      10% { opacity: 0.3; }
      90% { opacity: 0.3; }
      100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
    }

    .animate-camera-zoom {
      animation: cameraZoom 20s ease-out forwards;
    }

    @keyframes cameraZoom {
      from { transform: scale(1); }
      to { transform: scale(1.15); }
    }

    .animate-particle-form {
      animation: particleForm 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
      filter: blur(10px);
      opacity: 0;
      transform: translateY(50px) scale(0.8);
    }

    .animate-particle-form-delayed {
      animation: particleForm 1.5s cubic-bezier(0.19, 1, 0.22, 1) 0.4s forwards;
      filter: blur(10px);
      opacity: 0;
      transform: translateY(50px) scale(0.8);
    }

    @keyframes particleForm {
      0% {
        filter: blur(20px);
        opacity: 0;
        transform: translateY(50px) scale(0.8);
        letter-spacing: 1em;
      }
      100% {
        filter: blur(0);
        opacity: 1;
        transform: translateY(0) scale(1);
        letter-spacing: -0.02em;
      }
    }

    .animate-line-grow {
      animation: lineGrow 1s cubic-bezier(0.19, 1, 0.22, 1) 0.8s forwards;
      width: 0;
      opacity: 0;
    }

    @keyframes lineGrow {
      from { width: 0; opacity: 0; }
      to { width: 6rem; opacity: 1; }
    }

    .animate-fade-in-up {
      animation: fadeInUp 1s ease-out 1.2s forwards;
      opacity: 0;
      transform: translateY(20px);
    }

    @keyframes fadeInUp {
      to { opacity: 1; transform: translateY(0); }
    }

    .animate-pulse-slow {
      animation: pulseSlow 4s ease-in-out infinite;
    }

    @keyframes pulseSlow {
      0%, 100% { opacity: 0.2; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(1.2); }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideSevenComponent {
  particles = Array.from({ length: 40 }, () => ({
    x: Math.random() * 100,
    y: 100 + Math.random() * 20,
    size: 1 + Math.random() * 3,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 15
  }));

  constructor(public t: TranslationService) {}
}
