import combination from "./assets/icons/dry-skin.png"
import normal from "./assets/icons/normal.png"
import rash from "./assets/icons/skin-rash.png"
import pimples from "./assets/icons/pimples.png"

export const skinTypes = [
    {
        id: 1,
        type: "Dry",
        description: "Dry skin generally produces less natural oils than other types of skin. It may appear dul and become rough, flaky. It often feels tight or less elastic, noticeably dehydrated",
        features: ["Dehydrated", "Flaky", "Rough", "Itchy", "Irritated"],
        image: rash
    },
    {
        id: 2,
        type: "Oily",
        description: "Oily skin products excess oil and has a persistently shiny or greasy appearance. Pores can become clogged, enlarged, and dead skin cells may accumulate. Blackheads, pimples, and other types of acne are common.",
        features: ["Large Pores", "Greasy", "Acne", "Shiny", "Blackheads"],
        image: pimples
    },
    {
        id: 3,
        type: "Combination",
        description: "Combination skin includes areas that are dry as well as oily - with the T-zone commonly being oily, and the cheeks being either dry or normal.",
        features: ["Large Pores", "Acne", "Patchy", "Oily"],
        image: combination
    },
    {
        id: 4,
        type: "Normal",
        description: "Normal skin often refers to well-blanaced skin, where the skin has clear appearance, has balanced moisture levels, and has minimal blemishes and pores. Normal skin may also be less reactive to products.",
        features: ["Clear", "Balanced", "Even Tone", "Smaller Pores"],
        image: normal
    }
]

export const colors = {
    lightBlue: "#ECF7FE",
    darkBlue: "#3A405A"
}