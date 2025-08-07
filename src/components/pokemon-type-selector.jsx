"use client"

import { Skeleton } from "@/components/ui/skeleton"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PokemonTypeSelector({ pokemonTypes, selectedType, onTypeChange, loading }) {
  return (
    <div className="w-full">
      {loading ? (
        <Skeleton className="h-10 w-full" />
      ) : (
        <Select value={selectedType} onValueChange={onTypeChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select a Pokémon type" />
          </SelectTrigger>
          <SelectContent>
            {pokemonTypes.map((type) => (
              <SelectItem key={type.name} value={type.name}>
                <span className="capitalize">{type.name}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    </div>
  )
}