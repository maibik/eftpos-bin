declare module "eftpos-bin" {
    export function isEftpos(bin: number): boolean;
    export function getCardTypeByBin(bin: number): string;
}