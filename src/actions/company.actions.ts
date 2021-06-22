export const CREATE_COMPANY = "COMPANY::CREATE_COMPANY";
export const CREATE_COMPANY_FAILED = "COMPANY::CREATE_COMPANY_FAILED";
export const CREATE_COMPANY_SUCCESS = "COMPANY::CREATE_COMPANY_SUCCESS";

// Find Quiz room dispatchable
export const createCompany = (company: string) => ({ type: CREATE_COMPANY, payload: company });
