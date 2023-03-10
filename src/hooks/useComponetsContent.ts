import { useSelector } from "react-redux"
import {
  ComponentCategory,
  ViewName,
  IntContentTypes,
  ComponentElementsType,
  intContent,
  UiElementType,
} from "../const/int-content"
import { RootState } from "../store/store"

export const useComponentContent = (
  componentName: keyof ComponentCategory["components"]
): ComponentElementsType => {
  const appState = useSelector((state: RootState) => state.app)

  const { currentLanguage } = appState

  const demandContent: ComponentElementsType =
    intContent[currentLanguage].components[componentName]

  return demandContent
}
