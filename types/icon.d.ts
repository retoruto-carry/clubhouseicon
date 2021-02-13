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
  fontColor: string
}
export type LabelIconStyle = {
  name: LabelIconStyleName
  option: LabelIconStyleOption
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
  | NoneIconStyle

export type IconStyleOption =
  | BlackFilterWhiteTextIconStyleOption
  | WhiteFilterBlackTextIconStyleOption
  | LabelIconStyleOption
  | NoneIconStyleOption

export type IconStyleName =
  | BlackFilterWhiteTextIconStyleName
  | WhiteFilterBlackTextIconStyleName
  | LabelIconStyleName
  | NoneIconStyleName
