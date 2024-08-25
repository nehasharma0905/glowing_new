export type TUserState = {
  name: string;
  email: string;
  auth: {
    isAuthenticated: boolean;
    isLoading: boolean;
    error: any;
  };
};
