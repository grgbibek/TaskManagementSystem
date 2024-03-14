export interface Tasks {
    id?: number;
    title: string;
    description: string;
    dueDate: Date;
    priority: PriorityEnum;
  }
  
  export enum PriorityEnum {
    Low = 0,
    Medium = 1,
    High = 2
  }
  