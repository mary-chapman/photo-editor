const filters = {
    grayscale: {
        min: 0,
        max: 1,
        step: .01,
        unit: "",
        defaultValue: 0.5,
    },
    saturate: {
        min: 0,
        max: 500,
        step: 1,
        unit: "%",
        defaultValue: 250,
    },
    blur: {
        min: 0,
        max: 10,
        step: .01,
        unit: "px",
        defaultValue: 5,
    },
    
}

export default filters;