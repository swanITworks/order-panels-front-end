export type ComponentElementsType = {
  title: string
}

export type ViewName = {
  home: ComponentElementsType
  newQuontation: ComponentElementsType
}

export type UiElementType = {
  buttons: {
    goToPriceOffer: string
  }
}

export type ComponentCategory = {
  views: ViewName
  ui: UiElementType
}

export interface IntContentTypes {
  pl: ComponentCategory
  eng: ComponentCategory
}

export const intContent: IntContentTypes = {
  pl: {
    views: {
      home: { title: "Witaj na stronie Labi Meble" },
      newQuontation: { title: "Nowa wycena" },
    },
    ui: { buttons: { goToPriceOffer: "Wyceń usługę wykonania frontów" } },
  },
  eng: {
    views: {
      home: { title: "Witaj na stronie Labi Meble" },
      newQuontation: { title: "New Qountation" },
    },
    ui: { buttons: { goToPriceOffer: "Panel Quontation" } },
  },
}
