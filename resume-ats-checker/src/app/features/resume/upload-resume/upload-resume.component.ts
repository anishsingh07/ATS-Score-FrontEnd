import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Resume } from '../../../shared/Models/resume.model';


@Component({
  selector: 'app-upload-resume',
  templateUrl: './upload-resume.component.html'
})
export class UploadResumeComponent {
  resumeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.resumeForm = this.fb.group({
      candidateName: [''],
      email: [''],
      skills: [''],
      experience: [''],
      education: [''],
      rawText: ['']
    });
  }

  onSubmit() {
    const resume: Resume = this.resumeForm.value;
    console.log('Resume Submitted:', resume);
    // TODO: Connect to backend API
  }
}
