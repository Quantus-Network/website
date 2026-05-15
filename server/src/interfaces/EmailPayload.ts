export interface EmailPayload {
    from: string;
    to: string;
    subject: string;
    html: string;
}

export interface SponsorshipPayload {
    name: string;
    email: string;
    phone?: string;
    designation: string;
    organization: string;
    investmentTier: string;
    additionalInfo?: string;
}