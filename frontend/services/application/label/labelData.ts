import { LabelItem } from '~/domain/models/label/label'

export class LabelDTO {
  id: number
  text: string
  label_class_1:string
  prefixKey: string | null
  suffixKey: string | null
  backgroundColor: string
  textColor: string

  constructor(item: LabelItem) {
    this.id = item.id
    this.text = item.text
    this.label_class_1 = item.label_class_1
    this.prefixKey = item.prefixKey
    this.suffixKey = item.suffixKey
    this.backgroundColor = item.backgroundColor
    this.textColor = '#ffffff'
  }
}
