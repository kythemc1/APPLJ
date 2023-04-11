export interface IAuthState {
  isLogged: boolean;
  token: string | null;
  refreshToken: string | null;
  refreshTokenExpiredDate: number | null;
  type: string | null;
}

export interface IUserState {
  id: number | null;
  address: string | null;
  authorities: string[] | null;
  avatar: string | null;
  birthday: Date | null;
  firstName: string | null;
  gender: string | null;
  lastName: string | null;
  status: string | null;
  username: string | null;
}
export interface GetAllRegistry{
    
}
