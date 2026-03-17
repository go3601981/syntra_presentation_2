import { Component, inject, HostListener, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationService } from './services/presentation.service';
import { NavBarComponent } from './components/ui/nav-bar.component';
import { LogoComponent } from './components/ui/logo.component';
import { SlideOneComponent } from './components/slides/slide-one.component';
import { SlideTwoComponent } from './components/slides/slide-two.component';
import { SlideThreeComponent } from './components/slides/slide-three.component';
import { SlideFourComponent } from './components/slides/slide-four.component';
import { SlideFiveComponent } from './components/slides/slide-five.component';
import { SlideSixComponent } from './components/slides/slide-six.component';
import { SlideSevenComponent } from './components/slides/slide-seven.component';
import { SlideEightComponent } from './components/slides/slide-eight.component';
import { SlideNineComponent } from './components/slides/slide-nine.component';
import { SlideTenComponent } from './components/slides/slide-ten.component';
import { SlideElevenComponent } from './components/slides/slide-eleven.component';
import { SlideTwelveComponent } from './components/slides/slide-twelve.component';
import { SlideThirteenComponent } from './components/slides/slide-thirteen.component';
import { SlideFourteenComponent } from './components/slides/slide-fourteen.component';
import { SlideFifteenComponent } from './components/slides/slide-fifteen.component';
import { SlideSixteenComponent } from './components/slides/slide-sixteen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavBarComponent,
    LogoComponent,
    SlideOneComponent,
    SlideTwoComponent,
    SlideThreeComponent,
    SlideFourteenComponent,
    SlideFourComponent,
    SlideFiveComponent,
    SlideSixComponent,
    SlideSevenComponent,
    SlideEightComponent,
    SlideNineComponent,
    SlideTenComponent,
    SlideElevenComponent,
    SlideTwelveComponent,
    SlideThirteenComponent,
    SlideFifteenComponent,
    SlideSixteenComponent
  ],
  template: `
    <app-logo />

    <main 
      #mainContainer 
      tabindex="0" 
      class="w-full h-screen bg-syntra-bg-page overflow-y-auto relative pb-24 lg:pb-20 outline-none"
    >
      
      @switch (presentation.currentSlideIndex()) {
        @case (0) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-one />
          </div>
        }
        @case (1) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-two />
          </div>
        }
        @case (2) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-three />
          </div>
        }
        @case (3) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-four />
          </div>
        }
        @case (4) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-five />
          </div>
        }
        @case (5) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-six />
          </div>
        }
        @case (6) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-seven />
          </div>
        }
        @case (7) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-eight />
          </div>
        }
        @case (8) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-nine />
          </div>
        }
        @case (9) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-ten />
          </div>
        }
        @case (10) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-eleven />
          </div>
        }
        @case (11) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-twelve />
          </div>
        }
        @case (12) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-thirteen />
          </div>
        }
        @case (13) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-fourteen />
          </div>
        }
        @case (14) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-fifteen />
          </div>
        }
        @case (15) {
          <div class="w-full h-full animate-fade-in">
            <app-slide-sixteen />
          </div>
        }
        @default {
          <div class="w-full h-full flex items-center justify-center bg-syntra-bg-page">
            <div class="text-center">
              <h1 class="text-4xl font-bold text-syntra-text-primary mb-4">Slide {{ presentation.currentSlideIndex() + 1 }}</h1>
              <p class="text-syntra-text-secondary italic">Coming soon: New content for Syntra Advisory</p>
            </div>
          </div>
        }
      }

    </main>

    <app-nav-bar />
  `,
  styles: [`
    .animate-fade-in {
      animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class AppComponent implements AfterViewInit {
  presentation = inject(PresentationService);
  @ViewChild('mainContainer') mainContainer!: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    // Focus the main container to capture keyboard events immediately
    this.mainContainer.nativeElement.focus();
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowRight' || event.key === 'Space') {
      this.presentation.nextSlide();
    } else if (event.key === 'ArrowLeft') {
      this.presentation.prevSlide();
    }
  }
}