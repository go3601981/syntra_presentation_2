import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PresentationService {
  private _currentSlideIndex = signal(0);
  
  readonly totalSlides = 16;
  
  readonly currentSlideIndex = this._currentSlideIndex.asReadonly();
  
  readonly isFirstSlide = computed(() => this._currentSlideIndex() === 0);
  readonly isLastSlide = computed(() => this._currentSlideIndex() === this.totalSlides - 1);
  readonly progress = computed(() => ((this._currentSlideIndex() + 1) / this.totalSlides) * 100);

  // Define which slides have a dark background
  readonly isCurrentSlideDark = computed(() => {
    // Indices of slides with dark backgrounds (0-indexed)
    // Slide 1 (0), Slide 2 (1), Slide 3 (2), Slide 4 (3), Slide 5 (4) are all dark
    // Slide 6 (5) is light
    // Slide 7 (6) is dark (Category Impact)
    // Slide 8 (7) is light
    // Slide 9 (8) is light
    // Slide 10 (9) is dark
    // Slide 11 (10) is dark
    // Slide 12 (11) is dark
    // Slide 13 (12) is light
    // Slide 14 (13) is dark
    // Slide 15 (14) is dark
    // Slide 16 (15) is dark
    const darkSlides = [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 13, 14, 15]; 
    return darkSlides.includes(this._currentSlideIndex());
  });

  nextSlide() {
    if (!this.isLastSlide()) {
      this._currentSlideIndex.update(i => i + 1);
    }
  }

  prevSlide() {
    if (!this.isFirstSlide()) {
      this._currentSlideIndex.update(i => i - 1);
    }
  }

  goToSlide(index: number) {
    if (index >= 0 && index < this.totalSlides) {
      this._currentSlideIndex.set(index);
    }
  }
}