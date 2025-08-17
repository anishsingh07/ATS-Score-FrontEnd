export interface Resume {
  id?: number;
  candidateName: string;
  email: string;
  skills: string;       // comma-separated
  experience: string;
  education: string;
  rawText: string;
  uploadedAt?: Date;
}