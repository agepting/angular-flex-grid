import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppComponent } from "./app.component";
import { DemoMaterialModule } from "./material-module";

@NgModule({
  imports: [BrowserModule, FormsModule, DemoMaterialModule,
  FlexLayoutModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
