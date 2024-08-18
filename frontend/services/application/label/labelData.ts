import { LabelItem } from '~/domain/models/label/label'

export class LabelDTO {
  id: number
  text: string
  text1:string
  prefixKey: string | null
  suffixKey: string | null
  backgroundColor: string
  textColor: string

  constructor(item: LabelItem) {
    this.id = item.id
    this.text = item.text
    this.text1 = item.text1
    this.prefixKey = item.prefixKey
    this.suffixKey = item.suffixKey
    this.backgroundColor = item.backgroundColor
    this.textColor = '#ffffff'
  }
}
