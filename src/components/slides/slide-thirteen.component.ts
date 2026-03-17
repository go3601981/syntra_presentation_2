import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-slide-thirteen',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="relative w-full h-full bg-white flex flex-col p-6 md:p-12 lg:px-20 lg:py-10 overflow-hidden">
      
      <!-- Header Section -->
      <div class="relative z-10 mb-6 md:mb-10 animate-fade-in">
        <h2 class="text-syntra-action-primary font-mono text-xs md:text-sm font-bold uppercase tracking-[0.4em] mb-4">
          {{ t.translate('slide13_model.title') }}
        </h2>
        <h1 class="text-3xl md:text-5xl lg:text-6xl font-light text-slate-900 tracking-tight leading-tight max-w-4xl">
          {{ t.translate('slide13_model.phrase') }}
        </h1>
      </div>

      <!-- Pricing Blocks -->
      <div class="relative z-10 flex flex-col md:flex-row gap-4 w-full max-w-6xl mx-auto mt-auto mb-8">
        
        <!-- One-Time Block -->
        <div class="flex-1 pricing-block group p-6 bg-slate-50 rounded-[2rem] border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)]">
          <div class="flex items-center justify-between mb-6">
            <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-slate-100 group-hover:border-syntra-action-primary/30 transition-colors duration-500">
              <mat-icon class="text-slate-400 group-hover:text-syntra-action-primary transition-colors duration-500 !text-2xl !w-auto !h-auto">
                assignment_turned_in
              </mat-icon>
            </div>
            <span class="px-3 py-1 bg-slate-200/50 text-slate-500 font-mono text-[9px] uppercase tracking-widest rounded-full">
              {{ t.translate('slide13_model.setup_label') }}
            </span>
          </div>

          <h3 class="text-2xl font-light text-slate-900 mb-4 tracking-tight">
            {{ t.translate('slide13_model.onetime') }}
          </h3>
          
          <p class="text-slate-500 leading-relaxed font-light text-base">
            {{ t.translate('slide13_model.onetime_desc') }}
          </p>

          <div class="mt-6 w-full h-px bg-slate-200/60"></div>
          
          <div class="mt-4 flex items-center gap-3 text-syntra-action-primary">
            <mat-icon class="!text-lg !w-auto !h-auto">check_circle</mat-icon>
            <span class="font-mono text-[10px] uppercase tracking-widest font-bold">Foundation</span>
          </div>
        </div>

        <!-- Plus Sign (Desktop) -->
        <div class="hidden md:flex items-center justify-center">
          <div class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
            <mat-icon class="text-slate-300 !text-xl !w-auto !h-auto">add</mat-icon>
          </div>
        </div>

        <!-- Monthly Retainer Block -->
        <div class="flex-1 pricing-block group p-6 bg-slate-900 rounded-[2rem] shadow-2xl shadow-slate-900/10 transition-all duration-500 hover:scale-[1.02]">
          <div class="flex items-center justify-between mb-6">
            <div class="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700 group-hover:border-syntra-action-primary/50 transition-colors duration-500">
              <mat-icon class="text-slate-500 group-hover:text-syntra-action-primary transition-colors duration-500 !text-2xl !w-auto !h-auto">
                update
              </mat-icon>
            </div>
            <span class="px-3 py-1 bg-syntra-action-primary/10 text-syntra-action-primary font-mono text-[9px] uppercase tracking-widest rounded-full">
              {{ t.translate('slide13_model.ongoing_label') }}
            </span>
          </div>

          <h3 class="text-2xl font-light text-white mb-4 tracking-tight">
            {{ t.translate('slide13_model.retainer') }}
          </h3>
          
          <p class="text-slate-400 leading-relaxed font-light text-base">
            {{ t.translate('slide13_model.retainer_desc') }}
          </p>

          <div class="mt-6 w-full h-px bg-slate-800"></div>
          
          <div class="mt-4 flex items-center gap-3 text-syntra-action-primary">
            <mat-icon class="!text-lg !w-auto !h-auto">trending_up</mat-icon>
            <span class="font-mono text-[10px] uppercase tracking-widest font-bold">Continuity</span>
          </div>
        </div>

      </div>

      <!-- Footer Branding -->
      <div class="absolute bottom-6 left-16 opacity-40 animate-fade-in" style="animation-delay: 1s">
        <span class="text-slate-400 font-mono text-[10px] uppercase tracking-[0.6em]">
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

    .pricing-block {
      opacity: 0;
      animation: blockFadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    .pricing-block:nth-child(1) { animation-delay: 0.2s; }
    .pricing-block:nth-child(3) { animation-delay: 0.4s; }

    @keyframes blockFadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .animate-fade-in {
      animation: fadeIn 1.2s ease-out forwards;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideThirteenComponent {
  constructor(public t: TranslationService) {}
}
