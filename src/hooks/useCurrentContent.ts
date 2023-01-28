import { useSelector } from "react-redux"
import { intContent, languageItem, viewType } from "../const/int-content"
import { RootState } from "../store/store"

export const UseCurrentContent = (
  viewName: keyof languageItem,
  contentName: keyof viewType
): string => {
  const appState = useSelector((state: RootState) => state.app)

  const { currentLanguage } = appState

  const demandContent: string =
    intContent[currentLanguage][viewName][contentName]

  return demandContent
}
