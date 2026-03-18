import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-slide-two',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full h-full bg-black flex items-center justify-center p-10 pb-24 lg:pb-24 overflow-hidden relative">
      <!-- Subtle Glitch Overlay -->
      <div class="absolute inset-0 pointer-events-none glitch-overlay opacity-[0.02]"></div>
      
      <div class="max-w-5xl">
        <h2 class="text-4xl md:text-6xl font-mono text-white leading-tight tracking-tight flex flex-wrap justify-center gap-x-4 gap-y-2">
          @for (word of words(); track $index) {
            <span 
              class="word-reveal"
              [style.animation-delay]="$index * 0.3 + 's'"
            >
              {{ word }}
            </span>
          }
          <span class="cursor-blink inline-block w-[3px] h-[1em] bg-syntra-action-primary ml-1 align-middle"></span>
        </h2>
      </div>

      <!-- Subtle Flicker Background -->
      <div class="absolute inset-0 bg-syntra-action-primary/5 pointer-events-none animate-flicker"></div>
    </div>
  `,
  styles: [`
    .word-reveal {
      opacity: 0;
      filter: blur(10px);
      transform: translateY(10px);
      animation: reveal 0.5s cubic-bezier(0.2, 0, 0.2, 1) forwards;
    }

    @keyframes reveal {
      to {
        opacity: 1;
        filter: blur(0);
        transform: translateY(0);
      }
    }

    .cursor-blink {
      animation: blink 1s step-end infinite;
      /* Delay cursor appearance until after text starts revealing */
      opacity: 0;
      animation-delay: 0.5s;
    }

    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }

    .animate-flicker {
      animation: flicker 8s infinite;
    }

    @keyframes flicker {
      0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% { opacity: 0.05; }
      20%, 21.999%, 63%, 63.999%, 65%, 69.999% { opacity: 0.15; }
    }

    .glitch-overlay {
      background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
      background-size: 100% 2px, 3px 100%;
    }
  `]
})
export class SlideTwoComponent {
  t = inject(TranslationService);

  words = computed(() => {
    const text = this.t.translate('slide2.hook');
    return text.split(' ');
  });
}
