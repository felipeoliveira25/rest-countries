/* eslint-disable @typescript-eslint/no-namespace */
import { Country } from "@/domain/models";

export interface LoadCountries {
    loadAll: () => Promise<LoadCountries.Model | undefined > 
}

export namespace LoadCountries {
    export type Model = {
        results: Country[];
    }
}