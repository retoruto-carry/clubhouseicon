export type BlackFilterWhiteTextIconStyleName = 'BlackFilterWhiteText'
export type BlackFilterWhiteTextIconStyleOption = {
  fontColor: string
}
export type BlackFilterWhiteTextIconStyle = {
  name: BlackFilterWhiteTextIconStyleName
  option: BlackFilterWhiteTextIconStyleOption
}

export type WhiteFilterBlackTextIconStyleName = 'WhiteFilterBlackText'
export type WhiteFilterBlackTextIconStyleOption = {
  fontColor: string
}
export type WhiteFilterBlackTextIconStyle = {
  name: WhiteFilterBlackTextIconStyleName
  option: WhiteFilterBlackTextIconStyleOption
}

export type LabelIconStyleName = 'Label'
export type LabelIconStyleOption = {
  labelColor: string
  fontColor: string
  labelSize: number
  labelY: number
}
export type LabelIconStyle = {
  name: LabelIconStyleName
  option: LabelIconStyleOption
}

export type OutlineTextIconStyleName = 'OutlineText'
export type OutlineTextIconStyleOption = {
  outlineColor: string
  fontColor: string
}
export type OutlineTextIconStyle = {
  name: OutlineTextIconStyleName
  option: OutlineTextIconStyleOption
}

export type NoneIconStyleName = 'None'
export type NoneIconStyleOption = null
export type NoneIconStyle = {
  name: NoneIconStyleName
  option: NoneIconStyleOption
}

export type IconStyle =
  | BlackFilterWhiteTextIconStyle
  | WhiteFilterBlackTextIconStyle
  | LabelIconStyle
  | OutlineTextIconStyle
  | NoneIconStyle

export type IconStyleOption =
  | BlackFilterWhiteTextIconStyleOption
  | WhiteFilterBlackTextIconStyleOption
  | LabelIconStyleOption
  | OutlineTextIconStyleOption
  | NoneIconStyleOption

export type IconStyleName =
  | BlackFilterWhiteTextIconStyleName
  | WhiteFilterBlackTextIconStyleName
  | LabelIconStyleName
  | OutlineTextIconStyleName
  | NoneIconStyleName
