export interface IUser {
  auth0Id: string
}

export interface IMaterial {
  id: string
  materialName: string
  thickness: number
  color: string
  finish: string
  heightInCm: number
  widthInCm: number
  structure: boolean
  isStructureTransverse: boolean
}

export type MaterialType = {
  id: string
  name: string
  thickness: number
  color: string
  finish: string
  heightInCm: number
  widthInCm: number
  structure: boolean
  isStructureTransverse: boolean
}
