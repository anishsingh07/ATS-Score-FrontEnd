export interface ATSScore {
  id?: number;
  resumeId: number;
  score: number;
  matchedKeywords: string;
  missingKeywords: string;
  calculatedAt?: Date;
}