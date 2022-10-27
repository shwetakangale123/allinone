import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectivsComponent } from './directivs/directivs.component';
import { BindingComponent } from './binding/binding.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShwetaComponent } from './shweta/shweta.component';
import { PipeComponent } from './pipe/pipe.component';
// import { CustComponent } from './cust/cust.component';
import { CustPipe } from './cust.pipe';
import { CustDirectiveDirective } from './cust-directive.directive';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { LivecoadingComponent } from './livecoading/livecoading.component';
import { ChildComponent } from './child/child.component';
import { FormsComponent } from './forms/forms.component';
import { ServicedataComponent } from './servicedata/servicedata.component';
import { HttpClientModule} from '@angular/common/http';
import { RxjsOperatorComponent } from './rxjs-operator/rxjs-operator.component';
import { Form1Component } from './form1/form1.component';
import { PromiseComponent } from './Promise/promise/promise.component';


@NgModule({
  declarations: [
    AppComponent,
    DirectivsComponent,
    BindingComponent,
    TemplateFormComponent,
    ShwetaComponent,
    PipeComponent,
    // CustComponent,
    CustPipe,
    CustDirectiveDirective,
    LifecycleComponent,
    LivecoadingComponent,
    ChildComponent,
    FormsComponent,
    ServicedataComponent,
    RxjsOperatorComponent,
    Form1Component,
    PromiseComponent,
  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



