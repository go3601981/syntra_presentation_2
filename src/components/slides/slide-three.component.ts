import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-slide-three',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative w-full h-full bg-[#050505] overflow-hidden flex flex-col">
      
      <!-- Header Overlay -->
      <div class="absolute top-8 left-0 w-full z-30 text-center pointer-events-none">
        <h2 class="text-3xl md:text-5xl font-bold tracking-tighter text-white flex items-center justify-center gap-6">
          <span class="opacity-30">{{ t.translate('slide3.search') }}</span>
          <span class="text-syntra-action-primary animate-pulse scale-110">→</span>
          <span class="text-syntra-action-primary glow-text drop-shadow-[0_0_20px_rgba(62,255,196,0.6)]">
            {{ t.translate('slide3.ai_answers') }}
          </span>
        </h2>
      </div>

      <!-- Main Content Split -->
      <div class="flex-1 flex relative">
        
        <!-- Left: Chaos (Traditional Search) -->
        <div class="w-1/2 h-full bg-[#0a0a0a] border-r border-white/5 relative overflow-hidden">
          <!-- Scrolling Content -->
          <div class="absolute inset-0 p-8 pt-32 animate-scroll-chaos space-y-6">
            @for (i of [1,2,3,4,5,6]; track i) {
              <div class="bg-white/10 border border-white/20 rounded-xl p-6 space-y-3 opacity-90 hover:opacity-100 transition-opacity shadow-lg">
                <div class="text-[#8ab4f8] text-sm font-mono truncate">https://www.tech-archive.com/search/result-{{i}}</div>
                <div class="text-[#c58af9] text-xl font-medium">
                  {{ t.translate('slide3.search_result_' + (i % 2 === 0 ? '2' : '1') + '_title') }}
                </div>
                <div class="text-white/40 text-sm line-clamp-2">
                  {{ t.translate('slide3.search_result_' + (i % 2 === 0 ? '2' : '1') + '_desc') }}
                </div>
                <div class="flex gap-4 text-[10px] text-white/20 uppercase tracking-widest">
                  <span>2 days ago</span>
                  <span>Sponsored</span>
                </div>
              </div>
            }
            <!-- Duplicate for seamless scroll -->
            @for (i of [1,2,3,4,5,6]; track i + 'dup') {
              <div class="bg-white/10 border border-white/20 rounded-xl p-6 space-y-3 opacity-90 shadow-lg">
                <div class="text-[#8ab4f8] text-sm font-mono truncate">https://www.tech-archive.com/search/result-{{i}}</div>
                <div class="text-[#c58af9] text-xl font-medium">
                  {{ t.translate('slide3.search_result_' + (i % 2 === 0 ? '2' : '1') + '_title') }}
                </div>
                <div class="text-white/40 text-sm line-clamp-2">
                  {{ t.translate('slide3.search_result_' + (i % 2 === 0 ? '2' : '1') + '_desc') }}
                </div>
              </div>
            }
          </div>
          
          <!-- Gradient Overlays for Chaos -->
          <div class="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] pointer-events-none z-10"></div>
          <div class="absolute inset-0 bg-black/20 pointer-events-none"></div>
        </div>

        <!-- Right: Order (AI Answer) -->
        <div class="w-1/2 h-full bg-[#050505] relative flex items-center justify-center p-12 pt-32">
          
          <!-- Background Glow -->
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-syntra-action-primary/10 blur-[120px] rounded-full pointer-events-none"></div>

          <div class="w-full max-w-2xl space-y-8 z-10">
            
            <!-- Question Section -->
            <div class="space-y-2 animate-fade-in">
              <div class="flex items-center gap-3 text-syntra-action-primary/60 font-mono text-xs uppercase tracking-widest">
                <span class="w-8 h-[1px] bg-syntra-action-primary/40"></span>
                User Query
              </div>
              <h3 class="text-lg md:text-xl lg:text-2xl text-white font-medium leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
                "{{ t.translate('slide3.ai_question') }}"
              </h3>
            </div>

            <!-- AI Response Section -->
            <div class="bg-white/[0.03] border border-syntra-action-primary/30 rounded-3xl p-8 md:p-10 relative overflow-hidden backdrop-blur-md shadow-2xl animate-slide-up">
              <!-- Animated Border Top -->
              <div class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-syntra-action-primary to-transparent animate-scan-x"></div>
              
              <div class="flex gap-6">
                <!-- AI Avatar -->
                <div class="w-12 h-12 rounded-2xl bg-syntra-action-primary/20 flex items-center justify-center shrink-0 border border-syntra-action-primary/40 shadow-[0_0_20px_rgba(62,255,196,0.2)]">
                  <div class="w-5 h-5 bg-syntra-action-primary rounded-full animate-pulse"></div>
                </div>

                <div class="space-y-6 flex-1">
                  <div class="text-syntra-action-primary font-mono text-sm uppercase tracking-[0.2em] font-bold">
                    {{ t.translate('slide3.ai_response_title') }}
                  </div>
                  
                  <div class="space-y-4">
                    <p class="text-white/90 text-xl leading-relaxed font-light">
                      {{ t.translate('slide3.ai_response_body') }}
                    </p>
                  </div>

                  <!-- Sources -->
                  <div class="pt-8 flex flex-wrap gap-3">
                    <div class="px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-xs text-white/60 flex items-center gap-2 hover:bg-white/10 transition-all cursor-pointer group">
                      <span class="w-1.5 h-1.5 rounded-full bg-syntra-action-primary group-hover:scale-125 transition-transform"></span>
                      {{ t.translate('slide3.ai_source_1') }}
                    </div>
                    <div class="px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-xs text-white/60 flex items-center gap-2 hover:bg-white/10 transition-all cursor-pointer group">
                      <span class="w-1.5 h-1.5 rounded-full bg-syntra-action-primary group-hover:scale-125 transition-transform"></span>
                      {{ t.translate('slide3.ai_source_2') }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- AI Features / Meta -->
            <div class="flex justify-between items-center px-4 animate-fade-in" style="animation-delay: 1s;">
              <div class="flex gap-8">
                <div class="flex items-center gap-2 text-white/40 text-[10px] uppercase tracking-widest">
                  <div class="w-1 h-1 rounded-full bg-syntra-action-primary"></div>
                  Real-time Analysis
                </div>
                <div class="flex items-center gap-2 text-white/40 text-[10px] uppercase tracking-widest">
                  <div class="w-1 h-1 rounded-full bg-syntra-action-primary"></div>
                  Synthesized Insights
                </div>
              </div>
              <div class="text-syntra-action-primary/40 font-mono text-[10px] uppercase tracking-widest">
                Syntra Neural Engine v2.4
              </div>
            </div>
          </div>
        </div>

        <!-- Center Divider -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full z-20">
          <div class="w-full h-full bg-gradient-to-b from-transparent via-syntra-action-primary/50 to-transparent animate-pulse-vertical"></div>
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-syntra-action-primary blur-md animate-ping"></div>
        </div>

      </div>
    </div>
  `,
  styles: [`
    .glow-text {
      text-shadow: 0 0 30px rgba(62, 255, 196, 0.4);
    }

    @keyframes scroll-chaos {
      0% { transform: translateY(0); }
      100% { transform: translateY(-50%); }
    }

    .animate-scroll-chaos {
      animation: scroll-chaos 40s linear infinite;
    }

    @keyframes scan-x {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }

    .animate-scan-x {
      animation: scan-x 3s ease-in-out infinite;
    }

    @keyframes pulse-vertical {
      0%, 100% { opacity: 0.2; height: 70%; top: 15%; }
      50% { opacity: 1; height: 100%; top: 0; }
    }

    .animate-pulse-vertical {
      animation: pulse-vertical 4s ease-in-out infinite;
    }

    @keyframes slide-up {
      from { opacity: 0; transform: translateY(40px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .animate-slide-up {
      animation: slide-up 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }

    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .animate-fade-in {
      animation: fade-in 1s ease-out forwards;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideThreeComponent {
  constructor(public t: TranslationService) {}
}
