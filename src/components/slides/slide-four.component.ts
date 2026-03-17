import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-slide-four',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative w-full h-full bg-[#050505] overflow-hidden flex items-center justify-center">
      
      <!-- Background: Fading Brand Silhouettes -->
      <div class="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div class="silhouette-container">
          <div class="silhouette s-1"></div>
          <div class="silhouette s-2"></div>
          <div class="silhouette s-3"></div>
          <div class="silhouette s-4"></div>
          <div class="silhouette s-5"></div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="relative z-10 text-center px-6 max-w-5xl">
        <div class="glitch-wrapper">
          <h1 
            class="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-tight glitch-text"
            [attr.data-text]="t.translate('slide4.statement')"
          >
            {{ t.translate('slide4.statement') }}
          </h1>
        </div>

        <!-- Pulse Accent -->
        <div class="mt-12 flex justify-center">
          <div class="pulse-accent"></div>
        </div>
      </div>

      <!-- Warning Overlay (Subtle) -->
      <div class="absolute inset-0 pointer-events-none bg-radial-gradient from-transparent via-transparent to-red-900/5 z-20"></div>
    </div>
  `,
  styles: [`
    .glitch-wrapper {
      position: relative;
    }

    .glitch-text {
      position: relative;
      animation: glitch-skew 1s infinite linear alternate-reverse;
    }

    .glitch-text::before,
    .glitch-text::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.8;
    }

    .glitch-text::before {
      animation: glitch-anim 2s infinite linear alternate-reverse;
      color: #ff0000;
      z-index: -1;
      clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
      transform: translateX(-2px);
    }

    .glitch-text::after {
      animation: glitch-anim2 3s infinite linear alternate-reverse;
      color: #00ffff;
      z-index: -2;
      clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
      transform: translateX(2px);
    }

    @keyframes glitch-anim {
      0% { clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%); transform: translate(0); }
      20% { clip-path: polygon(0 15%, 100% 15%, 100% 18%, 0 18%); transform: translate(-5px); }
      40% { clip-path: polygon(0 10%, 100% 10%, 100% 13%, 0 13%); transform: translate(5px); }
      60% { clip-path: polygon(0 40%, 100% 40%, 100% 43%, 0 43%); transform: translate(-5px); }
      80% { clip-path: polygon(0 80%, 100% 80%, 100% 83%, 0 83%); transform: translate(5px); }
      100% { clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%); transform: translate(0); }
    }

    @keyframes glitch-anim2 {
      0% { clip-path: polygon(0 12%, 100% 12%, 100% 15%, 0 15%); transform: translate(0); }
      20% { clip-path: polygon(0 25%, 100% 25%, 100% 28%, 0 28%); transform: translate(5px); }
      40% { clip-path: polygon(0 20%, 100% 20%, 100% 23%, 0 23%); transform: translate(-5px); }
      60% { clip-path: polygon(0 50%, 100% 50%, 100% 53%, 0 53%); transform: translate(5px); }
      80% { clip-path: polygon(0 90%, 100% 90%, 100% 93%, 0 93%); transform: translate(-5px); }
      100% { clip-path: polygon(0 12%, 100% 12%, 100% 15%, 0 15%); transform: translate(0); }
    }

    @keyframes glitch-skew {
      0% { transform: skew(0deg); }
      20% { transform: skew(-1deg); }
      40% { transform: skew(1deg); }
      60% { transform: skew(-1deg); }
      80% { transform: skew(1deg); }
      100% { transform: skew(0deg); }
    }

    .pulse-accent {
      width: 60px;
      height: 4px;
      background: #ff0000;
      border-radius: 2px;
      animation: pulse-color 4s ease-in-out forwards;
    }

    @keyframes pulse-color {
      0% { background: #ff0000; transform: scaleX(0.5); opacity: 0; }
      10% { background: #ff0000; transform: scaleX(1.5); opacity: 1; box-shadow: 0 0 20px #ff0000; }
      30% { background: #ff0000; transform: scaleX(1); opacity: 1; }
      100% { background: #3effc4; transform: scaleX(1); opacity: 0.8; box-shadow: 0 0 10px #3effc4; }
    }

    .silhouette-container {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .silhouette {
      position: absolute;
      background: white;
      mask-size: contain;
      mask-repeat: no-repeat;
      mask-position: center;
      opacity: 0;
      animation: fade-silhouette 10s infinite;
    }

    /* Mock silhouettes using simple shapes since we don't have SVGs */
    .s-1 { width: 200px; height: 200px; top: 10%; left: 10%; border-radius: 50%; animation-delay: 0s; }
    .s-2 { width: 150px; height: 150px; top: 60%; left: 15%; border-radius: 20%; animation-delay: 2s; }
    .s-3 { width: 250px; height: 250px; top: 20%; right: 10%; border-radius: 10%; animation-delay: 4s; }
    .s-4 { width: 180px; height: 180px; bottom: 10%; right: 20%; border-radius: 40%; animation-delay: 6s; }
    .s-5 { width: 120px; height: 120px; top: 45%; left: 45%; border-radius: 5%; animation-delay: 8s; }

    @keyframes fade-silhouette {
      0%, 100% { opacity: 0; transform: scale(0.8); }
      50% { opacity: 0.15; transform: scale(1.1); }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideFourComponent {
  constructor(public t: TranslationService) {}
}
