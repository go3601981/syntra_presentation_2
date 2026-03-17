import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-slide-nine',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative w-full h-full bg-[#050505] flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden">
      
      <!-- Digital Noise Overlay -->
      <div class="absolute inset-0 z-0 opacity-[0.05] pointer-events-none noise-bg"></div>

      <!-- Neural Zoom Background -->
      <div class="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div class="relative w-[1200px] h-[1200px] animate-neural-zoom">
          <svg class="w-full h-full opacity-20" viewBox="0 0 1000 1000">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <!-- Central Core -->
            <circle cx="500" cy="500" r="100" fill="none" stroke="#3EFFC4" stroke-width="2" stroke-dasharray="10 10" class="animate-spin-slow" />
            
            <!-- Radiating Neural Paths -->
            @for (i of [1,2,3,4,5,6,7,8,9,10,11,12]; track i) {
              <line 
                [attr.x1]="500 + 100 * Math.cos(i * Math.PI / 6)" 
                [attr.y1]="500 + 100 * Math.sin(i * Math.PI / 6)"
                [attr.x2]="500 + 600 * Math.cos(i * Math.PI / 6)"
                [attr.y2]="500 + 600 * Math.sin(i * Math.PI / 6)"
                stroke="#3EFFC4" 
                stroke-width="0.5" 
                opacity="0.3"
              />
              <circle 
                [attr.cx]="500 + 400 * Math.cos(i * Math.PI / 6)" 
                [attr.cy]="500 + 400 * Math.sin(i * Math.PI / 6)"
                r="3" 
                fill="#3EFFC4" 
                filter="url(#glow)"
                class="animate-pulse"
                [style.animation-delay.s]="i * 0.2"
              />
            }
          </svg>
        </div>
      </div>

      <!-- Content Container -->
      <div class="relative z-10 w-full max-w-6xl text-center">
        
        <!-- Header Section -->
        <div class="mb-8 animate-fade-in">
          <h2 class="text-syntra-action-primary font-mono text-xs md:text-sm font-bold uppercase tracking-[0.6em] mb-4">
            The Transformation
          </h2>
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[0.85] mb-6">
            FROM CHAOS<br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-syntra-action-primary to-white">
              TO ORDER
            </span>
          </h1>
        </div>

        <!-- Impact Grid (No Icons) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          @for (service of services; track $index) {
            <div 
              class="group relative p-6 bg-white/[0.02] border-l border-white/10 transition-all duration-700 hover:bg-white/[0.05] hover:border-syntra-action-primary animate-slide-up"
              [style.animation-delay.s]="$index * 0.2"
            >
              <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-white/10 to-transparent"></div>
              
              <div class="mb-4">
                <span class="text-syntra-action-primary font-mono text-xl font-black tracking-tighter opacity-40 group-hover:opacity-100 transition-opacity">
                  0{{ $index + 1 }}
                </span>
              </div>
              
              <h3 class="text-xl font-black text-white mb-4 group-hover:text-syntra-action-primary transition-colors">
                {{ t.translate(service.titleKey) }}
              </h3>
              <p class="text-white/40 text-sm font-light leading-relaxed group-hover:text-white/70 transition-colors">
                {{ t.translate(service.descKey) }}
              </p>
            </div>
          }
        </div>

      </div>

      <!-- Footer Branding -->
      <div class="absolute bottom-6 left-0 right-0 text-center opacity-60 animate-fade-in" style="animation-delay: 1.5s">
        <span class="text-white font-mono text-xs md:text-sm uppercase tracking-[0.8em] font-bold">
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

    .animate-neural-zoom {
      animation: neuralZoom 30s ease-out infinite alternate;
    }

    @keyframes neuralZoom {
      from { transform: scale(0.8) rotate(0deg); opacity: 0.5; }
      to { transform: scale(1.2) rotate(10deg); opacity: 1; }
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
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slideUp {
      from { opacity: 0; transform: translateY(40px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .animate-spin-slow {
      animation: spin 30s linear infinite;
      transform-origin: center;
    }

    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideNineComponent {
  Math = Math;
  
  services = [
    { titleKey: 'slide9_services.analyze', descKey: 'slide9_services.analyze_desc' },
    { titleKey: 'slide9_services.fix', descKey: 'slide9_services.fix_desc' },
    { titleKey: 'slide9_services.build', descKey: 'slide9_services.build_desc' },
    { titleKey: 'slide9_services.scale', descKey: 'slide9_services.scale_desc' }
  ];

  constructor(public t: TranslationService) {}
}
