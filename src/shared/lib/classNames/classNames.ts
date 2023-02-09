type Mods = Record<string, boolean | string>

type IClassNames = (cls: string, mods?: Mods, additional?: string[]) => string

export const classNames: IClassNames = (cls: any, mods: any = {}, additional: Array<string | undefined> = []): string => {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([cls]) => cls)
  ]
    .join(' ')
}
