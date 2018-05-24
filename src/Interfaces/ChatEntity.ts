export default interface ICanChat {
    getName(): string
    getType(): string
    setName(val: string): void
    getInfoString(): string
    getItems(): ICanChat[]
}