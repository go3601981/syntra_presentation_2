import { Component, ChangeDetectionStrategy, signal, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-slide-five',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative w-full h-full bg-[#050505] overflow-hidden flex flex-col items-center p-8 md:p-16">
      
      <!-- Background Data Flicker -->
      <div class="absolute inset-0 z-0 opacity-5 pointer-events-none overflow-hidden">
        <div class="flicker-grid">
          @for (i of [1,2,3,4,5,6,7,8,9,10]; track i) {
            <div class="flicker-row text-[10px] font-mono text-syntra-action-primary whitespace-nowrap">
              {{ randomHex() }} {{ randomHex() }} {{ randomHex() }} {{ randomHex() }} {{ randomHex() }}
            </div>
          }
        </div>
      </div>

      <!-- Impact Label (Now at the top) -->
      <div class="relative z-20 mb-12 text-center animate-fade-in" style="animation-delay: 4s;">
        <p class="text-red-500/80 font-mono text-sm uppercase tracking-[0.3em] font-bold mb-2">The Visibility Gap</p>
        <h2 class="text-2xl md:text-3xl lg:text-4xl text-white font-light">
          Inaccurate data leads to <span class="text-red-500 font-medium underline decoration-red-500/40 underline-offset-8">brand erosion</span>.
        </h2>
      </div>

      <!-- Chat UI Container (Now below) -->
      <div class="relative z-10 w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[500px] md:h-[600px]">
        
        <!-- Chat Header -->
        <div class="px-6 py-4 border-bottom border-white/5 bg-white/[0.02] flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div class="w-3 h-3 rounded-full bg-green-500/50"></div>
            <span class="ml-4 text-white/40 font-mono text-xs uppercase tracking-widest">Neural Interface v4.0.2</span>
          </div>
          <div class="flex items-center gap-2 text-red-500/60 font-mono text-[10px] uppercase tracking-tighter animate-pulse">
            <span class="w-2 h-2 rounded-full bg-red-500"></span>
            {{ t.translate('slide5.warning_label') }}
          </div>
        </div>

        <!-- Chat Body -->
        <div #chatBody class="flex-1 p-8 space-y-8 overflow-y-auto custom-scrollbar scroll-smooth">
          
          <!-- User Message -->
          <div class="flex justify-end animate-fade-in">
            <div class="max-w-[80%] bg-white/5 border border-white/10 rounded-2xl p-5 text-white/80 text-lg">
              {{ t.translate('slide5.user_query') }}
            </div>
          </div>

          <!-- AI Response -->
          <div class="flex gap-6 animate-fade-in" style="animation-delay: 1s;">
            <div class="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center shrink-0 border border-red-500/40 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
              <div class="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
            </div>

            <div class="flex-1 space-y-4">
              <div class="text-red-500 font-mono text-xs uppercase tracking-widest font-bold">
                AI Agent Response
              </div>
              
              <div class="text-white/90 text-xl leading-relaxed font-light min-h-[100px]">
                <span>{{ displayedText() }}</span>
                <span class="inline-block w-2 h-6 bg-red-500 ml-1 animate-cursor" *ngIf="isTyping()"></span>
                
                <!-- Red Highlight for Error -->
                <span class="text-red-500 font-medium bg-red-500/10 px-1 rounded" *ngIf="showError()">
                  {{ t.translate('slide5.ai_response_error') }}
                </span>

                <!-- Hallucination text -->
                <span class="opacity-40 italic" *ngIf="showHallucination()">
                  {{ t.translate('slide5.ai_response_hallucination') }}
                </span>
              </div>

              <!-- Data Flicker Overlay -->
              <div class="pt-4 flex gap-4" *ngIf="!isTyping()">
                <div class="px-3 py-1 bg-red-500/10 border border-red-500/20 rounded text-[10px] text-red-400 font-mono uppercase tracking-tighter">
                  Source: 404_NOT_FOUND
                </div>
                <div class="px-3 py-1 bg-red-500/10 border border-red-500/20 rounded text-[10px] text-red-400 font-mono uppercase tracking-tighter">
                  Confidence: 12%
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Chat Footer -->
        <div class="p-6 border-t border-white/5 bg-white/[0.01]">
          <div class="w-full h-12 bg-white/5 rounded-xl border border-white/10 flex items-center px-4 text-white/20 text-sm italic">
            Waiting for re-indexing...
          </div>
        </div>
      </div>

    </div>
  `,
  styles: [`
    .flicker-grid {
      display: flex;
      flex-direction: column;
      gap: 4px;
      animation: flicker-scroll 20s linear infinite;
    }

    @keyframes flicker-scroll {
      0% { transform: translateY(0); }
      100% { transform: translateY(-50%); }
    }

    .flicker-row {
      animation: flicker-opacity 0.5s infinite alternate;
    }

    @keyframes flicker-opacity {
      0% { opacity: 0.2; }
      100% { opacity: 0.8; }
    }

    .animate-cursor {
      animation: blink 1s step-end infinite;
    }

    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }

    .animate-fade-in {
      animation: fadeIn 1s ease-out forwards;
      opacity: 0;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .custom-scrollbar::-webkit-scrollbar {
      width: 4px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: transparent;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideFiveComponent implements OnInit, OnDestroy {
  @ViewChild('chatBody') chatBody!: ElementRef<HTMLElement>;
  
  displayedText = signal('');
  isTyping = signal(false);
  showError = signal(false);
  showHallucination = signal(false);
  
  private typingInterval: any;

  constructor(public t: TranslationService) {}

  ngOnInit() {
    this.startSimulation();
  }

  ngOnDestroy() {
    if (this.typingInterval) clearInterval(this.typingInterval);
  }

  startSimulation() {
    const fullText = this.t.translate('slide5.ai_response_start');
    let index = 0;
    
    setTimeout(() => {
      this.isTyping.set(true);
      this.typingInterval = setInterval(() => {
        if (index < fullText.length) {
          this.displayedText.update(t => t + fullText[index]);
          index++;
          this.scrollToBottom();
        } else {
          clearInterval(this.typingInterval);
          this.isTyping.set(false);
          this.triggerError();
        }
      }, 50);
    }, 2000);
  }

  triggerError() {
    setTimeout(() => {
      this.showError.set(true);
      this.scrollToBottom();
      setTimeout(() => {
        this.showHallucination.set(true);
        this.scrollToBottom();
      }, 1500);
    }, 800);
  }

  private scrollToBottom() {
    if (this.chatBody) {
      const el = this.chatBody.nativeElement;
      el.scrollTop = el.scrollHeight;
    }
  }

  randomHex() {
    return Array.from({ length: 20 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
  }
}
