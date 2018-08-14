import { Component } from '@angular/core';
import { inflateRawSync } from 'zlib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  LoadedFeature = 'recipe';

  featureSelect(feature: string) {
    this.LoadedFeature = feature;
  }
}
