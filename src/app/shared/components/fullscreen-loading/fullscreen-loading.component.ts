import { Component, input } from '@angular/core';

@Component({
  selector: 'app-fullscreen-loading',
  imports: [],
  templateUrl: './fullscreen-loading.component.html',
})
export class FullscreenLoadingComponent {
  isLoading = input.required<boolean>();
}
