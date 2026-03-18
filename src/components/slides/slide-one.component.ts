import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-slide-one',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative w-full h-full bg-[#050505] overflow-hidden flex items-center justify-center pb-24 lg:pb-24">
      <!-- Digital Noise Overlay -->
      <div class="absolute inset-0 opacity-[0.05] pointer-events-none noise-bg"></div>
      
      <!-- Aggressive Neural Network Background -->
      <div class="absolute inset-0 opacity-40 pointer-events-none">
        <svg class="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#3EFFC4" />
              <stop offset="100%" stop-color="#00D1FF" stop-opacity="0" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          <!-- Animated Connections -->
          <g class="neural-lines" stroke="#00D1FF" stroke-width="0.8" stroke-opacity="0.4">
            <line x1="100" y1="100" x2="300" y2="400" class="line-anim-1" />
            <line x1="300" y1="400" x2="600" y2="200" class="line-anim-2" />
            <line x1="600" y1="200" x2="800" y2="500" class="line-anim-3" />
            <line x1="800" y1="500" x2="400" y2="800" class="line-anim-1" />
            <line x1="400" y1="800" x2="100" y2="100" class="line-anim-2" />
            <line x1="300" y1="400" x2="400" y2="800" class="line-anim-3" />
            <line x1="100" y1="100" x2="600" y2="200" class="line-anim-1" />
            <line x1="800" y1="500" x2="100" y2="100" class="line-anim-2" />
            <line x1="600" y1="200" x2="400" y2="800" class="line-anim-3" />
          </g>

          <!-- Animated Nodes -->
          <circle cx="100" cy="100" r="5" fill="#00D1FF" filter="url(#glow)" class="node-pulse" />
          <circle cx="300" cy="400" r="8" fill="#3EFFC4" filter="url(#glow)" class="node-pulse-delayed" />
          <circle cx="600" cy="200" r="6" fill="#00D1FF" filter="url(#glow)" class="node-pulse" />
          <circle cx="800" cy="500" r="9" fill="#3EFFC4" filter="url(#glow)" class="node-pulse-delayed" />
          <circle cx="400" cy="800" r="6" fill="#00D1FF" filter="url(#glow)" class="node-pulse" />
          
          <!-- Floating Particles -->
          @for (i of [1,2,3,4,5,6,7,8,9,10]; track i) {
            <circle 
              [attr.cx]="i * 100 % 1000" 
              [attr.cy]="i * 150 % 1000" 
              r="2" 
              fill="#3EFFC4" 
              class="particle-float"
              [style.animation-delay]="i * 0.5 + 's'"
            />
          }
        </svg>
      </div>

      <!-- Content Container -->
      <div class="relative z-10 text-center px-6">
        <!-- Text Content -->
        <div class="space-y-6">
          <h1 class="text-syntra-action-primary text-6xl md:text-9xl font-bold tracking-tighter neural-zoom-text">
            {{ t.translate('slide1.title') }}
          </h1>
          <p class="text-syntra-text-inverse/90 text-2xl md:text-4xl font-light max-w-5xl mx-auto leading-tight glow-text-fade-delayed">
            {{ t.translate('slide1.subtitle') }}
          </p>
        </div>

        <!-- Electric Blue Accent Line -->
        <div class="mt-20 w-48 h-1 bg-gradient-to-r from-transparent via-[#00D1FF] to-transparent mx-auto animate-pulse"></div>
      </div>

      <!-- Scanning Line -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <div class="w-full h-[2px] bg-syntra-action-primary/20 absolute top-0 left-0 scan-line"></div>
      </div>

      <!-- Corner Accents -->
      <div class="absolute top-0 left-0 w-96 h-96 bg-[#00D1FF]/10 blur-[120px]"></div>
      <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#3EFFC4]/10 blur-[150px]"></div>
    </div>
  `,
  styles: [`
    .noise-bg {
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    }

    .neural-zoom-text {
      animation: neuralZoom 1.8s cubic-bezier(0.2, 0, 0.2, 1) forwards;
      filter: blur(30px);
      opacity: 0;
      transform: scale(0.8);
      text-shadow: 0 0 30px rgba(62, 255, 196, 0.5);
    }

    @keyframes neuralZoom {
      0% { filter: blur(30px); opacity: 0; transform: scale(0.8); }
      50% { filter: blur(15px); opacity: 0.5; transform: scale(1.05); }
      100% { filter: blur(0); opacity: 1; transform: scale(1); }
    }

    .glow-text-fade-delayed {
      animation: glowFadeIn 1.5s ease-out 1.2s forwards;
      opacity: 0;
      text-shadow: 0 0 0px rgba(255, 255, 255, 0);
    }

    @keyframes glowFadeIn {
      0% { opacity: 0; transform: translateY(30px); text-shadow: 0 0 0px rgba(255, 255, 255, 0); }
      100% { opacity: 1; transform: translateY(0); text-shadow: 0 0 25px rgba(255, 255, 255, 0.2); }
    }

    .node-pulse {
      animation: pulse 3s infinite ease-in-out;
    }

    .node-pulse-delayed {
      animation: pulse 3s infinite ease-in-out 1.5s;
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 0.6; filter: blur(1px); }
      50% { transform: scale(1.8); opacity: 1; filter: blur(4px); }
    }

    .particle-float {
      animation: float 10s infinite linear;
      opacity: 0.4;
    }

    @keyframes float {
      0% { transform: translate(0, 0); opacity: 0; }
      20% { opacity: 0.6; }
      80% { opacity: 0.6; }
      100% { transform: translate(100px, -100px); opacity: 0; }
    }

    .scan-line {
      animation: scan 6s linear infinite;
    }

    @keyframes scan {
      0% { top: -10%; opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { top: 110%; opacity: 0; }
    }

    .line-anim-1 { animation: dash 8s linear infinite; stroke-dasharray: 1000; stroke-dashoffset: 1000; }
    .line-anim-2 { animation: dash 12s linear infinite; stroke-dasharray: 1000; stroke-dashoffset: 1000; }
    .line-anim-3 { animation: dash 10s linear infinite; stroke-dasharray: 1000; stroke-dashoffset: 1000; }

    @keyframes dash {
      to { stroke-dashoffset: 0; }
    }

    .neural-lines {
      transform-origin: center;
      animation: slowRotate 45s linear infinite;
    }

    @keyframes slowRotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `]
})
export class SlideOneComponent {
  t = inject(TranslationService);
}
