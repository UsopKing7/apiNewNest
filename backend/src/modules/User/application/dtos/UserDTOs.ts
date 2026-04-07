export namespace UserDTOs {
  export interface CreateUserDTO {
    username: string
    email: string
    password: string
  }

  export interface LoginUserDTO {
    email: string
    password: string
  }

  export interface UserResponseDTO {
    id_user: string
    username: string
    email: string
  }
}
