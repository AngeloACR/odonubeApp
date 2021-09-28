CREATE TABLE Voucher (
    VOUCHER_ID bigint AUTO_INCREMENT  PRIMARY KEY,
    CHART_OF_ACCOUNT_ID bigint,
    DateOfVoucher datetime NULL,
    ReferenceNumber varchar(500) NULL,
    Remark varchar(255) NULL,
    Amount float NULL,
    PaymentMethod varchar(254) NULL
);

CREATE TABLE UserPermission (
    UserPermissionID bigint AUTO_INCREMENT  PRIMARY KEY,
    FormCaption varchar(254) NULL,
    FormName varchar(254) NULL,
    UserID bigint,
    Active bit NULL
);

CREATE TABLE TreatmentSickLeave (
    SLID bigint AUTO_INCREMENT  PRIMARY KEY,
    VID bigint,
    ReferenceNo varchar(254) NULL,
    ApplicationDate datetime NULL,
    PatientName varchar(500) NULL,
    Age varchar(254) NULL,
    LeaveFrom datetime NULL,
    LeaveTo datetime NULL,
    Disease varchar(255) NULL,
    DateDuration varchar(254) NULL
);

CREATE TABLE TreatmentProcedure (
    TRMPDC_ID bigint AUTO_INCREMENT  PRIMARY KEY,
    VID bigint,
    PrescribedProcedure varchar(255) NULL,
    Remarks varchar(255) NULL,
    Price float DEFAULT ((0)) NULL
);

CREATE TABLE TreatmentDisease (
    TDS_ID bigint AUTO_INCREMENT  PRIMARY KEY,
    Disease varchar(255) NULL,
    Diagnosis varchar(255) NULL,
    VID bigint 
);

CREATE TABLE Treatment (
    VID bigint AUTO_INCREMENT  PRIMARY KEY,
    VisitingDate datetime NULL,
    VisitingTime varchar(254) NULL,
    AppointmentNo bigint NULL,
    Patient_ID bigint,
    PatientName varchar(254) NULL,
    PatientAge varchar(254) NULL,
    Gender varchar(254) NULL,
    CompliantSymptoms varchar(255) NULL,
    PreviousDentalHistory varchar(255) NULL,
    PastMedicalHistory varchar(255) NULL,
    DentalHygienists bit NULL,
    GumDisease bit NULL,
    KeepingBadHabitsCheck bit NULL,
    PlaqueTartarCavities bit NULL,
    RoutineCheckUp bit NULL,
    Accident bit NULL,
    OralCancerDetection bit NULL,
    Development bit NULL,
    AestheticsOrthodontics bit NULL,
    NextAppointment bit NULL,
    NextAppointmentDate varchar(254) NULL,
    SubTotal float DEFAULT ((0)) NULL,
    Discount float DEFAULT ((0)) NULL,
    TAX float DEFAULT ((0)) NULL,
    Total float DEFAULT ((0)) NULL,
    Paid float DEFAULT ((0)) NULL,
    ChangeDue float DEFAULT ((0)) NULL
);

CREATE TABLE ProductInformation (
    PRODUCT_INFORMATION_ID bigint AUTO_INCREMENT  PRIMARY KEY,
    PRODUCT_ID bigint,
    ProductName varchar(500) NULL,
    GenericName varchar(500) NULL,
    CATEGORY_ID bigint DEFAULT ((0)) NULL,
    ManufactureDate datetime NULL,
    ExpirationDate datetime NULL,
    Barcode varchar(500) NULL,
    UOM varchar(254) NULL,
    Quantity float NULL,
    PurchasePrice float NULL,
    SalesPrice float NULL,
    Photo_File_Name varchar(254) NULL
);

CREATE TABLE ProductCategory (
    CATEGORY_ID bigint AUTO_INCREMENT  PRIMARY KEY,
    CATEGORY_NAME varchar(250) NULL
);

CREATE TABLE PrescriptionDetail (
    PCD_ID bigint AUTO_INCREMENT  PRIMARY KEY,
    PRESCRIPTION_ID bigint ,
    MedicineName varchar(255) NULL,
    Dodge varchar(254) NULL,
    Duration varchar(254) NULL,
    Qty varchar(254) NULL,
    Remark varchar(255) NULL
);

CREATE TABLE Prescription (
    PRESCRIPTION_ID bigint AUTO_INCREMENT  PRIMARY KEY,
    PrescriptionDate datetime NULL,
    AppointmentNo varchar(254) NULL,
    VisitID varchar(254) NULL,
    Patient_ID bigint ,
    PatientName varchar(255) NULL,
    Age varchar(254) NULL,
    Gender varchar(254) NULL
);

CREATE TABLE PhysiciansInformation (
    DOCTOR_ID bigint AUTO_INCREMENT  PRIMARY KEY,
    DoctorName varchar(500) NULL,
    Speciality varchar(500) NULL,
    Qualification varchar(500) NULL,
    Address varchar(255) NULL,
    ContactNumber varchar(500) NULL,
    CommencementDate datetime NULL
);

CREATE TABLE PharmacyBillingDetails (
    ID bigint AUTO_INCREMENT  PRIMARY KEY,
    Pharmacy_Billing_ID bigint NULL,
    PRODUCT_ID bigint ,
    Qty float NULL,
    UnitCost float NULL,
    UnitSales float NULL,
    TotalCost float NULL,
    TotalSales float NULL
);

