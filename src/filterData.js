const filters = {
    grayscale: {
        name: 'grayscale',
        min: 0,
        max: 1,
        step: .01,
        unit: "",
        defaultValue: 1,
    },
    saturate: {
        name: 'saturate',
        min: 0,
        max: 400,
        step: 1,
        unit: "%",
        defaultValue: 200,
    },
    blur: {
        name: 'blur',
        min: 0,
        max: 10,
        step: .01,
        unit: "px",
        defaultValue: 5,
    },
    sepia: {
        name: 'sepia',
        min: 0,
        max: 1,
        step: .01,
        defaultValue: .5,
        unit: ""
    },
    hueRotate: {
        name: 'hue-rotate',
        min: 0,
        max: 180,
        step: .1,
        defaultValue: 90,
        unit: "deg"
    },
    brightness: {
        name: 'brightness',
        min: 0,
        max: 200,
        step: .1,
        defaultValue: 125,
        unit: "%"
    },
    contrast: {
        name: 'contrast',
        min: 0,
        max: 2,
        step: .1,
        defaultValue: 2,
        unit: ""
    },
    invert: {
        name: 'invert',
        min: 0,
        max: 1,
        step: .01,
        defaultValue: 1,
        unit: ""
    },
    opacity: {
        name: 'opacity',
        min: 0,
        max: 1,
        step: .01,
        defaultValue: .5,
        unit: ""
    }

}

export default filters;