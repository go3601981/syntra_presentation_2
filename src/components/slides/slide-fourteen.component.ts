import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-slide-fourteen',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="relative w-full h-full bg-slate-950 flex flex-col p-6 md:p-12 lg:px-20 lg:py-10 pb-24 lg:pb-24 overflow-hidden">
      
      <!-- Particle Background -->
      <div class="absolute inset-0 z-0 pointer-events-none">
        <div class="particles-container absolute inset-0">
          @for (p of particles; track $index) {
            <div 
              class="particle absolute rounded-full bg-syntra-action-primary/20"
              [style.width.px]="p.size"
              [style.height.px]="p.size"
              [style.left.%]="p.x"
              [style.top.%]="p.y"
              [style.animation-duration.s]="p.duration"
              [style.animation-delay.s]="p.delay"
            ></div>
          }
        </div>
      </div>

      <!-- Neon Glow Accents -->
      <div class="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-syntra-action-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div class="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none"></div>

      <!-- Content Section -->
      <div class="relative z-10 flex flex-col h-full justify-center">
        
        <div class="mb-6 animate-fade-in">
          <h2 class="text-syntra-action-primary font-mono text-xs md:text-sm font-bold uppercase tracking-[0.4em] mb-2">
            {{ t.translate('slide14_why.title') }}
          </h2>
        </div>

        <div class="flex flex-col gap-4 md:gap-6 w-full">
          
          <!-- Point 1: Left -->
          <div class="point-item group animate-slide-up self-start w-full max-w-xl" style="animation-delay: 0.2s">
            <div class="flex items-start gap-6">
              <div class="mt-1 w-20 h-20 md:w-24 md:h-24 rounded-2xl border border-white/10 flex items-center justify-center group-hover:bg-syntra-action-primary/10 transition-all duration-500 shrink-0 relative">
                <!-- Rocket (Lucide) -->
                <svg class="w-[55%] h-[55%] text-syntra-action-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                  <path d="M9 12H4s.5-1 1-4c1.5 0 3 .5 3 .5L9 12z"/>
                  <path d="M12 15v5s1 .5 4 1c0-1.5-.5-3-.5-3L12 15z"/>
                  <circle cx="15" cy="9" r="1"/>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tighter mb-1 group-hover:text-syntra-action-primary transition-colors duration-500">
                  {{ t.translate('slide14_why.point1') }}
                </h3>
                <p class="text-slate-400 text-sm md:text-base font-light leading-relaxed">
                  {{ t.translate('slide14_why.point1_desc') }}
                </p>
              </div>
            </div>
          </div>

          <!-- Point 2: Center -->
          <div class="point-item group animate-slide-up self-center w-full max-w-xl md:translate-x-12" style="animation-delay: 0.4s">
            <div class="flex items-start gap-6">
              <div class="mt-1 w-20 h-20 md:w-24 md:h-24 rounded-2xl border border-white/10 flex items-center justify-center group-hover:bg-emerald-500/10 transition-all duration-500 shrink-0 relative">
                <!-- UserCheck (Lucide) -->
                <svg class="w-[55%] h-[55%] text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <polyline points="16 11 18 13 22 9"/>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tighter mb-1 group-hover:text-emerald-400 transition-colors duration-500">
                  {{ t.translate('slide14_why.point2') }}
                </h3>
                <p class="text-slate-400 text-sm md:text-base font-light leading-relaxed">
                  {{ t.translate('slide14_why.point2_desc') }}
                </p>
              </div>
            </div>
          </div>

          <!-- Point 3: Right -->
          <div class="point-item group animate-slide-up self-end w-full max-w-xl md:translate-x-24" style="animation-delay: 0.6s">
            <div class="flex items-start gap-6">
              <div class="mt-1 w-20 h-20 md:w-24 md:h-24 rounded-2xl border border-white/10 flex items-center justify-center group-hover:bg-syntra-action-primary/10 transition-all duration-500 shrink-0 relative">
                <!-- RefreshCw (Lucide) -->
                <svg class="w-[55%] h-[55%] text-syntra-action-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
                  <path d="M21 3v5h-5"/>
                  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
                  <path d="M3 21v-5h5"/>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tighter mb-1 group-hover:text-syntra-action-primary transition-colors duration-500">
                  {{ t.translate('slide14_why.point3') }}
                </h3>
                <p class="text-slate-400 text-sm md:text-base font-light leading-relaxed">
                  {{ t.translate('slide14_why.point3_desc') }}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

      <!-- Footer Branding -->
      <div class="absolute bottom-6 left-16 opacity-60 animate-fade-in" style="animation-delay: 1.2s">
        <span class="text-slate-400 font-mono text-xs uppercase tracking-[0.6em]">
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
      animation: float infinite ease-in-out;
    }

    @keyframes float {
      0%, 100% { transform: translate(0, 0); opacity: 0.2; }
      50% { transform: translate(20px, -40px); opacity: 0.5; }
    }

    .animate-fade-in {
      animation: fadeIn 1.2s ease-out forwards;
    }

    .animate-slide-up {
      opacity: 0;
      animation: slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes slideUp {
      from { opacity: 0; transform: translateY(40px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideFourteenComponent implements OnInit {
  particles: any[] = [];
  
  points = [
    { 
      titleKey: 'slide14_why.point1_title', 
      descKey: 'slide14_why.point1_desc'
    },
    { 
      titleKey: 'slide14_why.point2_title', 
      descKey: 'slide14_why.point2_desc'
    },
    { 
      titleKey: 'slide14_why.point3_title', 
      descKey: 'slide14_why.point3_desc'
    }
  ];

  constructor(public t: TranslationService) {}

  ngOnInit() {
    this.generateParticles();
  }

  generateParticles() {
    for (let i = 0; i < 30; i++) {
      this.particles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5
      });
    }
  }
}
