import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleDialogComponent } from './dialogs/simple-dialog/simple-dialog.component';
import { AutoLogoutService } from '../services/auto-logout.service';

@NgModule({
  declarations: [SimpleDialogComponent],
  imports: [CommonModule],
  providers: [AutoLogoutService],
})
export class SharedModule {}
