export const getEstimatedDiameter = (obj) => {
    const estimated = { 
        max: Number(obj.estimated_diameter?.kilometers.estimated_diameter_max).toFixed(3),
        min: Number(obj.estimated_diameter?.kilometers.estimated_diameter_min).toFixed(3),
    }
    return estimated
}

export const getTabObject = ({ near_earth_objects }) => {
    const tabsArray = Object.keys(near_earth_objects)?.sort().map(item =>
      ({ value: item, label: item.split('-').reverse().join('/') })
    );
    return tabsArray
  }