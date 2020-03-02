import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { UnlessDirective } from "./directives/unless.directive";
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, UnlessDirective, HighlightDirective],
  bootstrap: [AppComponent]
})
export class AppModule {}
