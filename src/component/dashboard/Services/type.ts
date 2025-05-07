export interface Resource {
    workType: string;
    resourceQuantity: string;
    deliveryCreationDate: string;
    unit: string;
    serviceTechnician: string;
  }
  
  export interface ItemUsage {
    description: string;
    partNumber: string;
    unit: string;
    serialNumber: string;
    quantity: string;
  }
  
  export interface CreatingDate {
    serviceType: string;
    serviceDescription: string;
    creationDate: string;
    deliveryDate: string;
  }
  
  export interface ServiceReport {
    resources: Resource[];
    itemUsages: ItemUsage[];
    creatingDate: CreatingDate;
    Service_Report_Number: string;
    updatedAt: string;
    createdAt: string;
    xrgiID: string;
    id: string;
    customerID: string;
  }
  