import React, { useContext } from 'react'

export interface IColdEmailsContext {
    generatedDms : { generatedDms: any; isLoading:boolean };
    generatedEmails: { generatedEmails: any; isLoading: boolean };
    totalCredits: { totalCredits: number; isLoading: boolean };
    createUser: { createUser: any ; isLoading: boolean};
    payment: { payment: any ; isLoading: boolean};
    edit : { edit: any; isLoading: boolean };
    fetchTotalCredits: (userEmail?: string, cb?: ((response?: any) => void) | undefined) => Promise<void>;
    getLinkedinMessage: (values: any, file: File) => Promise<void>;
    setGeneratedEmails: (generatedEmails: { generatedEmails: any; isLoading: boolean }) => void;
    getGeneratedDms: (userEmail?: string, cb?: ((response?: any) => void) | undefined) => Promise<void>;
    getCreateUser: (userEmail?: string, coupon?: string,cb?: ((response?: any) => void) | undefined) => Promise<void>;
    getPayment: (userEmail?: string, amount?: number) => Promise<void>;
    getEdit: (userEmail?: string, message_id?: string, message?: string) => Promise<void>;

    // fetchGeneratedEmails: () => void;
}

const ColdEmailsContext = React.createContext<IColdEmailsContext>({} as IColdEmailsContext);

export default ColdEmailsContext;

export const useColdEmailsContext = () => useContext(ColdEmailsContext)