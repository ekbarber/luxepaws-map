export interface Voucher {
  CcpVoucherNumber: string
  CcpVoucherStatus: string
  CcpPartnerId: number
  RedeemerFirstName: string
  RedeemerLastName: string
  OrganizationName: string
  PermitNumber: string
  PartnerAddressLine1: string
  PartnerAddressLine2: string | undefined
  PartnerAddressCity: string
  PartnerAddressState: string
  PartnerAddressZip: string
  PartnerPhoneNumber: string
  ColonyLocation: string
  IsESA: boolean | undefined
  DateIssued: string
  DateExpire: string
}
