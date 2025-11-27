
export interface Artifact {
  id: number;
  title: string;
  subtitle?: string;
  story?: string;
  goal: string;
  constraints: string;
  actions: string;
  results: string;
  proof: string;
  images?: string[];
  workflow?: string;
}

export interface Feedback {
  score: number;
  strengths: string[];
  weaknesses: string[];
  suggestion: string;
}

export interface PacketData {
  candidateName: string;
  artifacts: Artifact[];
}