import { Routes } from '@angular/router';
import { UploadResumeComponent } from './features/resume/upload-resume/upload-resume.component';
import { ResumeListComponent } from './features/resume/resume-list/resume-list.component';
import { AtsScoreComponent } from './features/ats/ats-score/ats-score.component';

const routes: Routes = [
  { path: 'upload', component: UploadResumeComponent },
  { path: 'resumes', component: ResumeListComponent },
  { path: 'ats-score/:id', component: AtsScoreComponent },
  { path: '', redirectTo: 'upload', pathMatch: 'full' }
];
