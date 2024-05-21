import type { Pallette } from '@/types/Pallette';

import { create } from 'zustand';

interface PallettesStore {
    pallettes: Pallette[];
    addPallette: (pallette: Pallette) => void;
    removePallette: (palletteId: string) => void;
    modifyHueVariation: (palletteId: string, hueVariation: number) => void;
    modifySaturationVariation: (
        palletteId: string,
        saturationVariation: number
    ) => void;
    modifyLightnessVariation: (
        palletteId: string,
        lightnessVariation: number
    ) => void;
    modifyLockedColors: (palletteId: string, lockedColor: number) => void;
    setPalletteName: (palletteId: string, name: string) => void;
    showedPalletteId: (ids: string[]) => Pallette[];
}

export const usePallettesStore = create<PallettesStore>((set, get) => ({
    pallettes: Array<Pallette>(10).fill({
        id: crypto.randomUUID(),
        baseColorName: '',
        baseColor: '#1c1c1c',
        numberOfColors: 5,
        HUEVariation: 18,
        SaturationVariation: 7,
        LightnessVariation: 7,
        LockedColors: [],
    }),
    addPallette: (pallette) =>
        set((state) => ({ pallettes: [...state.pallettes, pallette] })),
    removePallette: (palletteId) =>
        set((state) => ({
            pallettes: state.pallettes.filter(
                (pallette) => pallette.id !== palletteId
            ),
        })),

    modifyHueVariation: (palletteId, hueVariation) =>
        set((state) => ({
            pallettes: state.pallettes.map((pallette) => {
                if (pallette.id === palletteId) {
                    return { ...pallette, HUEVariation: hueVariation };
                }
                return pallette;
            }),
        })),

    modifySaturationVariation: (palletteId, saturationVariation) =>
        set((state) => ({
            pallettes: state.pallettes.map((pallette) => {
                if (pallette.id === palletteId) {
                    return {
                        ...pallette,
                        SaturationVariation: saturationVariation,
                    };
                }
                return pallette;
            }),
        })),

    modifyLightnessVariation: (palletteId, lightnessVariation) =>
        set((state) => ({
            pallettes: state.pallettes.map((pallette) => {
                if (pallette.id === palletteId) {
                    return {
                        ...pallette,
                        LightnessVariation: lightnessVariation,
                    };
                }
                return pallette;
            }),
        })),

    modifyLockedColors: (palletteId, lockedColor) =>
        set((state) => ({
            pallettes: state.pallettes.map((pallette) => {
                if (pallette.id === palletteId) {
                    return {
                        ...pallette,
                        LockedColors: [...pallette.LockedColors, lockedColor],
                    };
                }
                return pallette;
            }),
        })),

    setPalletteName: (palletteId, name) =>
        set((state) => ({
            pallettes: state.pallettes.map((pallette) => {
                if (pallette.id === palletteId) {
                    return {
                        ...pallette,
                        baseColorName: name,
                    };
                }
                return pallette;
            }),
        })),

    showedPalletteId: (ids) =>
        get().pallettes.filter((pallette) => ids.includes(pallette.id)),
}));
