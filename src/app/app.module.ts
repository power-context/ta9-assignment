import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateEditComponent } from './components/create-edit/create-edit.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxColorsModule } from 'ngx-colors';
import { ManagementToolsComponent } from './components/management-tools/management-tools.component';
import { FindToolComponent } from './components/find-tool/find-tool.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DataCubesComponent } from './components/data-cubes/data-cubes.component';
import { CubeItemComponent } from './components/data-cubes/cube-item/cube-item.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { CrudService } from './services/CRUD.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateEditComponent,
    ManagementToolsComponent,
    FindToolComponent,
    DataTableComponent,
    DataCubesComponent,
    CubeItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ColorPickerModule,
    NgxColorsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    // AngularFireStorageModule,
    // AngularFireDatabaseModule,
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
