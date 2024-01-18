export enum DepartmentsEnum {
  ACCOUNTING = '74440057-3132-4ab8-910f-57ca6a403988',
  ADMINISTRATION = 'cbf828ef-40a6-4fc1-9f3f-167cca40b441',
  AI_ML = 'e38f1a13-284a-48ad-89b3-2aa18f77ec89',
  ANALYST_LEAD_GENERATORS = '81405cad-68ef-42a5-ac1f-be5d648d47bb',
  ANDROID = '30b0149c-0dbb-41ec-a635-ed855a8d8a39',
  BA = 'a9415513-531b-4e23-a705-ae7f30d95b3a',
  BD = '6a317e26-574b-45b1-99d1-c856264b890e',
  C_CPP = '97eff777-fd8d-44e6-955e-47419c2dca23',
  CEO = 'e60bb7ec-0910-48b2-a445-d5c527418025',
  CFO_OFFICE = '24e0b8f2-4ccb-425f-a249-0bd39ca17203',
  CORPORATE_SALES_DEPARTMENT = '10f2ab8b-064b-4618-9e8d-9b65d9b8a1ea',
  CTO = '84c08a7e-aa02-4a57-9b9b-f0313e66a1b8',
  DESIGN = '381df2b7-d764-4d0a-be8e-5dd3aa9c949f',
  DEVOPS = '06519495-c853-4ce8-ad59-9792f0c39774',
  DIRECT_AND_CLIENT_SALES = '7967ee90-9b2f-456c-bc22-8c95ab267771',
  DOT_NET = '95738da6-d5ed-46e2-925b-b58bd8f218e9',
  DELIVERY_MANAGEMENT = '8b0ad885-48d2-453a-8e24-ce2c5de4b758',
  DPMO = '8565a764-70d7-44aa-9112-1afa2cdf4076',
  ENGLISH = '971238f6-cd66-4f4a-a7c8-dd7360f460a7',
  ENGINEERING = 'b3b5d5f8-2aa7-4b67-97a1-6154be4e5e83',
  FINANCIAL = 'f201f8e8-bee7-485c-b7bb-b21a162c8f66',
  FLUTTER = 'FLUTTER',
  DRM = 'DRM',
  AUI = 'AUI',
  HR = 'ee8227bb-ebdb-408c-9626-9c63f2372f2d',
  INFRASTRUCTURE_DEPARTMENT = '070ae819-4939-4c68-a937-e1386dd6aefd',
  IOS = 'cc198ecc-b11c-41a4-99ca-9d7fcba7fb0f',
  IT = '0b022ecf-2e76-4296-88a2-8c1174e777ba',
  IT_ACADEMY = 'c365bf48-1b69-4814-a290-0befef6bd3a8',
  JAVA = '1b450854-9415-48fc-80f2-c429ca9e10e2',
  JS = '7ac3f52a-c8fb-41cf-a4c3-501f71921ebb',
  LEGAL = 'c53918ea-810c-42bc-9c65-0050fd23c8ba',
  MARKETING = 'e0befe4a-730b-4803-8ed9-b7faf40f0c72',
  NODE_JS = '799234fb-dda9-4850-8713-0e1a85811984',
  OFFICE_MANAGEMENT = '17490da3-bbdf-420b-9f7b-685c12e70ed6',
  PARTNER_SALES = '3dd9ccff-97fc-4e8e-93b5-30b23515a627',
  PHP = 'bab036b2-a80b-4a20-b9c8-938532da8847',
  PM = '8d0535b2-ab17-44e2-8bd6-4879391bbf5e',
  PRESIDENT = 'f07682d7-dc71-4194-9d94-cdd7c361ea67',
  PYTHON = '4553cb10-76f0-49a0-8078-edfb3ff653b5',
  QA = '14e36d3b-9d7f-4967-9010-4a58201322c9',
  RECRUITMENT = 'f0f3aa04-3fe9-4462-aa17-24497f35ba1d',
  RUBY = '4c4cf28a-2d45-4c0c-8482-6e83ef694a9c',
  SALES = '0bd4cfe3-c995-49d1-bc61-8bbfcfb9fe9d',
  SECURITY = 'accf380f-b048-402d-89c5-bd290cef9091',
  SUBCONTRACT = '0294d5c9-8e21-47c7-9abb-6f74f763a5f0',
}

export type Department = {
  name: string;
  icon: string;
};

export type DepartmentsMap = Record<DepartmentsEnum, Department>;

