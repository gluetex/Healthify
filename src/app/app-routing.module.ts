// 
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// Import your components
import { ResetPasswordPage } from '../../src/app/pages/password-reset/password-reset.page';
import { LoginPagePage } from '../../src/app/pages/login-page/login-page.page';

const routes: Routes = [
  { path: 'passwordReset', component: ResetPasswordPage },
  { path: 'login', component: LoginPagePage },
  { path: '', redirectTo: 'login-page', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login-page',
    loadChildren: () => import('./pages/login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: 'password-reset',
    loadChildren: () => import('./pages/password-reset/password-reset.module').then( m => m.PasswordResetPageModule)
  },
  {
    path: 'daily-task',
    loadChildren: () => import('./pages/daily-task/daily-task.module').then( m => m.DailyTaskPageModule)
  },
  {
    path: 'weekly-task',
    loadChildren: () => import('./pages/weekly-task/weekly-task.module').then( m => m.WeeklyTaskPageModule)
  },
  {
    path: 'monthly-task',
    loadChildren: () => import('./pages/monthly-task/monthly-task.module').then( m => m.MonthlyTaskPageModule)
  },
  {
    path: 'journal',
    loadChildren: () => import('./pages/journal/journal.module').then( m => m.JournalPageModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./pages/form/form.module').then( m => m.FormPageModule)
  },
  {
    path: 'meditate',
    loadChildren: () => import('./pages/meditate/meditate.module').then( m => m.MeditatePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
