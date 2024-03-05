export const calculateCarbsByProtein = (protein) => {
    let total = protein / 0.3;
    return  total * 0.2;
}
export const calculateProteinByCarbs = (carbs) => {
    let total = carbs / 0.2;
    return  total * 0.3;
}