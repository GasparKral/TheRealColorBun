import { UUID } from 'crypto';
export type Pallette = {
    id: UUID;
    baseColorName: string;
    baseColor: string | string[];
    numberOfColors: number;
    HUEVariation: number;
    SaturationVariation: number;
    LightnessVariation: number;
    LockedColors: number[];
};
