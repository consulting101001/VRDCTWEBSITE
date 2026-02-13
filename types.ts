
export type UserRole = 'admin' | 'lawyer';

export enum ConsultationStatus {
  NEW = 'new',
  REVIEWING = 'reviewing',
  ASSIGNED = 'assigned',
  CLOSED = 'closed'
}

export interface Consultation {
  id: string;
  created_at: string;
  full_name: string;
  email: string;
  phone: string;
  practice_area: string;
  message: string;
  status: ConsultationStatus;
  assigned_to?: string; // Lawyer ID
  internal_notes?: string;
  ai_summary?: string;
}

export interface Profile {
  id: string;
  email: string;
  role: UserRole;
  full_name: string;
}

export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  image: string;
  features: string[];
}
