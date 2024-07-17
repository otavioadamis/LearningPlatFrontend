import { User } from "../user/User";

export interface LoginResponse {
    token: string,
    user: User
}