export class LabelItem {
  constructor(
    readonly id: number,
    readonly text: string,
    readonly text1: string,
    readonly prefixKey: string | null,
    readonly suffixKey: string | null,
    readonly backgroundColor: string,
    readonly textColor: string = '#ffffff'
  ) {}

  static create(
    text: string,
    text1: string,
    prefixKey: string | null,
    suffixKey: string | null,
    backgroundColor: string
  ): LabelItem {
    return new LabelItem(0, text,text1, prefixKey, suffixKey, backgroundColor)
  }
}
