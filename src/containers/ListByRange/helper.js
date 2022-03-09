export const getEstimatedDiameter = (obj) => {
    const estimated = { 
        max: Number(obj.estimated_diameter?.kilometers.estimated_diameter_max).toFixed(3),
        min: Number(obj.estimated_diameter?.kilometers.estimated_diameter_min).toFixed(3),
    }
    return estimated
}