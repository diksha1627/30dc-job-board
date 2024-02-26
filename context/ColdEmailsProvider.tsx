import { useState } from "react";
import ColdEmailsContext, { IColdEmailsContext } from "./ColdEmailsContext"
import API from "@/utils";
// import { set } from "react-hook-form";
import axios ,{AxiosError }  from 'axios';

interface IColdEmailsProvider {
  children: any;
}

const ColdEmailsProvider = (props: IColdEmailsProvider) => {
  const [generatedEmails, setGeneratedEmails] = useState<{ generatedEmails: any; isLoading: boolean }>({
    generatedEmails: null,
    isLoading: false
  });

  const [totalCredits, setTotalCredits] = useState<{ totalCredits: number; isLoading: boolean }>({
    totalCredits: 0,
    isLoading: false
  });

  const[generatedDms,setGeneratedDms] = useState<{ generatedDms: any , isLoading: boolean }>({
    generatedDms : null,
    isLoading: false
  })

  const [createUser,setCreateUser] = useState<{ createUser: any , isLoading: boolean }>({
    createUser:null,
    isLoading:false
  })

  const [payment,setPayment] = useState<{ payment: any , isLoading: boolean }>({
    payment:null,
    isLoading:false
  })

  const [edit,setEdit] = useState<{ edit: any , isLoading: boolean }>({
    edit:null,
    isLoading:false
  })

  const fetchTotalCredits = async (userEmail?: string, cb?: (response?: any) => void) => {
    try {
      API.get(`/credits?email=${userEmail}`)
        .then((response: any) => {
          const result = response?.data;
          setTotalCredits({ totalCredits: result?.credits, isLoading: false });
          cb?.(result?.credits);
        })
        .catch((err: any) => {
          // console.log({err});
          
          throw new Error(`API error ${err}`);
        })
    } catch (error) {
      throw new Error(`API error ${error}`)
    }
  }

  const getLinkedinMessage = async (values: any, file: File) => {
    setGeneratedEmails({ generatedEmails: null, isLoading: true });
    const payload = Object.assign({
      email: values?.email,
      job_description: values?.jobDescription,
      resume: file,
      person_name: values?.hiringPerson,
      gpt_option: 'gpt-3.5-turbo',
      temperature_setting: 0
    })
    try {
      API.post(`/generate_industry_linkedin_dm`, payload, { headers: {'Content-Type': 'multipart/form-data' }})
        .then((response: any) => {
          setGeneratedEmails({ generatedEmails: JSON.stringify(response?.data), isLoading: false });  
        })
        .catch((err: any) => {
          // console.log({err});
          throw new Error(`API error ${err}`);
        })
    } catch (error: any) {
          if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            if (axiosError.response) {
              // Handle the specific error response from the API
              // console.log('API error:', axiosError.response.data);
            }
          }
          throw new Error(`API error: ${error}`);
        }
  }

  const getGeneratedDms = async (userEmail?: string,cb?: (response?: any) => void) =>{
    setGeneratedDms({ generatedDms: null, isLoading: true });
    try {

     const response = await API.get(`/get_generated_dms?email=${userEmail}`)
     const result = response?.data;
    //  console.log({ result });
     setGeneratedDms({ generatedDms: result, isLoading: false });
     cb?.(result);

    } catch (error) {
      console.error(`API error ${error}`);

      // throw new Error(`API error ${error}`)

    }
  }


  const getCreateUser = async (userEmail?: string,coupon?: string,cb?: (response?: any) => void) =>{
    setCreateUser({ createUser: null , isLoading: true});
    try {

      const response = await API.get(`/create_user?email=${userEmail}&coupon=${coupon}`)
      const result = response?.data;
      setCreateUser({ createUser: result, isLoading: false });
      cb?.(result);
     } catch (error) {
      //  console.error(`API error ${error}`);
 
       // throw new Error(`API error ${error}`)
 
     }
  }

  const getPayment = async (userEmail?: string, amount?: number) => {
    setPayment({ payment: null, isLoading: true });
    const payload = {
      email: userEmail,
      amount: amount,
    };
    try {
      // console.log({ payload });
  
      const response = await API.post('/pay', payload, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });
  
      // console.log({ response });
      const paymentLink = response.data;

      // If the payment link exists, open it in a new browser tab
      if (paymentLink) {
        window.open(paymentLink, '_blank');
      }
      setPayment({ payment: JSON.stringify(response?.data), isLoading: false });
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          // Handle the specific error response from the API
          // console.log('API error:', axiosError.response.data);
        }
      }
      throw new Error(`API error: ${error}`);
    }
  };


  const getEdit = async (userEmail?: string, message_id?: string, message?: string) => {
    setEdit({ edit: null, isLoading: true });
    const payload = {
      email: userEmail,
      message_id: message_id,
      message: message,
    };
    try {
      const response = await API.post('/update_message', payload, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });
  
      setEdit({ edit: JSON.stringify(response?.data), isLoading: false });
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          // Handle the specific error response from the API 
          // console.log('API error:', axiosError.response.data);
        }
      }
      throw new Error(`API error: ${error}`);
    }
  };

  const contextValue: IColdEmailsContext = {
    generatedEmails,
    setGeneratedEmails,
    totalCredits,
    fetchTotalCredits,
    getLinkedinMessage,
    generatedDms,
    getGeneratedDms,
    createUser,
    getCreateUser,
    payment,
    getPayment,
    edit,
    getEdit
  }
 
  return (
    <ColdEmailsContext.Provider value={contextValue}>
      {props?.children}
    </ColdEmailsContext.Provider>
  )
}

export default ColdEmailsProvider;