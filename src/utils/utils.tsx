import { color } from "@mui/system"
import { IMaterial, MaterialType } from "../interfaces/interfaces"

export const createMaterialObject = (
  id: string,
  materialName: string,
  thickness: number,
  color: string,
  finish: string,
  heightInCm: number,
  widthInCm: number,
  structure: boolean,
  isStructureTransverse: boolean
): IMaterial => {
  return {
    id,
    materialName,
    thickness,
    color,
    finish,
    heightInCm,
    widthInCm,
    structure,
    isStructureTransverse,
  }
}