CREATE TABLE PharmacyBilling (
    Pharmacy_Billing_ID bigint AUTO_INCREMENT  PRIMARY KEY,
    BILL_NO bigint NOT NULL,
    BILLING_DATE datetime NULL,
    Patient_ID bigint,
    WalkInCustomerName varchar(500) NULL,
    Total float NULL,
    Paid_PAYMENT float NULL,
    DUE_PAYMENT float NULL,
    PAYMENT_METHOD varchar(254) NULL
);

CREATE TABLE PatientInformation (
    Patient_ID bigint AUTO_INCREMENT  PRIMARY KEY,
    PatientName varchar(500) NULL,
    ParentNames varchar(500) NULL,
    Gender varchar(254) NULL,
    Age varchar(254) NULL,
    Occupation varchar(500) NULL,
    Address varchar(255) NULL,
    ContactNo varchar(500) NULL,
    Reference varchar(500) NULL,
    DateOfEnroll datetime NULL,
    Photo_File_Name varchar(254) NULL
);

CREATE TABLE DiseaseDiagnosis (
    DISEASE_DIAGNOSIS_ID bigint AUTO_INCREMENT  PRIMARY KEY,
    Disease varchar(255) NULL
);

CREATE TABLE DentalProcedures ( 
    PROCEDURES_ID bigint AUTO_INCREMENT  PRIMARY KEY,
    DENTAL_PROCEDURES varchar(500) NULL,
    PRICE float NULL
);

CREATE TABLE DentalNotation (
    NOTATION_ID bigint AUTO_INCREMENT  PRIMARY KEY,
    
    ctrlName varchar(254) NULL,
    DentalNo varchar(254) NULL,
    DentalNotation varchar(254) NULL,
    DentalTypes varchar(254) NULL
);

CREATE TABLE ClinicInformation (
    CLINIC_ID bigint AUTO_INCREMENT  PRIMARY KEY,
    
    ClinicName varchar(500) NULL,
    Phone varchar(500) NULL,
    Address varchar(255) NULL,
    ReportHeader varchar(255) NULL,
    ReportFooter varchar(255) NULL,
    Clinic_Logo varchar(255) NULL
);

CREATE TABLE ChartOfAccounts (
    CHART_OF_ACCOUNT_ID bigint AUTO_INCREMENT  PRIMARY KEY,
    AccountsName varchar(500) NULL,
    AccountsType varchar(500) NULL,
    AcStatus varchar(254) NULL
);

CREATE TABLE ApplicationUsers (
    UserID bigint AUTO_INCREMENT  PRIMARY KEY,
    FullName varchar(500) NULL,
    UserName varchar(500) NULL,
    Password varchar(500) NULL,
    ContactNo varchar(500) NULL,
    UserType varchar(500) NULL,
    JoiningDate datetime NULL,
    RegistrationDate datetime NULL,
    LastLogonDateTime datetime NULL,
    Photo_File_Name varchar(255) NULL,
    Designation varchar(500) NULL
);

/*  ALTER TABLE Voucher ADD CONSTRAINT PK__Voucher__60E7A0B3173876EA;
 ALTER TABLE ApplicationUsers ADD CONSTRAINT PK__Applicat__1788CCAC0519C6AF;
 ALTER TABLE TreatmentProcedure ADD CONSTRAINT PK__Treatment__1A80ED7C300424B4;
 ALTER TABLE TreatmentDisease ADD CONSTRAINT PK__Treatment__5D4C3E8C37A5467C;
 ALTER TABLE Treatment ADD CONSTRAINT PK__Treatment__C5DF22BB276EDEB3;
 ALTER TABLE TreatmentSickLeave ADD CONSTRAINT PK__Treatment__C5DF22BB276EDEB8;
 ALTER TABLE ProductCategory ADD CONSTRAINT PK__ProductC__E7DA297C09DE7BCC;
 ALTER TABLE PrescriptionDetail ADD CONSTRAINT PK__Prescrip__B1EF791549C3F6B7;
 ALTER TABLE Prescription ADD CONSTRAINT PK__Prescrip__83756B5F4222D4EF;
 ALTER TABLE PhysiciansInformation ADD CONSTRAINT PK__Physicia__596ABDB00DAF0CB0;
 ALTER TABLE PharmacyBillingDetails ADD CONSTRAINT PK__Pharmacy__3214EC271ED998B2;
 ALTER TABLE PharmacyBilling ADD CONSTRAINT PK__Pharmacy__0856FE9F1B0907CE;
 ALTER TABLE PatientInformation ADD CONSTRAINT PK__Patient__C1A88B597F60ED59;
 ALTER TABLE DiseaseDiagnosis ADD CONSTRAINT PK__DiseaseD__121D104833D4B598;
 ALTER TABLE DentalProcedures ADD CONSTRAINT PK__DentalPr__EA14109F239E4DCF;
 ALTER TABLE ChartOfAccounts ADD CONSTRAINT PK__ChartOfA__83960DB71367E606;
 ALTER TABLE UserPermission ADD CONSTRAINT PK__UserP__1788CCAC0519AE58;
 ALTER TABLE ProductInformation ADD CONSTRAINT PK__ProductIn__1788CCAC0519BD69;
 ALTER TABLE DentalNotation ADD CONSTRAINT PK__Denta__1788CCAC05196F7D;
 ALTER TABLE ClinicInformation ADD CONSTRAINT PK__ClinicIn__1788CCAC0519AAA2; */






