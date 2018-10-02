const productsList = [];
productsList[0] = 'tandenborstel';
productsList[1] = 'Deodorant';
productsList[2] = 'Bakmeel';
productsList[3] = 'Wortels';
productsList[4] = 'Tandpasta';
productsList[5] = 'Krop sla';
productsList[6] = 'Maggi';
productsList[7] = 'Lays chips';
productsList[8] = 'WC papier';
productsList[9] = 'Shampoo';

productsList[7] = 'AH chips';
productsList.push('Lays chips');

console.table(productsList);

for (let index = 0; index < productsList.length; index++) {
    const element = productsList[index];
    console.log(element);
}


products = [
    'tandenborstel',
    'Deodorant',
    'Bakmeel',
    'Wortels',
    'Tandpasta',
    'Krop sla',
    'Maggi',
    'Lays chips',
    'WC papier',
    'Shampoo'
]

console.table(products);

let newProductArray = products.map(function(element, index, array){
    let newElement = element.toUpperCase();
    return newElement;
});

console.log(newProductArray);