export const departmentsMap: DepartmentsMap = {
  [DepartmentsEnum.ACCOUNTING]: {
    icon: 'ACCOUNTING.svg',
    name: 'Accounting',
  },
  [DepartmentsEnum.ADMINISTRATION]: {
    icon: 'ADMINISTRATION.svg',
    name: 'Administration',
  },
  [DepartmentsEnum.AI_ML]: {
    icon: 'AI_ML.svg',
    name: 'AI/ML',
  },
  [DepartmentsEnum.ANALYST_LEAD_GENERATORS]: {
    icon: 'SALES.svg',
    name: 'Analyst Lead Generators Unit',
  },
  [DepartmentsEnum.ANDROID]: {
    icon: 'ANDROID.svg',
    name: 'Android/Cross-platforms',
  },
  [DepartmentsEnum.AUI]: {
    icon: 'AUI.svg',
    name: 'Any units',
  },
  [DepartmentsEnum.BA]: {
    icon: 'BA.svg',
    name: 'Business Analysis',
  },
  [DepartmentsEnum.BD]: {
    icon: 'BD.svg',
    name: 'Business Development',
  },
  [DepartmentsEnum.DRM]: {
    icon: 'DRM.svg',
    name: 'DRM',
  },
  [DepartmentsEnum.C_CPP]: {
    icon: 'C_CPP.svg',
    name: 'C/C++',
  },
  [DepartmentsEnum.CEO]: {
    icon: 'ADMINISTRATION.svg',
    name: '',
  },
  [DepartmentsEnum.CFO_OFFICE]: {
    icon: 'ADMINISTRATION.svg',
    name: '',
  },
  [DepartmentsEnum.CORPORATE_SALES_DEPARTMENT]: {
    icon: 'SALES.svg',
    name: '',
  },
  [DepartmentsEnum.CTO]: {
    icon: 'ADMINISTRATION.svg',
    name: '',
  },
  [DepartmentsEnum.DESIGN]: {
    icon: 'DESIGN.svg',
    name: 'Design',
  },
  [DepartmentsEnum.DEVOPS]: {
    icon: 'DEVOPS.svg',
    name: 'DevOps',
  },
  [DepartmentsEnum.DIRECT_AND_CLIENT_SALES]: {
    icon: 'SALES.svg',
    name: '',
  },
  [DepartmentsEnum.DOT_NET]: {
    icon: 'DOT_NET.svg',
    name: '.NET',
  },
  [DepartmentsEnum.DELIVERY_MANAGEMENT]: {
    icon: 'ADMINISTRATION.svg',
    name: '',
  },
  [DepartmentsEnum.DPMO]: {
    icon: 'PM.svg',
    name: '',
  },
  [DepartmentsEnum.ENGLISH]: {
    icon: 'ENGLISH.svg',
    name: 'English',
  },
  [DepartmentsEnum.ENGINEERING]: {
    icon: 'ADMINISTRATION.svg',
    name: '',
  },
  [DepartmentsEnum.FINANCIAL]: {
    icon: 'FINANCIAL.svg',
    name: 'Financial',
  },
  FLUTTER: {
    icon: 'FLUTTER.svg',
    name: 'Flutter',
  },
  [DepartmentsEnum.HR]: {
    icon: 'HR.svg',
    name: 'HR Department',
  },
  [DepartmentsEnum.INFRASTRUCTURE_DEPARTMENT]: {
    icon: 'ADMINISTRATION.svg',
    name: '',
  },
  [DepartmentsEnum.IOS]: {
    icon: 'IOS.svg',
    name: 'iOS',
  },
  [DepartmentsEnum.IT_ACADEMY]: {
    icon: 'ADMINISTRATION.svg',
    name: '',
  },
  [DepartmentsEnum.IT]: {
    icon: 'ADMINISTRATION.svg',
    name: '',
  },
  [DepartmentsEnum.JAVA]: {
    icon: 'JAVA.svg',
    name: 'Java',
  },
  [DepartmentsEnum.JS]: {
    icon: 'JS.svg',
    name: 'JS',
  },
  [DepartmentsEnum.LEGAL]: {
    icon: 'LEGAL.svg',
    name: 'Legal',
  },
  [DepartmentsEnum.MARKETING]: {
    icon: 'MARKETING.svg',
    name: 'Marketing',
  },
  [DepartmentsEnum.NODE_JS]: {
    icon: 'NODE_JS.svg',
    name: 'NodeJS',
  },
  [DepartmentsEnum.OFFICE_MANAGEMENT]: {
    icon: 'OFFICE_MANAGEMENT.svg',
    name: 'Office Management',
  },
  [DepartmentsEnum.PARTNER_SALES]: {
    icon: 'SALES.svg',
    name: '',
  },
  [DepartmentsEnum.PHP]: {
    icon: 'PHP.svg',
    name: 'PHP',
  },
  [DepartmentsEnum.PM]: {
    icon: 'PM.svg',
    name: 'PM',
  },
  [DepartmentsEnum.PRESIDENT]: {
    icon: 'ADMINISTRATION.svg',
    name: '',
  },
  [DepartmentsEnum.PYTHON]: {
    icon: 'PYTHON.svg',
    name: 'Python',
  },
  [DepartmentsEnum.QA]: {
    icon: 'QA.svg',
    name: 'QA/Software Testing',
  },
  [DepartmentsEnum.RECRUITMENT]: {
    icon: 'RECRUITMENT.svg',
    name: 'Recruitment',
  },
  [DepartmentsEnum.RUBY]: {
    icon: 'RUBY.svg',
    name: 'Ruby',
  },
  [DepartmentsEnum.SALES]: {
    icon: 'SALES.svg',
    name: 'Sales',
  },
  [DepartmentsEnum.SECURITY]: {
    icon: 'SECURITY.svg',
    name: 'Security',
  },
  [DepartmentsEnum.SUBCONTRACT]: {
    icon: 'ADMINISTRATION.svg',
    name: '',
  },
};
