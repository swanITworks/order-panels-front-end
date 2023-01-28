export type viewType = {
  title: string
}

export type languageItem = {
  home: viewType
}

export interface intContentTypes {
  pl: languageItem
  eng: languageItem
}

export const intContent: intContentTypes = {
  pl: {
    home: {
      title: "Witaj na stronie Labi Meble",
    },
  },
  eng: {
    home: {
      title: "Welcome on Labi Meble web page",
    },
  },
}
