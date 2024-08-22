export class LabelItem {
  constructor(
    readonly id: number,
    readonly text: string,
    readonly label_class_1: string,
    readonly prefixKey: string | null,
    readonly suffixKey: string | null,
    readonly backgroundColor: string,
    readonly textColor: string = '#ffffff'
  ) {}

  static create(
    text: string,
    label_class_1: string,
    prefixKey: string | null,
    suffixKey: string | null,
    backgroundColor: string
  ): LabelItem {
    return new LabelItem(0, text, label_class_1, prefixKey, suffixKey, backgroundColor)
  }
}
