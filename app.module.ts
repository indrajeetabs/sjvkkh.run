import { FullFeatureComponent } from './tools.component';
















import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/add/operator/map';
import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


















import { SharedModule } from './common/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { BrowserModule } from '@angular/platform-browser';





@NgModule({
    imports: [BrowserModule, SharedModule, FormsModule, ReactiveFormsModule,
        RichTextEditorAllModule, CheckBoxModule, DialogModule, NumericTextBoxModule, HttpModule, JsonpModule, BrowserModule],
declarations: [FullFeatureComponent],
bootstrap: [FullFeatureComponent]
})
export class AppModule { }