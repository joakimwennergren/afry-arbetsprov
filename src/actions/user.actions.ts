export const CREATE_USER = "USER::CREATE_USER";
export const CREATE_USER_FAILED = "USER::CREATE_USER_FAILED";
export const CREATE_USER_SUCCESS = "USER::CREATE_USER_SUCCESS";

export const createUser = (user: any) => ({ type: CREATE_USER, payload: user });

export const DETACH_USER = "USER::DETACH_USER";
export const DETACH_USER_FAILED = "USER::DETACH_USER_FAILED";
export const DETACH_USER_SUCCESS = "USER::DETACH_USER_SUCCESS";

export const detachUser = (users: any) => ({ type: DETACH_USER, payload: users });

export const ATTACH_USER = "USER::ATTACH_USER";
export const ATTACH_USER_FAILED = "USER::ATTACH_USER_FAILED";
export const ATTACH_USER_SUCCESS = "USER::ATTACH_USER_SUCCESS";

export const attachUser = (user: any, companyIndex: number) => ({ type: ATTACH_USER, payload: { user, companyIndex } });