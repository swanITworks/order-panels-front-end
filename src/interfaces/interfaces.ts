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

export interface IPanelItem {
  id: string
  height: number
  width: number
  pcs: number
  edgeLeft: boolean
  edgeTop: boolean
  edgeRight: boolean
  edgeBottom: boolean
}
