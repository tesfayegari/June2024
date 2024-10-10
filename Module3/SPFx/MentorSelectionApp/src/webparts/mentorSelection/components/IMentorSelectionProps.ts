import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IMentorSelectionProps {
  description: string;  
  context: WebPartContext;  
}


export interface IMentorSelectionState {
  mentors: any[];
  openDialog: boolean;
  selectedMentor: any;
  currentUserSelectedMentor: boolean;
}

